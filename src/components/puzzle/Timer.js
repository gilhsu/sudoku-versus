import React, { useEffect } from "react";
import { connect } from "react-redux";
import { differenceInSeconds } from "date-fns";

import {
  nextPlayer,
  setCurrentTime,
  setTimeTurnStarted,
} from "../../features/settingsSlice";

/**
 * React component for the Timer in Status Section.
 * Uses the 'useEffect' hook to update the timer every second.
 */
const Timer = ({
  players,
  nextPlayer,
  timerSetting,
  timeTurnStarted,
  currentTime,
  setCurrentTime,
  setTimeTurnStarted,
  won,
}) => {
  useEffect(() => {
    function tick() {
      setCurrentTime();
    }
    if (!won) setTimeout(() => tick(), 1000);
  }, [currentTime, setCurrentTime, won]);

  const secondsTotal = differenceInSeconds(
    new Date(currentTime),
    new Date(timeTurnStarted)
  );
  const timeRemaining = timerSetting - secondsTotal;

  useEffect(() => {
    const resetTimer = () => {
      setTimeTurnStarted();
    };

    const nextTurnNewPlayer = () => {
      nextPlayer();
      resetTimer();
    };

    if (timeRemaining < 0) {
      nextTurnNewPlayer();
    }
  }, [setTimeTurnStarted, nextPlayer, timeRemaining]);

  const currentPlayer = players.find((player) => player.current === true);
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

const mapStateToProps = (state) => ({
  players: state.settings.players,
  timerSetting: state.settings.timerSetting,
  currentTime: state.settings.currentTime,
  timeTurnStarted: state.settings.timeTurnStarted,
  won: state.game.won,
});

const mapDispatchToProps = {
  nextPlayer,
  setCurrentTime,
  setTimeTurnStarted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
