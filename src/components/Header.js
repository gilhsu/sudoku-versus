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
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <TitleTypography>SUDOKU VERSUS</TitleTypography>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            disableElevation
          >
            Buy Me Boba
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
