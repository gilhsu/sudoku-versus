import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // "& > *": {
    //   margin: theme.spacing(1),
    //   // width: "25%",
    //   height: theme.spacing(16),
    // },
    width: "25%",
  },
  root2: {
    flexGrow: 1,
  },
  currentPlayer: {
    backgroundColor: "#afc7de",
    padding: theme.spacing(5),
  },
  notCurrentPlayer: {
    backgroundColor: "white",
    padding: theme.spacing(5),
  },
}));

const PlayerRow = ({ player }) => {
  const classes = useStyles();
  const displayStyle = player.current
    ? classes.currentPlayer
    : classes.notCurrentPlayer;
  return (
    <Grid item>
      <Paper className={displayStyle} elevation={2}>
        <div className={classes.root2}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">{player.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{player.score}</Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

const PlayersTable = ({ players }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column" spacing={2}>
      {players.map((player, i) => (
        <PlayerRow key={i} player={player} />
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  players: state.settings.players,
});

export default connect(mapStateToProps, null)(PlayersTable);
