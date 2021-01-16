import React from "react";
import { connect } from "react-redux";
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

  const handleClick = () => setDifficultyAction(title);
  return (
    <Button
      color={buttonColor}
      className={classes.button}
      onClick={handleClick}
    >
      {title}dasfdsf
    </Button>
    // <Typography
    //   variant="button"
    //   color={buttonColor}
    //   className={classes.button}
    //   onClick={handleClick}
    // >
    //   {title}
    // </Typography>
  );
};

export default DifficultyButton;
