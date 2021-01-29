import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import TitleTypography from "./TitleTypography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
    // boxShadow:
    //   "0px 10px 10px -10px rgba(0,0,0,0.2), 0px 5px 8px 10px rgba(0,0,0,0.02), 0px 1px 14px 0px rgba(0,0,0,0.12)",
  },
  header: {
    // borderBottom: "1px solid lightgray",
    minHeight: "100px",
    // width: "85%",
    // padding: 0,
  },
}));

const Header = () => {
  const classes = useStyles();

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
    </div>
  );
};

export default Header;
