import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Colors } from "../themes/defaultTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "650px",
    height: "650px",
    margin: "10px",
    borderRadius: "20px",
    padding: "30px",
  },
  puzzlePlaceholder: {
    width: "90%",
    height: "90%",
    border: "2px solid lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timerButtonContainer: {
    display: "flex",
  },
  timerButton: {
    height: "220px",
    outline: "1px solid black",
  },
  settingButton: {
    cursor: "pointer",
    width: "80px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "5px",

    "&:hover": {
      backgroundColor: Colors.selectedBackgroundColor,
      color: Colors.primary,
    },
  },
  settingButtonSelected: {
    cursor: "pointer",
    width: "80px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    border: `3px solid ${Colors.primary}`,

    backgroundColor: Colors.selectedBackgroundColor,
    color: Colors.primary,
  },
  addRemovePlayerButton: {
    width: "120px",

    "&:hover": {
      backgroundColor: Colors.selectedBackgroundColor,
      color: Colors.primary,
    },
  },
  startButton: {
    height: "125px",
    borderRadius: "20px",
  },
}));

const PuzzleContainer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={1}>
      <Grid item container spacing={6}>
        <Grid item container xs={6} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary">
              Players (4 max)
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={classes.nameField}
                variant="outlined"
                label="Player 1"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.nameField}
                variant="outlined"
                label="Player 2"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.nameField}
                variant="outlined"
                label="Player 3"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.nameField}
                variant="outlined"
                label="Player 4"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item container spacing={1} justify="space-between">
            <Grid item>
              <Button
                className={classes.addRemovePlayerButton}
                variant="outlined"
                fullWidth
                disableElevation
              >
                <Typography variant="body1">Add</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.addRemovePlayerButton}
                variant="outlined"
                fullWidth
                disableElevation
              >
                <Typography variant="body1">Remove</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={6} direction="column" justify="space-between">
          <Grid item>
            <Typography variant="h4" color="primary" paragraph>
              Timer
            </Typography>
            <Grid container justify="space-between">
              <Grid item>
                <div className={classes.settingButtonSelected}>
                  <Typography variant="h5">20</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.settingButton}>
                  <Typography variant="h5">30</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.settingButton}>
                  <Typography variant="h5">45</Typography>
                </div>
              </Grid>
            </Grid>
            <div className={classes.timerButtonContainer}></div>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="primary" paragraph>
              Difficulty
            </Typography>
            <Grid container justify="space-between">
              <Grid item>
                <div className={classes.settingButtonSelected}>
                  <Typography variant="h5">Easy</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.settingButton}>
                  <Typography variant="h5">Med</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.settingButton}>
                  <Typography variant="h5">Hard</Typography>
                </div>
              </Grid>
            </Grid>
            <div className={classes.timerButtonContainer}></div>
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        fullWidth
        size="large"
        className={classes.startButton}
      >
        <Typography variant="h3">Start Game</Typography>
      </Button>
    </Paper>
  );
};

export default PuzzleContainer;
