/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { appModel } from "../../model/appModel";

export const fetchDailyControlTasks = createAsyncThunk(
  "operatorCheck/fetchDailyControlTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const currentLine = getState().line.line;
      const response = await appModel.fetchDailyControl(
        currentLine.toLowerCase()
      );

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUfoTasks = createAsyncThunk(
  "operatorCheck/fetchUfoTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const currentLine = getState().line.line;
      const response = await appModel.fetchUfoTasks(currentLine);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  ufoTasks: loadFromStorage("ufoTasks"),
  dailyCheck: loadFromStorage("dailyCheck"),
  loading: false,
  error: null,
  checkedTasks: {},
};

const toggleTaskChecked = (state, action) => {
  const { taskId, taskType, sign } = action.payload;

  let taskList;

  switch (taskType) {
    case "maintenanceCheck":
      taskList = [...state.ufoTasks];
      break;
    case "safetyCheck":
      taskList = [...state.dailyCheck];
      break;
    default:
      break;
  }
  if (!taskList) return;

  const updatedList = taskList.map((t) =>
    t.taskId === taskId ? { ...t, sign: { ...sign } } : t
  );

  switch (taskType) {
    case "maintenanceCheck":
      state.ufoTasks = updatedList;
      localStorage.setItem("ufoTasks", JSON.stringify(updatedList));
      break;
    case "safetyCheck":
      state.dailyCheck = updatedList;
      localStorage.setItem("dailyCheck", JSON.stringify(updatedList));
      break;
    default:
      break;
  }
};

const loadFromStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};
