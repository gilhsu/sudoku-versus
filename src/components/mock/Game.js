import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

import { setDifficulty } from "../../features/settingsSlice";
import Header from "../Header";

import RulesTile from "../RulesTile";
import InfoContainer from "../InfoContainer";
import MainContainer from "../MainContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "50px",
    justifyContent: "center",
    fontFamily: '"Karla", "san-serif"',
  },
  test: {
    display: "flex",
    justifyContent: "center",
    width: "450px",
    fontFamily: '"Karla", "san-serif"',
  },
}));

const Game = ({ difficulty, onChangeDifficulty, players }) => {
  const classes = useStyles();
  const [inGame, setInGame] = useState(false);
  const [showRules, setShowRules] = useState(true);

  const handleStartGameAnimation = () => {
    if (showRules) {
      setShowRules(!showRules);
      setTimeout(() => setInGame(!inGame), 300);
    } else {
      setInGame(!inGame);
      setTimeout(() => setShowRules(!showRules), 300);
    }
  };

  return (
    <>
      <Header onChangeDifficulty={onChangeDifficulty} difficulty={difficulty} />
      <Switch checked={inGame} onChange={handleStartGameAnimation} />
      <div className={classes.root}>
        <div className={classes.test}>
          <RulesTile showRules={showRules} />
          <InfoContainer inGame={inGame} />
        </div>
        <MainContainer
          inGame={inGame}
          handleStartGameAnimation={handleStartGameAnimation}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  difficulty: state.settings.difficulty,
  players: state.settings.players,
});

const mapDispatchToProps = {
  setDifficulty,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
