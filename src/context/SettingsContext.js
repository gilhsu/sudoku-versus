import React, { createContext, useContext, useState } from "react";
import moment from "moment";

export const DIFFICULTY = {
  e: "EASY",
  m: "MEDIUM",
  h: "HARD",
};

const SettingsContext = createContext([
  DIFFICULTY.e,
  () => {},

  moment(),
  () => {},

  [],
  () => {},

  {},
  () => {},

  () => {},

  moment(),
  () => {},

  30,
  () => {},
]);

export const SettingsProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(DIFFICULTY.e);
  const [timeTurnStarted, setTimeTurnStarted] = useState(moment());
  const [players, setPlayers] = useState([
    {
      id: 0,
      name: "Player 1",
    },
    {
      id: 1,
      name: "Player 2",
    },
    {
      id: 3,
      name: "Player 3",
    },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);

  function nextPlayer() {
    if (currentPlayer.id < players.length - 1) {
      setCurrentPlayer(players[currentPlayer.id + 1]);
    } else {
      setCurrentPlayer(players[0]);
    }
  }

  const [currentTime, setCurrentTime] = useState(moment());
  const [timeSetting, setTimeSetting] = useState(30);

  return (
    <SettingsContext.Provider
      value={{
        difficulty,
        setDifficulty,
        timeTurnStarted,
        setTimeTurnStarted,
        players,
        setPlayers,
        currentPlayer,
        setCurrentPlayer,
        nextPlayer,
        currentTime,
        setCurrentTime,
        timeSetting,
        setTimeSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => useContext(SettingsContext);
