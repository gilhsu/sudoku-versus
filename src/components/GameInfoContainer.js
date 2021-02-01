import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { Colors } from "../themes/defaultTheme";
import PlayersList from "./PlayersList";

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
  playPauseContainer: {
    // width: "150px",
    padding: 10,
  },
  playPause: {
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

const GameInfoContainer = ({ inGame, players }) => {
  const classes = useStyles();
  return (
    <Slide direction="right" in={inGame} mountOnEnter unmountOnExit>
      <div className={classes.leftContainer}>
        <div className={classes.timerPauseContainer}>
          <div className={classes.timerContainer}>
            <Paper className={classes.timer} elevation={1}>
              <Typography variant="h1">30</Typography>
            </Paper>
          </div>
          <div className={classes.playPauseContainer}>
            <Paper className={classes.playPause} elevation={1}>
              <PauseIcon fontSize="inherit" />
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameInfoContainer);
