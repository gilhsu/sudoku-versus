import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {
  DIFFICULTY,
  setDifficulty,
  setTimerLength,
  TIMERLENGTH,
  updatePlayersList,
} from "../features/settingsSlice";
import SettingPicker from "./SettingPicker";
import PlayersForm from "./PlayersForm";

const useStyles = makeStyles((theme) => ({
  startButton: {
    height: "125px",
    borderRadius: "20px",
  },
  settingPickersContainer: {
    height: 425,
  },
}));

const SettingsContainer = ({
  difficulty,
  setDifficulty,
  timerLength,
  setTimerLength,
  players,
  updatePlayersList,
  handleStartGameAnimation,
}) => {
  const classes = useStyles();
  const [formPlayers, setFormPlayers] = useState(players);

  const addPlayerField = () => {
    const nextId = formPlayers[formPlayers.length - 1].id + 1;
    const newPlayer = {
      id: nextId,
      name: "",
      score: 0,
      current: false,
      time: 0,
    };
    const updatedPlayerForm = [...formPlayers, newPlayer];
    setFormPlayers(updatedPlayerForm);
  };

  const removePlayerField = () => {
    const slicedForm = formPlayers.slice(0, -1);
    setFormPlayers(slicedForm);
  };

  const updatePlayerName = (e, playerId) => {
    const newFormPlayers = [...formPlayers];
    const updatedPlayer = {
      ...formPlayers.find((player) => player.id === playerId),
    };
    updatedPlayer.name = e.target.value;
    newFormPlayers[playerId] = updatedPlayer;
    setFormPlayers(newFormPlayers);
  };

  const handleStartGame = () => {
    updatePlayersList(formPlayers);
    handleStartGameAnimation();
  };

  return (
    <>
      <Grid item container spacing={4} justify="space-between">
        <Grid item container xs={6} spacing={2}>
          <PlayersForm
            players={formPlayers}
            addPlayerField={addPlayerField}
            removePlayerField={removePlayerField}
            updatePlayerName={updatePlayerName}
          />
        </Grid>
        <Grid
          item
          container
          xs={6}
          direction="column"
          justify="space-between"
          className={classes.settingPickersContainer}
        >
          <Grid item>
            <SettingPicker
              title="Timer"
              options={[
                TIMERLENGTH.short,
                TIMERLENGTH.medium,
                TIMERLENGTH.long,
              ]}
              currentSetting={timerLength}
              action={setTimerLength}
            />
          </Grid>
          <Grid item>
            <SettingPicker
              title="Difficulty"
              options={[DIFFICULTY.e, DIFFICULTY.m, DIFFICULTY.h]}
              currentSetting={difficulty}
              action={setDifficulty}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        fullWidth
        size="large"
        className={classes.startButton}
        onClick={handleStartGame}
      >
        <Typography variant="h3">Start Game</Typography>
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  difficulty: state.settings.difficulty,
  timerLength: state.settings.timerLength,
  players: state.settings.players,
});

const mapDispatchToProps = {
  setDifficulty,
  setTimerLength,
  updatePlayersList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
