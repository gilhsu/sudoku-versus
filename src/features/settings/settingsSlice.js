import { createSlice } from "@reduxjs/toolkit";

export const DIFFICULTY = {
  e: "EASY",
  m: "MEDIUM",
  h: "HARD",
};

export const initialState = { difficulty: DIFFICULTY.e };

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDifficulty: (state, action) => ({
      ...state,
      difficulty: action.payload,
    }),
  },
});

export const { setDifficulty } = settingsSlice.actions;

export default settingsSlice.reducer;
