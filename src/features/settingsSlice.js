import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export const DIFFICULTY = {
  e: "EASY",
  m: "MEDIUM",
  h: "HARD",
};

export const initialState = {
  difficulty: DIFFICULTY.e,
  players: [
    {
      id: 0,
      name: "Player Awesome",
      score: 0,
      current: true,
    },
    {
      id: 1,
      name: "Player Best",
      score: 0,
      current: false,
    },
    {
      id: 2,
      name: "Player Cheese",
      score: 0,
      current: false,
    },
  ],
  timerSetting: 30,
  currentTime: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
  timeTurnStarted: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
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
  },
});

export const {
  setDifficulty,
  nextPlayer,
  setCurrentTime,
  setTimeTurnStarted,
} = settingsSlice.actions;

export default settingsSlice.reducer;
