import React from 'react';
import useLocalStorage from './useLocalStorage';
import Navbar from './Navbar';
import PreGame from './PreGame';
import PostGame from './PostGame';
import { Box } from '@material-ui/core';
import MidGame from './MidGame';

const mockData = [
  {
    id: 1,
    name: 'Brig',
    score: 0
  },
  {
    id: 2,
    name: 'Dad',
    score: 0
  }
];

const App = () => {
  // Possible values: 'pre', 'mid', 'post'
  const [gameStatus, setGameStatus] = useLocalStorage('gameStatus', 'pre');
  const [players, setPlayers] = useLocalStorage('players', mockData);

  function changeScore(player, pointChange) {
    const score = player.score + pointChange;

    setPlayers(players.map((p) => p.id === player.id ? {...p, score} : p));
  }

  return (
    <Box>
      <Navbar />
      {gameStatus === 'pre' && (
        <PreGame setGameStatus={setGameStatus} />
      )}
      {gameStatus === 'mid' && (
        <MidGame
          players={players}
          changeScore={changeScore}
          setGameStatus={setGameStatus}
        />
      )}
      {gameStatus === 'post' && (
        <PostGame
          setGameStatus={setGameStatus}
          players={players}
          setPlayers={setPlayers}
          mockData={mockData}
        />
      )}
    </Box>
  );
}

export default App;
