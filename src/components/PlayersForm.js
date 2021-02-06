import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Colors } from "../themes/defaultTheme";

const useStyles = makeStyles((theme) => ({
  addRemovePlayerButton: {
    width: "110px",
    "&:hover": {
      backgroundColor: Colors.selectedBackgroundColor,
      color: Colors.primary,
    },
  },
}));

const PlayerTextField = ({ index, player, updatePlayerName }) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        label={`Player ${index + 1}`}
        fullWidth
        onChange={(e) => updatePlayerName(e, player.id)}
        value={player.name}
      />
    </Grid>
  );
};

const PlayersForm = ({
  players,
  addPlayerField,
  removePlayerField,
  updatePlayerName,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid item container spacing={2}>
        <Grid item>
          <Typography variant="h5" color="primary">
            Players (4 max)
          </Typography>
        </Grid>
        {players.map((player, i) => (
          <PlayerTextField
            key={i}
            index={i}
            player={player}
            updatePlayerName={updatePlayerName}
          />
        ))}
      </Grid>
      <Grid item container spacing={1} justify="space-between">
        <Grid item>
          <Button
            className={classes.addRemovePlayerButton}
            variant="outlined"
            fullWidth
            disableElevation
            disabled={players.length >= 4}
            onClick={addPlayerField}
          >
            <Typography variant="body1">Add</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.addRemovePlayerButton}
            variant="outlined"
            fullWidth
            disableElevation
            disabled={players.length <= 2}
            onClick={removePlayerField}
          >
            <Typography variant="body1">Remove</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PlayersForm;
