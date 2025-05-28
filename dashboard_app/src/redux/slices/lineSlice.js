/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { appModel } from "../../model/appModel";

export const fetchDepartments = createAsyncThunk(
  "line/fetchDepartments",
  async () => {
    const response = await appModel.fetchDepartments();

    return response;
  }
);

export const fetchTempos = createAsyncThunk(
  "line/fetchTempos",
  async (_, { getState }) => {
    const { department } = getState().line;
    if (!department) return [];
    return await appModel.fetchTempos();
  }
);

export const fetchLines = createAsyncThunk(
  "line/fetchLines",
  async (_, { getState }) => {
    const { tempo } = getState().line;
    if (!tempo) return [];
    return await appModel.fetchLines(tempo);
  }
);

const initialState = {
  departments: [],
  department:
    localStorage.getItem("selectedDepartment") !== "null"
      ? localStorage.getItem("selectedDepartment")
      : null,
  tempos: [],
  tempo:
    localStorage.getItem("selectedTempo") !== "null"
      ? localStorage.getItem("selectedTempo")
      : null,
  lines: [],
  line:
    localStorage.getItem("selectedLine") !== "null"
      ? localStorage.getItem("selectedLine")
      : null,
  loading: false,
  error: null,
};

const lineSlice = createSlice({
  name: "line",
  initialState,
  reducers: {
    setDepartment: (state, action) => {
      state.department = action.payload;
      localStorage.setItem("selectedDepartment", action.payload);
      state.tempo = null;
      state.line = null;
    },
    setTempo: (state, action) => {
      state.tempo = action.payload;
      localStorage.setItem("selectedTempo", action.payload);
      state.line = null;
    },
    setLine: (state, action) => {
      const newLine = action.payload;
      if (newLine !== state.line) {
        localStorage.removeItem("machineList");
      }
      state.line = newLine;
      localStorage.setItem("selectedLine", action.payload);
    },
    resetDepartment: (state) => {
      state.department = null;
      state.tempo = null;
      state.line = null;
      localStorage.removeItem("selectedDepartment");
      localStorage.removeItem("selectedTempo");
      localStorage.removeItem("selectedLine");
      localStorage.removeItem("lineList");
      localStorage.removeItem("tempoList");
    },
    resetTempo: (state) => {
      state.tempo = null;
      state.line = null;
      localStorage.removeItem("selectedTempo");
      localStorage.removeItem("selectedLine");
      localStorage.removeItem("lineList");
    },
    resetLine: (state) => {
      state.line = null;
      localStorage.removeItem("selectedLine");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.departments = action.payload;

        state.loading = false;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTempos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTempos.fulfilled, (state, action) => {
        state.tempos = action.payload;

        state.loading = false;
      })
      .addCase(fetchTempos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchLines.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLines.fulfilled, (state, action) => {
        state.lines = action.payload;

        state.loading = false;
      })
      .addCase(fetchLines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setDepartment,
  setTempo,
  setLine,
  resetDepartment,
  resetTempo,
  resetLine,
} = lineSlice.actions;

export default lineSlice.reducer;
