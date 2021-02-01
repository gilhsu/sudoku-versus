import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

import { Colors } from "../themes/defaultTheme";

const useStyles = makeStyles((theme) => ({
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

const NumberSelector = ({ inGame }) => {
  const classes = useStyles();
  return (
    <Slide direction="left" in={inGame}>
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
  );
};

export default NumberSelector;
