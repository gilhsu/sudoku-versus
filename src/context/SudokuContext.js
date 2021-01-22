import React, { createContext, useContext, useState } from "react";
import moment from "moment";

const SudokuContext = createContext([
  "0",
  () => {},

  [],
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

  null,
  () => {},
]);

export const SudokuProvider = ({ children }) => {
  const [numberSelected, setNumberSelected] = useState("0");
  const [gameArray, setGameArray] = useState([]);
  const [timeGameStarted, setTimeGameStarted] = useState(moment());
  const [fastMode, setFastMode] = useState(false);
  const [cellSelected, setCellSelected] = useState(-1);
  const [initArray, setInitArray] = useState([]);
  const [won, setWon] = useState(false);
  const [colorFlash, setColorFlash] = useState(null);

  return (
    <SudokuContext.Provider
      value={{
        numberSelected,
        setNumberSelected,
        gameArray,
        setGameArray,
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
        colorFlash,
        setColorFlash,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudokuContext = () => useContext(SudokuContext);
