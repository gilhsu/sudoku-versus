import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

import { getUniqueSudoku } from "../solver/UniqueSudoku";
import { getPuzzle } from "../puzzles/formatPuzzles";
import SettingsContainer from "./SettingsContainer";
import GameSection from "./puzzle/layout/GameSection";
import NumberSelector from "./NumberSelector";
import {
  resetScore,
  addPoint,
  nextPlayer,
  setTimeTurnStarted,
  DIFFICULTY,
} from "../features/settingsSlice";
import {
  setCellSelected,
  setColorFlash,
  setGameArray,
  setWon,
  setInitArray,
  setNumberSelected,
  setTimeGameStarted,
} from "../features/gameSlice";

const useStyles = makeStyles((theme) => ({
  settingsRoot: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "600px",
    height: "600px",
    margin: "10px",
    borderRadius: "20px",
    padding: "30px",
  },
  puzzleRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    height: "600px",
    margin: "10px",
    borderRadius: "20px",
  },
  puzzlePlaceholder: {
    width: "90%",
    height: "90%",
    border: "2px solid lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PuzzleContainer = ({
  inGame,
  handleStartGameAnimation,
  numberSelected,
  setNumberSelected,
  setCellSelected,
  addPoint,
  setTimeTurnStarted,
  setColorFlash,
  initArray,
  setInitArray,
  gameArray,
  setGameArray,
  setWon,
  cellSelected,
  nextPlayer,
  difficulty,
  setTimeGameStarted,
  resetScore,
}) => {
  const [solvedArray, setSolvedArray] = useState([]);
  const [history, setHistory] = useState([]);
  const classes = useStyles();

  function _createNewGame(newDifficulty) {
    // let [temporaryInitArray, temporarySolvedArray] = getUniqueSudoku(
    //   difficulty,
    //   newDifficulty
    // );

    // const { puzzle, solution } = easy[0];
    // const stringPuzzle = puzzle.map((number) => number.toString());
    // const stringSolution = solution.map((number) => number.toString());

    const { puzzle, solution } = getPuzzle(newDifficulty);
    const temporaryInitArray = puzzle;
    const temporarySolvedArray = solution;

    setInitArray(temporaryInitArray);
    setGameArray(temporaryInitArray);
    setSolvedArray(temporarySolvedArray);
    setNumberSelected("0");
    setTimeGameStarted();
    setCellSelected(-1);
    setHistory([]);
    resetScore();
    setWon(false);
  }

  function _fillCell(index, value) {
    if (initArray[index] === "0") {
      // Direct copy results in interesting set of problems, investigate more!
      let tempArray = gameArray.slice();
      let tempHistory = history.slice();

      // Can't use tempArray here, due to Side effect below!!
      tempHistory.push(gameArray.slice());
      setHistory(tempHistory);

      tempArray[index] = value;
      setGameArray(tempArray);
      console.log("_isSolved(index, value)", _isSolved(index, value));

      if (_isSolved(index, value)) {
        setWon(true);
      }
    }
  }

  function onClickCell(indexOfArray) {
    if (numberSelected !== "0") {
      _userFillCell(indexOfArray, numberSelected);
    }
    setCellSelected(indexOfArray);
  }

  function _userFillCell(index, value) {
    if (value === solvedArray[index]) {
      triggerCorrectAnswer(index, value);
      // _fillCell(index, value);
    } else {
      triggerWrongAnswer(index, value);
    }
  }

  async function triggerCorrectAnswer(index, value) {
    addPoint();
    setTimeTurnStarted();
    setColorFlash("green");
    _fillCell(index, value);
    await setTimeout(() => finishCorrectAnswer(), 1000);
  }

  // clear flash color and refill cell
  function finishCorrectAnswer(index, value) {
    setColorFlash(null);
    _fillCell(index, value);
    setCellSelected(-1);
  }

  async function triggerWrongAnswer(index, value) {
    setColorFlash("red");
    _fillCell(index, value);
    await setTimeout(() => clearWrongAnswer(), 2000);
  }

  // clear flash color, clear selected cell, erase cell value
  function clearWrongAnswer() {
    setColorFlash(null);
    onClickErase();
    setCellSelected(-1);
    nextPlayer();
    setTimeTurnStarted();
  }

  function _isSolved(index, value) {
    if (
      gameArray.every((cell, cellIndex) => {
        if (cellIndex === index) {
          return value === solvedArray[cellIndex];
        } else {
          return cell === solvedArray[cellIndex];
        }
      })
    ) {
      return true;
    }
    return false;
  }

  function onClickErase() {
    if (cellSelected !== -1 && gameArray[cellSelected] === "0") {
      _fillCell(cellSelected, "0");
    }
  }

  function onClickNumber(number) {
    if (cellSelected !== -1) {
      _userFillCell(cellSelected, number);
    }
  }

  if (inGame) {
    return (
      <>
        <Paper className={classes.puzzleRoot}>
          <GameSection onClick={(indexOfArray) => onClickCell(indexOfArray)} />
        </Paper>
        <NumberSelector
          inGame={inGame}
          onClickNumber={(number) => onClickNumber(number)}
        />
      </>
    );
  }

  return (
    <Paper className={classes.settingsRoot} elevation={1}>
      <SettingsContainer
        createNewGame={_createNewGame}
        handleStartGameAnimation={handleStartGameAnimation}
      />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  numberSelected: state.game.numberSelected,
  initArray: state.game.initArray,
  gameArray: state.game.gameArray,
  cellSelected: state.game.cellSelected,
  difficulty: state.settings.difficulty,
});

const mapDispatchToProps = {
  setCellSelected,
  addPoint,
  setTimeTurnStarted,
  setColorFlash,
  setGameArray,
  setWon,
  nextPlayer,
  setInitArray,
  setNumberSelected,
  setTimeGameStarted,
  resetScore,
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleContainer);
