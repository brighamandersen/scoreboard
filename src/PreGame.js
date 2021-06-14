import React from "react";

const PreGame = ({ setGameStatus }) => {
  // function onStartGame() {
  //   if
  // }

  return (
    <>
      <button onClick={() => setGameStatus("mid")}>Start game</button>
    </>
  );
};

export default PreGame;
