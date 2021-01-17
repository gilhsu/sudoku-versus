import React, { createContext, useContext, useState } from "react";
import moment from "moment";

export const DIFFICULTY = {
  e: "EASY",
  m: "MEDIUM",
  h: "HARD",
};

const SudokuContext = createContext([
  "0",
  () => {},
  [],
  () => {},
  DIFFICULTY.e,
  () => {},
  moment(),
  () => {},
  false,
  () => {},
  -1,
  () => {},
  [],
  () => {},
  false,
  () => {},
]);

export const SudokuProvider = ({ children }) => {
  let [numberSelected, setNumberSelected] = useState("0");
  let [gameArray, setGameArray] = useState([]);
  let [difficulty, setDifficulty] = useState(DIFFICULTY.e);
  let [timeGameStarted, setTimeGameStarted] = useState(moment());
  let [fastMode, setFastMode] = useState(false);
  let [cellSelected, setCellSelected] = useState(-1);
  let [initArray, setInitArray] = useState([]);
  let [won, setWon] = useState(false);

  return (
    <SudokuContext.Provider
      value={{
        numberSelected,
        setNumberSelected,
        gameArray,
        setGameArray,
        difficulty,
        setDifficulty,
        timeGameStarted,
        setTimeGameStarted,
        fastMode,
        setFastMode,
        cellSelected,
        setCellSelected,
        initArray,
        setInitArray,
        won,
        setWon,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudokuContext = () => useContext(SudokuContext);
