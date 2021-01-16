import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import TitleTypography from "./TitleTypography";

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

export default function Header() {
  const classes = useStyles();

  const SubheaderButton = ({ title }) => {
    return (
      <Button color="secondary" className={classes.subheaderButton}>
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
            <SubheaderButton title="EASY" />
            <SubheaderButton title="MEDIUM" />
            <SubheaderButton title="HARD" />
          </div>
          <SubheaderButton title="BUY ME COFFEE" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
