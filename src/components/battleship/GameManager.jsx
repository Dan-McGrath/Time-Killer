import { useState, useRef } from "react";

import Gameboard from "./Gameboard";
import player from "./battleshipLogic/player";
const GameManager = () => {
  const firstPlayer = player("Player 1");
  const secondPlayer = player("Player 2");

  const [shipsPlaced, setShipsPlaced] = useState(false);
  const [player1, setPlayer1] = useState(firstPlayer);
  const [player2, setPlayer2] = useState(secondPlayer);

  const currentPlayer = useRef(player1);

  return (
    <div className="battleship">
      <Gameboard currentPlayer={currentPlayer.current} />
    </div>
  );
};

export default GameManager;
