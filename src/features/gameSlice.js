import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export const initialState = {
  numberSelected: "0",
  gameArray: [],
  timeGameStarted: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
  cellSelected: -1,
  initArray: [],
  won: false,
  colorFlash: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setNumberSelected: (state, action) => {
      state.numberSelected = action.payload;
      return state;
    },
    setGameArray: (state, action) => {
      state.gameArray = action.payload;
      return state;
    },
    setTimeGameStarted: (state, action) => {
      state.timeGameStarted = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
      return state;
    },
    setCellSelected: (state, action) => {
      state.cellSelected = action.payload;
      return state;
    },
    setInitArray: (state, action) => {
      state.initArray = action.payload;
      return state;
    },
    setWon: (state, action) => {
      state.won = action.payload;
      return state;
    },
    setColorFlash: (state, action) => {
      state.colorFlash = action.payload;
      return state;
    },
  },
});

export const {
  setNumberSelected,
  setGameArray,
  setTimeGameStarted,
  setCellSelected,
  setInitArray,
  setWon,
  setColorFlash,
} = gameSlice.actions;

export default gameSlice.reducer;
