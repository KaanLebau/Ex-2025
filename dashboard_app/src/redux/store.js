/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import machineReducer from "./slices/machineSlice";
import lineReducer from "./slices/lineSlice";
import measurementReducer from "./slices/measurementSlice";
import authReducer from "./slices/autSlice";
import ufoReducer from "./slices/ufoSlice";
import handoverReducer from "./slices/handOverSlice";
import weeklyMaintanenceReducer from "./slices/weeklyMaintanenceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    machines: machineReducer,
    line: lineReducer,
    measurement: measurementReducer,
    ufo: ufoReducer,
    handover: handoverReducer,
    weeklyMaintenance: weeklyMaintanenceReducer,
  },
});

export default store;
