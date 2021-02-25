import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { differenceInSeconds } from "date-fns";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {
  minusPoint,
  nextPlayer,
  setCurrentTime,
  setTimeTurnStarted,
} from "../features/settingsSlice";

const useStyles = makeStyles((theme) => ({
  timerContainer: {
    width: "300px",
    padding: "10px",
  },
  timer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

/**
 * React component for the Timer in Status Section.
 * Uses the 'useEffect' hook to update the timer every second.
 */
const Timer = ({
  nextPlayer,
  timerLength,
  timeTurnStarted,
  currentTime,
  setCurrentTime,
  setTimeTurnStarted,
  won,
  minusPoint,
}) => {
  const classes = useStyles();

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
  const timeRemaining = timerLength - secondsTotal;

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
      <div className={classes.timerContainer}>
        <Paper className={classes.timer} elevation={1}>
          <Typography variant="h1">{timeRemaining}</Typography>
        </Paper>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  players: state.settings.players,
  timerLength: state.settings.timerLength,
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
