import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const titleTheme = createMuiTheme({
  typography: {
    fontFamily: '"Viga", sans-serif',
  },
});

const useStyles = makeStyles((theme) => {
  console.log("theme", theme);
  return {
    title: {
      flexGrow: 1,
      fontSize: 30,
    },
  };
});

const TitleTypography = ({ children }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={titleTheme}>
      <Typography className={classes.title} color="primary">
        {children}
      </Typography>
    </ThemeProvider>
  );
};

export default TitleTypography;
