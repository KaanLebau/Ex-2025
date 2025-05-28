/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { appModel } from "../../model/appModel";

export const fetchMachineList = createAsyncThunk(
  "machines/fetchMachines",

  async () => {
    // Check if machineList exists in local storage
    const cachedList = JSON.parse(localStorage.getItem("machineList"));

    // If a cached list exists, return it directly
    if (cachedList && cachedList.length > 0) {
      return cachedList;
    }

    // Otherwise, fetch from API
    const response = await appModel.getMachines();

    // Store fetched machine list in local storage
    localStorage.setItem("machineList", JSON.stringify(response));

    return response;
  }
);

const initialState = {
  machineList: JSON.parse(localStorage.getItem("machineList")) || [],
  activeMachine: JSON.parse(localStorage.getItem("activeMachine")) || null,
  loading: false,
  error: null,
};

const machineSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    setActiveMachine: (state, action) => {
      state.activeMachine = action.payload;
      localStorage.setItem("activeMachine", JSON.stringify(action.payload));
    },
    clearActiveMachine: (state) => {
      state.activeMachine = null;
      localStorage.removeItem("activeMachine");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMachineList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMachineList.fulfilled, (state, action) => {
        state.loading = false;
        state.machineList = action.payload;
        state.error = null;
      })
      .addCase(fetchMachineList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setActiveMachine, clearActiveMachine } = machineSlice.actions;
export default machineSlice.reducer;
