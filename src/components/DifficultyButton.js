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

const DifficultyButton = ({ title, handleClick, difficulty }) => {
  const classes = useStyles();
  const buttonColor = title === difficulty ? "primary" : "secondary";

  return (
    <Button
      color={buttonColor}
      className={classes.button}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default DifficultyButton;
