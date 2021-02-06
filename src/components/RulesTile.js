import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  rulesContainer: {
    width: "450px",
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    padding: 30,
  },
  rules: {
    marginBottom: "30px",
  },
  title: {
    marginBottom: "5px",
  },
}));

const RulesTile = ({ showRules }) => {
  const classes = useStyles();
  return (
    <Fade in={showRules} mountOnEnter unmountOnExit>
      <Paper className={classes.rulesContainer} elevation={1}>
        <div className={classes.rules}>
          <Typography className={classes.title} variant="h5" color="primary">
            Rules
          </Typography>
          <Typography variant="body1" color="secondary" paragraph>
            Sudoku Versus is an exciting and competitive twist to sudoku!
            Players take timed-turns filling out the puzzle and earn points for
            correct answers while points are deducted for letting the timer run
            out.
          </Typography>
          <Typography variant="body1" color="secondary" paragraph>
            Highest number of points wins and the lowest time spent overall is
            the tie-breaker.
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5" color="primary">
          Points Structure
        </Typography>
        <Typography variant="h6">Correct Answer</Typography>
        <Typography variant="body1" color="secondary" paragraph>
          +1 Point &nbsp;&nbsp;|&nbsp;&nbsp; Extra Turn
          &nbsp;&nbsp;|&nbsp;&nbsp; Timer Resets
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
  );
};

export default RulesTile;
