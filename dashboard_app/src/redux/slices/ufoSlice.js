/** @format */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { appModel } from "../../model/appModel";

// Helper functions for localStorage
const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Error loading state from localStorage", error);
    return undefined;
  }
};

const saveState = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to localStorage", error);
  }
};

// Async Thunks to fetch data
export const fetchUfoTasks = createAsyncThunk(
  "ufo/fetchUfoTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const line = getState().line.line;
      const response = await appModel.fetchUfoTasks(line.toLowerCase());
      saveState("ufoTasks", response); // Persist to localStorage
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDailyControlTasks = createAsyncThunk(
  "ufo/fetchDailyControlTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const line = getState().line.line;
      const response = await appModel.fetchDailyControl(line.toLowerCase());
      saveState("dailyControlTasks", response); // Persist to localStorage
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Load initial state from localStorage
const initialState = {
  ufoTasks: loadState("ufoTasks") || [],
  dailyControlTasks: loadState("dailyControlTasks") || [],
  checkedTasks: loadState("checkedTasks") || {},
  loading: false,
  error: null,
};

const ufoSlice = createSlice({
  name: "ufo",
  initialState,
  reducers: {
    toggleTaskChecked: (state, action) => {
      const taskId = action.payload;
      state.checkedTasks[taskId] = !state.checkedTasks[taskId];
      saveState("checkedTasks", state.checkedTasks); // Persist checked state
    },
    completeDailyControlTask: (state, action) => {
      const { taskId, status, signingShift } = action.payload;
      const currentTime = new Date().toLocaleString("sv-SE"); // Format: "11-03-2025 16:43"

      // Update task in ufoTasks
      let task = state.ufoTasks.find((t) => t.machineId + t.task === taskId);
      if (!task) {
        console.log("not ufo task");
        // If not in ufoTasks, try dailyControlTasks
        task = state.dailyControlTasks.find(
          (t) => t.machineName + t.task === taskId
        );
      }

      if (task) {
        task.date = currentTime;
        task.signingShift = signingShift;
        task.status = status;

        saveState("ufoTasks", state.ufoTasks);
        saveState("dailyControlTasks", state.dailyControlTasks);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUfoTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUfoTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.ufoTasks = action.payload || [];
        saveState("ufoTasks", state.ufoTasks);
      })
      .addCase(fetchUfoTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDailyControlTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDailyControlTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyControlTasks = action.payload || [];
        saveState("dailyControlTasks", state.dailyControlTasks);
      })
      .addCase(fetchDailyControlTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions
export const { toggleTaskChecked, completeDailyControlTask } = ufoSlice.actions;

// Export reducer
export default ufoSlice.reducer;
