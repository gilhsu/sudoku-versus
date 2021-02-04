import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Colors } from "../themes/defaultTheme";

const useStyles = makeStyles((theme) => ({
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
}));

const SettingButton = ({ value, action, currentSetting }) => {
  const classes = useStyles();
  const buttonStyle =
    currentSetting === value
      ? classes.settingButtonSelected
      : classes.settingButton;
  return (
    <Grid item>
      <div className={buttonStyle} onClick={() => action(value)}>
        <Typography variant="h5">{value}</Typography>
      </div>
    </Grid>
  );
};

const SettingPicker = ({ title, options, currentSetting, action }) => {
  return (
    <>
      <Typography variant="h4" color="primary" paragraph>
        {title}
      </Typography>
      <Grid container justify="space-between">
        {options.map((option, i) => (
          <SettingButton
            key={i}
            value={option}
            action={action}
            currentSetting={currentSetting}
          />
        ))}
      </Grid>
    </>
  );
};

export default SettingPicker;
