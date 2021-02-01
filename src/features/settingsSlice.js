import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export const DIFFICULTY = {
  e: "EASY",
  m: "MED",
  h: "HARD",
};

export const TIMERLENGTH = {
  short: 20,
  medium: 30,
  long: 45,
};

export const initialState = {
  difficulty: DIFFICULTY.e,
  timerLength: TIMERLENGTH.short,
  players: [
    {
      id: 0,
      name: "",
      score: 0,
      current: true,
      time: 0,
    },
    {
      id: 1,
      name: "",
      score: 0,
      current: false,
      time: 0,
    },
  ],
  timerSetting: 20,
  currentTime: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
  timeTurnStarted: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
  isPaused: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
      return state;
    },
    setTimerLength: (state, action) => {
      state.timerLength = action.payload;
      return state;
    },
    nextPlayer: (state) => {
      const currentPlayer = state.players.find(
        (player) => player.current === true
      );
      // make current player not current
      state.players.find((player) => player === currentPlayer).current = false;

      if (currentPlayer.id !== state.players.length - 1) {
        // if not last player, make next player current
        state.players.find(
          (player) => player.id === currentPlayer.id + 1
        ).current = true;
      } else {
        // if last player, make first player current
        state.players.find((player) => player.id === 0).current = true;
      }
      return state;
    },
    setCurrentTime: (state) => {
      state.currentTime = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
      return state;
    },
    setTimeTurnStarted: (state) => {
      state.timeTurnStarted = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
      return state;
    },
    addPoint: (state) => {
      state.players.find((player) => player.current === true).score += 1;
      return state;
    },
    minusPoint: (state) => {
      state.players.find((player) => player.current === true).score -= 1;
      return state;
    },
    resetScore: (state) => {
      state.players.forEach((player) => (player.score = 0));
      return state;
    },
    updatePlayersList: (state, action) => {
      state.players = action.payload;
      return state;
    },
    setIsPaused: (state) => {
      state.isPaused = !state.isPaused;
      return state;
    },
  },
});

export const {
  setDifficulty,
  setTimerLength,
  nextPlayer,
  setCurrentTime,
  setTimeTurnStarted,
  addPoint,
  minusPoint,
  resetScore,
  updatePlayersList,
  setIsPaused,
} = settingsSlice.actions;

export default settingsSlice.reducer;
