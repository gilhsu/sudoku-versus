import React from "react";
import { useSudokuContext } from "../../context/SudokuContext";

/**
 * React component for the Difficulty Selector.
 */
export const Difficulty = (props) => {
  let { difficulty } = useSudokuContext();

  return (
    <div className="status__difficulty">
      <span className="status__difficulty-text">Difficulty:&nbsp;&nbsp;</span>
      <select
        name="status__difficulty-select"
        className="status__difficulty-select"
        defaultValue={difficulty}
        onChange={props.onChange}
      >
        <option value="EASY">EASY</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HARD">HARD</option>
      </select>
    </div>
  );
};
