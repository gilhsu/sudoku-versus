// import { easy } from "./rawPuzzles";
// prettier-ignore

import { DIFFICULTY } from "../features/settingsSlice";
import EASY_PUZZLES from "./easyPuzzles";
import MEDIUM_PUZZLES from "./mediumPuzzles";
import HARD_PUZZLES from "./hardPuzzles";

const randomKey = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let j;
  let x;
  let i;

  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }

  return array;
};

const randomizePuzzle = (puzzle, randomKey) => {
  let newPuzzle = [];
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i] === 0) {
      newPuzzle.push(puzzle[i]);
    } else {
      const puzzleNumberAsIndex = puzzle[i] - 1;
      const randomizedNumber = randomKey[puzzleNumberAsIndex];
      newPuzzle.push(randomizedNumber);
    }
  }
  return newPuzzle;
};

export const getPuzzle = (difficulty) => {
  let puzzleSource;
  if (difficulty === DIFFICULTY.e) {
    puzzleSource = EASY_PUZZLES;
  } else if (difficulty === DIFFICULTY.m) {
    puzzleSource = MEDIUM_PUZZLES;
  } else {
    puzzleSource = HARD_PUZZLES;
  }
  const rawPuzzle =
    puzzleSource[Math.floor(Math.random() * puzzleSource.length)];

  console.log("difficulty", difficulty);
  console.log("rawPuzzle.id", rawPuzzle.id);
  const newKey = randomKey();
  const puzzle = randomizePuzzle(rawPuzzle.puzzle, newKey);
  const solution = randomizePuzzle(rawPuzzle.solution, newKey);
  const puzzleString = puzzle.map((number) => number.toString());
  const solutionString = solution.map((number) => number.toString());

  return { puzzle: puzzleString, solution: solutionString };
};
