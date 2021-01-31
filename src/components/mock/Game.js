import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";

import { Colors } from "../../themes/defaultTheme";
import { setDifficulty } from "../../features/settingsSlice";
import Header from "../Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "50px",
    justifyContent: "center",
    fontFamily: '"Karla", "san-serif"',
  },
  test: {
    display: "flex",
    justifyContent: "center",
    width: "450px",
    fontFamily: '"Karla", "san-serif"',
  },
  rulesContainer: {
    width: "450px",
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    padding: 30,
  },
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
  puzzle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "650px",
    height: "650px",
    margin: "10px",
    borderRadius: "20px",
  },
  numbersContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    width: "80px",
    margin: "10px",
    padding: "20px 0",
    justifyContent: "space-around",
    alignItems: "center",
  },
  number: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    height: 50,
    width: 50,

    "&:hover": {
      backgroundColor: Colors.selectedBackgroundColor,
      borderRadius: 100,
      fontWeight: 700,
      color: Colors.primary,
      border: `3px solid ${Colors.primary}`,
    },
  },
}));

const Game = ({ difficulty, onChangeDifficulty }) => {
  const [inGame, setInGame] = useState(false);
  const [showRules, setShowRules] = useState(true);
  const classes = useStyles();

  const handleGameStartAnimation = () => {
    if (showRules) {
      setShowRules(!showRules);
      setTimeout(() => setInGame(!inGame), 300);
    } else {
      setInGame(!inGame);
      setTimeout(() => setShowRules(!showRules), 300);
    }
  };

  return (
    <>
      <Header onChangeDifficulty={onChangeDifficulty} difficulty={difficulty} />
      <Switch checked={inGame} onChange={handleGameStartAnimation} />
      <div className={classes.root}>
        {/* timer + pause + player list */}
        <div className={classes.test}>
          <Fade in={showRules} mountOnEnter unmountOnExit>
            <Paper className={classes.rulesContainer} elevation={1}>
              <Typography variant="h4" color="primary" paragraph>
                Rules
              </Typography>
              <Typography
                style={{ width: "100%" }}
                variant="body1"
                color="secondary"
                paragraph
              >
                Sudoku Versus is an exciting and competitive twist to sudoku!
                Players take timed-turns filling out the puzzle and earn points
                for correct answers while points are deducted for letting the
                timer run out.
              </Typography>
              <Typography
                style={{ width: "100%" }}
                variant="body1"
                color="secondary"
                paragraph
              >
                Highest number of points wins and the lowest time spent overall
                is the tie-breaker.
              </Typography>
              <Typography
                style={{ marginTop: "40px" }}
                variant="h5"
                color="primary"
                paragraph
              >
                Points Structure
              </Typography>
              <Typography variant="h6">Correct Answer</Typography>
              <Typography variant="body1" color="secondary" paragraph>
                +1 Point &nbsp;&nbsp;|&nbsp;&nbsp; Timer Resets
                &nbsp;&nbsp;|&nbsp;&nbsp; Extra Turn
              </Typography>
              <Typography variant="h6">Incorrect Answer</Typography>
              <Typography variant="body1" color="secondary" paragraph>
                +0 Points &nbsp;&nbsp;|&nbsp;&nbsp; Turn Ends
              </Typography>
              <Typography variant="h6">Timer Runs Out</Typography>
              <Typography variant="body1" color="secondary" paragraph>
                -1 Point &nbsp;&nbsp;|&nbsp;&nbsp; Turn Ends
              </Typography>
            </Paper>
          </Fade>
          <Slide
            direction="right"
            in={inGame}
            // {...(inGame ? { timeout: 1000 } : {})}
            mountOnEnter
            unmountOnExit
          >
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
        </div>
        {/* puzzle */}
        <Paper className={classes.puzzle} elevation={1}>
          <div
            style={{
              width: "90%",
              height: "90%",
              border: "2px solid lightgray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Puzzle
          </div>
        </Paper>
        {/* number selector */}
        <Slide
          direction="left"
          in={inGame}
          // {...(inGame ? { timeout: 1000 } : {})}
        >
          <Paper className={classes.numbersContainer} elevation={1}>
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
        </Slide>
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
