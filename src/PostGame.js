import React from "react";
import { Container, Typography, Button } from "@material-ui/core";

const PostGame = ({ setGameStatus, players, setPlayers, mockData }) => {
     const winnerObj = players.reduce((max, p) => {
       if (max.score > p.score) return max;
       else if (max.score === p.score) return { msg: "No winner, it's a tie!" };
       else return p;
     });

  return (
    <Container maxWidth="xs">
      <Typography variant="h2" align="center" color="primary" gutterBottom>Results</Typography>
      <Typography variant="h4" color="secondary">Winner</Typography>
      <Typography variant="subtitle1" gutterBottom>{winnerObj.name || winnerObj.msg}</Typography>
      
      <Typography variant="h4" color="secondary">Final Scores</Typography>
      <ul>
      {players.map((player) => (
        <li key={player.id}>
          {player.id === winnerObj.id ? (
            <b>{player.name}: {player.score}</b>
          ) : (
            `${player.name}: ${player.score}`
          )}
        </li>
      ))}
      </ul>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setGameStatus("pre");
          setPlayers(mockData);
        }}
      >
        Start over
      </Button>
    </Container>
  );
};

export default PostGame;
