/** @format */
import { createSlice } from "@reduxjs/toolkit";

// Load persisted data from localStorage
const loadFromStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : {};
};

const initialState = {
  handoverData: loadFromStorage("handoverData"),
};

const handoverSlice = createSlice({
  name: "handover",
  initialState,
  reducers: {
    updateHandoverData: (state, action) => {
      const { machineId, field, value } = action.payload;

      if (!state.handoverData[machineId]) {
        state.handoverData[machineId] = {};
      }

      state.handoverData[machineId][field] = value;

      // Persist in localStorage
      localStorage.setItem("handoverData", JSON.stringify(state.handoverData));
    },
  },
});

export const { updateHandoverData } = handoverSlice.actions;
export default handoverSlice.reducer;
