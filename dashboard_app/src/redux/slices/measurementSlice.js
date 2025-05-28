/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chageOverMeasurement: null,
  latestMeasurement: null,
  historicalMeasurement: [],
};

const measurementSlice = createSlice({
  name: "measurement",
  initialState,
  reducers: {
    setChangeOverMeasurement: (state, action) => {
      state.chageOverMeasurement = action.payload;
    },
    setLatestMeasurement: (state, action) => {
      state.latestMeasurement = action.payload;
    },
    setHistoricalMeasurement: (state, action) => {
      state.historicalMeasurement = action.payload;
    },
  },
});

export const {
  setChangeOverMeasurement,
  setHistoricalMeasurement,
  setLatestMeasurement,
} = measurementSlice.actions;
export default measurementSlice.reducer;
