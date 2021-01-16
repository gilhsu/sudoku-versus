import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import TitleTypography from "./TitleTypography";
import DifficultyButton from "./DifficultyButton";
import { DIFFICULTY, setDifficulty } from "../features/settings/settingsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    borderBottom: "1px solid lightgray",
    minHeight: "100px",
  },
  subheader: {
    borderBottom: "1px solid lightgray",
    minHeight: "50px",
  },
  subheaderButton: {
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
  difficultyContainer: {
    flexGrow: 1,
  },
}));

const Header = ({ settings, setDifficultyAction }) => {
  const { difficulty } = settings;
  console.log("difficulty", difficulty);
  const classes = useStyles();

  const SubheaderButton = ({ title, difficulty, handleClick }) => {
    const buttonColor = title === difficulty ? "primary" : "secondary";
    return (
      <Button
        color={buttonColor}
        className={classes.subheaderButton}
        onClick={handleClick}
      >
        {title}
      </Button>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.header}>
          <TitleTypography>SUDOKU VERSUS</TitleTypography>
          <Button
            size="large"
            variant="contained"
            color="primary"
            disableElevation
          >
            Rules
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.subheader}>
          <div className={classes.difficultyContainer}>
            <DifficultyButton
              title="EASY"
              difficulty={difficulty}
              handleClick={() => setDifficultyAction(DIFFICULTY.e)}
            />
            <DifficultyButton
              title="MEDIUM"
              difficulty={difficulty}
              handleClick={() => setDifficultyAction(DIFFICULTY.m)}
            />
            <DifficultyButton
              title="HARD"
              difficulty={difficulty}
              handleClick={() => setDifficultyAction(DIFFICULTY.h)}
            />
          </div>
          {/* <SubheaderButton
              title="EASY"
              difficulty={difficulty}
              handleClick={() => setDifficultyAction(DIFFICULTY.e)}
            />
            <SubheaderButton
              title="MEDIUM"
              difficulty={difficulty}
              handleClick={() => setDifficultyAction(DIFFICULTY.m)}
            />
            <SubheaderButton
              title="HARD"
              difficulty={difficulty}
              handleClick={() => setDifficultyAction(DIFFICULTY.h)}
            />
          </div> */}
          <SubheaderButton title="BUY ME COFFEE" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = { setDifficultyAction: setDifficulty };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
