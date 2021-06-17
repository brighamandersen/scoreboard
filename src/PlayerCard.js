import React from 'react';
import { ButtonGroup, Button, Card, CardHeader, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '2rem',
    padding: '1rem',
    textAlign: 'center'
  }
});

const PlayerCard = (props) => {
  const {player, changeScore} = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={player.name}
      />
      <h1>{player.score}</h1>
      <ButtonGroup variant="contained" color="default">
        <Button
          color="secondary"
          onClick={() => changeScore(player, -5)}
        >
          -5
        </Button>
        <Button
          color="secondary"
          onClick={() => changeScore(player, -1)}
        >
          -1
        </Button>
        <Button
          color="primary"
          onClick={() => changeScore(player, 1)}
        >
          +1
        </Button>
        <Button
          color="primary"
          onClick={() => changeScore(player, 5)}
        >
          +5
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default PlayerCard;
