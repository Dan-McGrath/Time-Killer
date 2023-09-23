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

  // drag and drop functions

  let dragged;

  const dragstartHandler = (e) => {
    e.dataTransfer.dropEffect = "copy";
    dragged = e.target;
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const dropHandler = (e) => {
    e.target.appendChild(dragged);
  };

  const currentPlayersShips = currentPlayer.current.ships.map((ele) => (
    <div
      className="ship"
      key={ele.ship.getName()}
      draggable="true"
      onDragStart={dragstartHandler}
      id={ele.ship.getName()}
    >
      <p>{ele.ship.getName()}</p>
      <p>Size: {ele.ship.getLength()}</p>
    </div>
  ));

  return (
    <>
      <div className="battleship-gameboard">
        <Gameboard
          currentPlayer={currentPlayer.current}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
        />
      </div>
      <div className="ships">{currentPlayersShips}</div>
    </>
  );
};

export default GameManager;
