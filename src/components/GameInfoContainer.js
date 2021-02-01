import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { Colors } from "../themes/defaultTheme";

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
  playerListContainer: {
    flexGrow: 1,
    padding: 10,
  },
  playerList: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    height: "100%",
  },
  playerHeaderRow: {
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
  },
  playerRow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    padding: "0 20px 0 30px",
  },
  playerRowSelected: {
    flexGrow: 1,
    borderLeft: `10px solid ${Colors.primary}`,
    backgroundColor: Colors.selectedBackgroundColor,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    fontWeight: 700,
  },
  playerRowTitle: {
    width: "50%",
    fontSize: 24,
  },
  playerRowStats: {
    width: "50%",
    display: "flex",
  },
  playerRowStatElement: {
    width: "50%",
    textAlign: "center",
    fontSize: 24,
  },
}));

const GameInfoContainer = ({ inGame }) => {
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
        <div className={classes.playerListContainer}>
          <Paper className={classes.playerList} elevation={1}>
            <div className={classes.playerHeaderRow}>
              <div className={classes.playerRowTitle}></div>
              <div className={classes.playerRowStats}>
                <div className={classes.playerRowStatElement}>Score</div>
                <div className={classes.playerRowStatElement}>Time</div>
              </div>
            </div>
            <div className={classes.playerRowSelected}>
              <div className={classes.playerRowTitle}>Michael Scott</div>
              <div className={classes.playerRowStats}>
                <div className={classes.playerRowStatElement}>3</div>
                <div className={classes.playerRowStatElement}>3:32</div>
              </div>
            </div>
            <div className={classes.playerRow}>
              <div className={classes.playerRowTitle}>Jim Halpert</div>
              <div className={classes.playerRowStats}>
                <div className={classes.playerRowStatElement}>3</div>
                <div className={classes.playerRowStatElement}>1:32</div>
              </div>
            </div>
            <div className={classes.playerRow}>
              <div className={classes.playerRowTitle}>Pam Beasly</div>
              <div className={classes.playerRowStats}>
                <div className={classes.playerRowStatElement}>3</div>
                <div className={classes.playerRowStatElement}>1:32</div>
              </div>
            </div>
            <div className={classes.playerRow}>
              <div className={classes.playerRowTitle}>Dwight Schrute</div>
              <div className={classes.playerRowStats}>
                <div className={classes.playerRowStatElement}>3</div>
                <div className={classes.playerRowStatElement}>1:32</div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </Slide>
  );
};

export default GameInfoContainer;
