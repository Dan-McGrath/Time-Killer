import { useState, useRef } from "react";
import player from "./battleshipLogic/player";
import Gameboard from "./Gameboard";
import Button from "../Button.jsx";

const GameManager = () => {
  const firstPlayer = player("Player 1");
  const secondPlayer = player("Player 2");

  const [shipsPlaced, setShipsPlaced] = useState(false);
  const [player1, setPlayer1] = useState(firstPlayer);
  const [player2, setPlayer2] = useState(secondPlayer);
  const [isVertical, setIsVertical] = useState(true);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const currentPlayer = useRef(player1);

  const horizontalCollisons = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
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
    let index = Number(e.target.id);
    const squares = document.querySelectorAll(".square");
    currentPlayer.current.ships.forEach((ele) => {
      if (dragged.id === ele.ship.getName()) {
        let size = ele.ship.getLength();
        if (
          isHorizontal &&
          !horizontalCollisons.some((ele) => ele === size - 1 + index)
        ) {
          squares[index].appendChild(dragged);
          for (let i = size - 1; i >= 0; i--) {
            squares[index + i].classList.add("occupied");
          }
        }
        if (isVertical && (size - 1) * 10 + index < 101) {
          squares[index].appendChild(dragged);
          for (let i = size - 1; i >= 0; i--) {
            console.log(index);
            squares[index].classList.add("occupied");

            index += 10;
          }
        }
      }
    });
  };

  const orientation = () => {
    if (isVertical === true) {
      setIsVertical(false);
      setIsHorizontal(true);
    } else {
      setIsVertical(true);
      setIsHorizontal(false);
    }
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
      <div className="orientation">
        <Button text="Vertical" clickHandler={orientation} />
        <Button text="Horizontal" clickHandler={orientation} />
      </div>
    </>
  );
};

export default GameManager;
