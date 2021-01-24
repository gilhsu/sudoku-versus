import React, { useEffect } from "react";
import { connect } from "react-redux";
import { differenceInSeconds } from "date-fns";

import {
  minusPoint,
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
  minusPoint,
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
    const endTurnNoAnswer = () => {
      minusPoint();
      nextPlayer();
      setTimeTurnStarted();
    };

    if (timeRemaining < 0) {
      endTurnNoAnswer();
    }
  }, [setTimeTurnStarted, nextPlayer, timeRemaining, minusPoint]);

  return (
    <>
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
  minusPoint,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
