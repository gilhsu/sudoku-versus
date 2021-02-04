import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { setIsPaused } from "../features/settingsSlice";
import { Colors } from "../themes/defaultTheme";
import PlayersList from "./PlayersList";
import Timer from "./Timer";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  timerPauseContainer: {
    display: "flex",
    height: "175px",
  },

  playPauseContainer: {
    padding: 10,
  },
  playPause: {
    cursor: "pointer",
    display: "flex",
    height: "100%",
    width: "150px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    fontSize: "76px",
    color: theme.palette.primary.main,

    "&:hover": {
      backgroundColor: Colors.selectedBackgroundColor,
      border: `5px solid ${Colors.primary}`,
    },
  },
}));

const GameInfoContainer = ({ inGame, players, isPaused, setIsPaused }) => {
  const classes = useStyles();

  const playPause = isPaused ? (
    <PlayArrowIcon fontSize="inherit" />
  ) : (
    <PauseIcon fontSize="inherit" />
  );
  return (
    <Slide direction="right" in={inGame} mountOnEnter unmountOnExit>
      <div className={classes.leftContainer}>
        <div className={classes.timerPauseContainer}>
          <Timer />
          <div className={classes.playPauseContainer}>
            <Paper
              className={classes.playPause}
              elevation={1}
              onClick={() => setIsPaused(!isPaused)}
            >
              {playPause}
            </Paper>
          </div>
        </div>
        <PlayersList players={players} />
      </div>
    </Slide>
  );
};

const mapStateToProps = (state) => ({
  players: state.settings.players,
  isPaused: state.settings.isPaused,
});

const mapDispatchToProps = {
  setIsPaused,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameInfoContainer);
