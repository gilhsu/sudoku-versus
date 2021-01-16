import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    borderBottom: "1px solid lightgray",
  },
  subheader: {
    padding: "5px",
    borderBottom: "1px solid lightgray",
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className={classes.header}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="primary">
            SUDOKU VERSUS
          </Typography>

          <Button
            elevation={0}
            // size="small"
            color="primary"
          >
            Rules
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className={classes.subheader}
      >
        <Toolbar>
          <Button elevation={0}>EASY</Button>
          <Button elevation={0} color="grey">
            MEDIUM
          </Button>
          <Button elevation={0} color="grey">
            HARD
          </Button>
          <Button elevation={0} color="gray">
            BUY ME COFFEE
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
