import React from 'react';import { makeStyles, Container, Button } from '@material-ui/core';
import PlayerCard from './PlayerCard';

const useStyles = makeStyles({
  midContainer: {
    textAlign: 'center'
  }
});

const MidGame = (props) => {
  const { players, changeScore, setGameStatus }  = props;

  const classes = useStyles();

  return (
    <Container className={classes.midContainer}>
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          changeScore={changeScore}
        />
      ))}
      <Button variant="contained" color="primary" onClick={() => setGameStatus('post')}>Finish game</Button>
    </Container>
  );
}

export default MidGame;
