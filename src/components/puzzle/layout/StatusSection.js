import React from "react";
import { Difficulty } from "../Difficulty";
import { Timer } from "../Timer";
import { Numbers } from "../Numbers";
import { Action } from "../Action";
import { Mode } from "../Mode";

/**
 * React component for the Status Section.
 */
export const StatusSection = (props) => {
  return (
    <section className="status">
      <h2 onClick={props.onClickNewGame}>New Game</h2>
      <Difficulty onChange={props.onChange} />
      <Timer />
      <Numbers onClickNumber={(number) => props.onClickNumber(number)} />
      <div className="status__actions">
        <Action action="undo" onClickAction={props.onClickUndo} />
        <Action action="erase" onClickAction={props.onClickErase} />
        <Action action="hint" onClickAction={props.onClickHint} />
        <Mode mode="mistakes" onClickMode={props.onClickMistakesMode} />
        <Mode mode="fast" onClickMode={props.onClickFastMode} />
      </div>
    </section>
  );
};
