import React from "react";
import useLocalStorage from "./useLocalStorage";
import Navbar from "./Navbar";
import PreGame from "./PreGame";
import PostGame from "./PostGame";
import {
  Box,
  makeStyles,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import MidGame from "./MidGame";
import GitHubIcon from "@material-ui/icons/GitHub";
import uuid from "react-uuid";

const mockData = [
  {
    id: uuid(),
    name: "Brig",
    score: 0,
  },
  {
    id: uuid(),
    name: "Dad",
    score: 0,
  },
];

const useStyles = makeStyles({
  screenWrapper: {
    paddingTop: "1rem",
    paddingBottom: "4rem",
  },
  bottomRight: {
    position: "fixed",
    bottom: "3%",
    right: "3%",
  },
});

const App = () => {
  const classes = useStyles();

  // Possible values: 'pre', 'mid', 'post'
  const [gameStatus, setGameStatus] = useLocalStorage("gameStatus", "pre");
  const [players, setPlayers] = useLocalStorage("players", mockData);

  const changeScore = (player, pointChange) => {
    const score = player.score + pointChange;

    setPlayers(players.map((p) => (p.id === player.id ? { ...p, score } : p)));
  };

  const changeName = (player, name) => {
    setPlayers(players.map((p) => (p.id === player.id ? { ...p, name } : p)));
  };

  const addPlayer = () => {
    const newPlayer = {
      id: uuid(),
      name: "",
      score: 0,
    };
    const temp = [...players];
    temp.push(newPlayer);
    setPlayers(temp);
  };

  const deletePlayer = (playerToDelete) => {
    const temp = players.filter((p) => p.id !== playerToDelete.id);
    setPlayers(temp);
  };
  console.log(players);

  return (
    <Box>
      <Navbar />
      <main className={classes.screenWrapper}>
        {gameStatus === "pre" && (
          <PreGame
            players={players}
            changeName={changeName}
            addPlayer={addPlayer}
            deletePlayer={deletePlayer}
            setGameStatus={setGameStatus}
          />
        )}
        {gameStatus === "mid" && (
          <MidGame
            players={players}
            changeScore={changeScore}
            setGameStatus={setGameStatus}
          />
        )}
        {gameStatus === "post" && (
          <PostGame
            setGameStatus={setGameStatus}
            players={players}
            setPlayers={setPlayers}
            mockData={mockData}
          />
        )}
      </main>
      <Tooltip title="See Source Code">
        <IconButton
          color="primary"
          href="https://www.github.com"
          className={classes.bottomRight}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default App;
