import React from "react";
import {
  makeStyles,
  Button,
  Avatar,
  Container,
  Card,
  TextField,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
  },
  preCard: {
    margin: "2rem 1rem",
    padding: "1rem",
    textAlign: "center",
  },
  preButton: {
    margin: "1rem",
  },
});

const PreGame = (props) => {
  const { players, changeName, addPlayer, deletePlayer, setGameStatus } = props;

  const classes = useStyles();

  const startGame = (e) => {
    e.preventDefault();
    // for (let p in players) {
    //   if p.name
    // }

    setGameStatus("mid");
  };

  return (
    <Container maxWidth="sm">
      <Card className={classes.preCard}>
        <Typography variant="h2" align="center" color="primary" gutterBottom>
          Game Setup
        </Typography>
        <form onSubmit={startGame}>
          {players.map((player) => (
            <div key={player.id}>
              <Avatar>{player.name.charAt(0).toUpperCase() || "?"}</Avatar>
              <TextField
                required
                label="Name"
                placeholder="Enter name here"
                value={player.name}
                onChange={(e) => changeName(player, e.target.value)}
              />
              <Tooltip title="Delete Player">
                <IconButton onClick={() => deletePlayer(player)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Tooltip>
            </div>
          ))}
          <Box>
            <Button
              variant={players.length < 2 ? "contained" : "outlined"}
              color="secondary"
              className={classes.preButton}
              endIcon={<AddCircleIcon />}
              onClick={addPlayer}
            >
              Add new player
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.preButton}
              endIcon={<SendIcon />}
              type="submit"
              disabled={players.length < 2}
            >
              Start game
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default PreGame;
