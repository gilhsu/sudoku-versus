import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import SettingsContainer from "./SettingsContainer";

const useStyles = makeStyles((theme) => ({
  settingsRoot: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "650px",
    height: "650px",
    margin: "10px",
    borderRadius: "20px",
    padding: "30px",
  },
  puzzleRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "650px",
    height: "650px",
    margin: "10px",
    borderRadius: "20px",
  },
  puzzlePlaceholder: {
    width: "90%",
    height: "90%",
    border: "2px solid lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PuzzleContainer = ({ inGame, handleStartGameAnimation }) => {
  const classes = useStyles();

  if (inGame) {
    return (
      <Paper className={classes.puzzleRoot}>
        <div className={classes.puzzlePlaceholder}>Placeholder Puzzle</div>
      </Paper>
    );
  }

  return (
    <Paper className={classes.settingsRoot} elevation={1}>
      <SettingsContainer handleStartGameAnimation={handleStartGameAnimation} />
    </Paper>
  );
};

export default PuzzleContainer;
