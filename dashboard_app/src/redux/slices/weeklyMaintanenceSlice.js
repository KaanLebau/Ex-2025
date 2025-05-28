/** @format */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { appModel } from "../../model/appModel";

export const fetchWeeklyTasks = createAsyncThunk(
  "weeklyMaintenance/fetchUfoTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      let state = getState().weeklyMaintenance.weeklyMaintenanceData;

      if (!state || (Array.isArray(state) && state.length === 0)) {
        const line = getState().line.line;
        const response = await appModel.fetchWeeklyControl(line.toLowerCase());

        if (!Array.isArray(response)) {
          return rejectWithValue("Invalid API response format.");
        }

        saveState("weeklyMaintenance", response); // ✅ Persist
        return response;
      }

      return state;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const saveState = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to localStorage", error);
  }
};
// Load persisted data from localStorage
const loadFromStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error("Error loading state from localStorage", error);
    return [];
  }
};

const initialState = {
  weeklyMaintenanceData: loadFromStorage("weeklyMaintenance") || [],
  loading: false,
  error: null,
};

const weeklyMaintenanceSlice = createSlice({
  name: "weeklyMaintenance",
  initialState,
  reducers: {
    updateWeeklyMaintenanceData: (state, action) => {
      const { machineId, field, value } = action.payload;

      if (!state.weeklyMaintenanceData[machineId]) {
        state.weeklyMaintenanceData[machineId] = {};
      }

      state.weeklyMaintenanceData[machineId][field] = value;

      // Persist in localStorage
      localStorage.setItem(
        "weeklyMaintenance",
        JSON.stringify(state.weeklyMaintenanceData)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklyTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeeklyTasks.fulfilled, (state, action) => {
        console.log("🔹 API Response received in Redux:", action.payload);
        if (!Array.isArray(action.payload)) {
          console.error(
            "🚨 fetchWeeklyTasks returned non-array data:",
            action.payload
          );
        }
        state.weeklyMaintenanceData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWeeklyTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateWeeklyMaintenanceData } = weeklyMaintenanceSlice.actions;
export default weeklyMaintenanceSlice.reducer;
