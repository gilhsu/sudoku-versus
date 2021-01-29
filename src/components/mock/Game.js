import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import { setDifficulty } from "../../features/settingsSlice";
import Header from "../Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "50px",
    justifyContent: "center",
  },

  leftContainer: {
    display: "flex",
    width: "450px",
    flexDirection: "column",
  },
  timerPauseContainer: {
    display: "flex",
    height: "175px",
  },
  timerContainer: {
    flexGrow: 3,
    margin: "10px",
  },
  timer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
  },
  playPauseContainer: {
    flexGrow: 1,
    margin: "10px",
  },
  playPause: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
  },
  playerListContainer: {
    flexGrow: 3,
    margin: "10px",
  },
  playerList: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    height: "100%",
  },
  playerRow: {
    flexGrow: 1,
    borderBottom: "1px solid lightgray",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
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
  },
  puzzle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "700px",
    height: "700px",
    margin: "10px",
    borderRadius: "20px",
  },
  numbersContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    width: "100px",
    margin: "10px",
  },
  number: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid lightgray",
    fontSize: 30,
  },
}));

const Game = ({ difficulty, onChangeDifficulty }) => {
  const classes = useStyles();
  return (
    <>
      <Header onChangeDifficulty={onChangeDifficulty} difficulty={difficulty} />
      <div className={classes.root}>
        {/* timer + pause + player list */}
        <div className={classes.leftContainer}>
          <div className={classes.timerPauseContainer}>
            <div className={classes.timerContainer}>
              <Paper className={classes.timer} elevation={10}>
                Timer
              </Paper>
            </div>
            <div className={classes.playPauseContainer}>
              <Paper className={classes.playPause} elevation={10}>
                Pause
              </Paper>
            </div>
          </div>
          <div className={classes.playerListContainer}>
            <Paper className={classes.playerList} elevation={10}>
              <div className={classes.playerRow}>
                <div className={classes.playerRowTitle}>Players</div>
                <div className={classes.playerRowStats}>
                  <div className={classes.playerRowStatElement}>Score</div>
                  <div className={classes.playerRowStatElement}>Time</div>
                </div>
              </div>
              <div className={classes.playerRow}>
                <div className={classes.playerRowTitle}>Michael Scott</div>
                <div className={classes.playerRowStats}>
                  <div className={classes.playerRowStatElement}>3</div>
                  <div className={classes.playerRowStatElement}>1:32</div>
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
        {/* puzzle */}
        <Paper className={classes.puzzle} elevation={10}>
          Puzzle
        </Paper>
        {/* number selector */}
        <Paper className={classes.numbersContainer} elevation={10}>
          <div className={classes.number}>1</div>
          <div className={classes.number}>2</div>
          <div className={classes.number}>3</div>
          <div className={classes.number}>4</div>
          <div className={classes.number}>5</div>
          <div className={classes.number}>6</div>
          <div className={classes.number}>7</div>
          <div className={classes.number}>8</div>
          <div className={classes.number}>9</div>
        </Paper>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  difficulty: state.settings.difficulty,
});

const mapDispatchToProps = {
  setDifficulty,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
