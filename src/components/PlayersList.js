import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { Colors } from "../themes/defaultTheme";

const useStyles = makeStyles((theme) => ({
  playerListContainer: {
    flexGrow: 1,
    padding: 10,
  },
  playerList: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    height: "100%",
  },
  playerHeaderRow: {
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
  },
  playerRow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    padding: "0 20px 0 30px",
  },
  playerRowSelected: {
    flexGrow: 1,
    borderLeft: `10px solid ${Colors.primary}`,
    backgroundColor: Colors.selectedBackgroundColor,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    fontWeight: 700,
  },
  playerRowTitle: {
    width: "50%",
    fontSize: 24,
  },
  playerRowStats: {
    width: "50%",
    display: "flex",
  },
  playerRowStatElement: {
    width: "50%",
    textAlign: "center",
    fontSize: 24,
  },
}));

const PlayerRow = ({ player }) => {
  const classes = useStyles();
  const selectedStyles = player.current
    ? classes.playerRowSelected
    : classes.playerRow;
  return (
    <div className={selectedStyles}>
      <div className={classes.playerRowTitle}>{player.name}</div>
      <div className={classes.playerRowStats}>
        <div className={classes.playerRowStatElement}>{player.score}</div>
        <div className={classes.playerRowStatElement}>{player.time}</div>
      </div>
    </div>
  );
};

const PlayersList = ({ players }) => {
  const classes = useStyles();

  return (
    <div className={classes.playerListContainer}>
      <Paper className={classes.playerList} elevation={1}>
        <div className={classes.playerHeaderRow}>
          <div className={classes.playerRowTitle}></div>
          <div className={classes.playerRowStats}>
            <div className={classes.playerRowStatElement}>Score</div>
            <div className={classes.playerRowStatElement}>Time</div>
          </div>
        </div>
        {players.map((player, i) => (
          <PlayerRow key={i} player={player} />
        ))}
      </Paper>
    </div>
  );
};

export default PlayersList;
