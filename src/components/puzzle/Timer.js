import React, { useEffect } from "react";
import { useSudokuContext } from "../../context/SudokuContext";
import { useSettingsContext } from "../../context/SettingsContext";
import moment from "moment";

/**
 * React component for the Timer in Status Section.
 * Uses the 'useEffect' hook to update the timer every second.
 */
export const Timer = (props) => {
  const { won } = useSudokuContext();
  const {
    timeTurnStarted,
    setTimeTurnStarted,
    currentPlayer,
    nextPlayer,
    currentTime,
    setCurrentTime,
    timeSetting,
  } = useSettingsContext();

  useEffect(() => {
    function tick() {
      setCurrentTime(moment());
    }
    if (!won) setTimeout(() => tick(), 1000);
  }, [currentTime, setCurrentTime, won]);

  const secondsTotal = currentTime.diff(timeTurnStarted, "seconds");
  const timeRemaining = timeSetting - secondsTotal;

  useEffect(() => {
    const resetTimer = () => {
      setTimeTurnStarted(moment());
    };

    const nextTurnNewPlayer = () => {
      nextPlayer();
      resetTimer();
    };

    if (timeRemaining < 0) {
      nextTurnNewPlayer();
    }
  }, [setTimeTurnStarted, nextPlayer, timeRemaining]);

  let style;
  if (currentPlayer.id === 0) {
    style = { backgroundColor: "#afc7de" };
  } else if (currentPlayer.id === 1) {
    style = { backgroundColor: "#d9a0c7" };
  } else {
    style = { backgroundColor: "#a4e0b4" };
  }
  return (
    <>
      <div style={style}>Current Player: {currentPlayer.name}</div>
      <div className="status__time" onClick={() => {}}>
        {timeRemaining}
      </div>
    </>
  );
};
