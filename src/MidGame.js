import React from "react";
import {
  makeStyles,
  Container,
  Button,
  Card,
  CardHeader,
  ButtonGroup,
  Typography,
  Avatar,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  avatar: {
    position: "absolute",
  },
  midCard: {
    margin: "2rem 1rem",
    padding: "1rem",
    textAlign: "center",
  },
});

const MidGame = (props) => {
  const { players, changeScore, setGameStatus } = props;

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      {players.map((player) => (
        <Card key={player.id} className={classes.midCard}>
          <Avatar className={classes.avatar}>
            {player.name.charAt(0).toUpperCase()}
          </Avatar>
          <CardHeader title={player.name} />
          <Typography variant="h2" gutterBottom>
            {player.score}
          </Typography>
          <ButtonGroup variant="contained" color="default">
            <Button color="secondary" onClick={() => changeScore(player, -5)}>
              -5
            </Button>
            <Button color="secondary" onClick={() => changeScore(player, -1)}>
              -1
            </Button>
            <Button color="primary" onClick={() => changeScore(player, 1)}>
              +1
            </Button>
            <Button color="primary" onClick={() => changeScore(player, 5)}>
              +5
            </Button>
          </ButtonGroup>
        </Card>
      ))}
      <Button
        variant="contained"
        color="primary"
        endIcon={<DoneIcon />}
        onClick={() => setGameStatus("post")}
      >
        End game
      </Button>
    </Container>
  );
};

export default MidGame;
