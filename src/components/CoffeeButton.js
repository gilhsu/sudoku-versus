import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 20,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
}));

const CoffeeButton = () => {
  const classes = useStyles();

  return (
    <Button
      color="secondary"
      className={classes.button}
      onClick={() => alert("you just bought me $1M of coffee!")}
    >
      BUY ME COFFEE
    </Button>
  );
};

export default CoffeeButton;
