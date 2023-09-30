import { useState, useRef } from "react";
import player from "./factories/player";
import Gameboard from "./Gameboard";
import Button from "../Button.jsx";

const GameManager = () => {
  const firstPlayer = player("Player 1");
  const secondPlayer = player("Player 2");

  firstPlayer.getBlankBoard();

  const [shipsPlaced, setShipsPlaced] = useState(false);
  const [player1, setPlayer1] = useState(firstPlayer);
  const [player2, setPlayer2] = useState(secondPlayer);
  const [isVertical, setIsVertical] = useState(true);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const currentPlayer = useRef(player1);

  // drag and drop functions

  let dragged;

  const dragstartHandler = (e) => {
    e.dataTransfer.dropEffect = "copy";
    if (e.target.parentNode.classList.contains("occupied")) {
      e.target.parentNode.classList.remove("occupied");
    }

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
      if (dragged.id === ele.name) {
        if (isHorizontal) {
          currentPlayer.current.board.addShipLocation(ele, "x", index);
        }
        if (isVertical) {
          currentPlayer.current.board.addShipLocation(ele, "y", index);
        }
      }
    });

    currentPlayer.current.board.gameboard.forEach((ele) => {
      if (ele.isOccupied) {
        squares[ele.index].classList.add("occupied");
      }
      if (!ele.isOccupied) {
        squares[ele.index].classList.remove("occupied");
      }
    });
  };

  const orientation = (e) => {
    if (e.target.classList.contains("active")) {
      if (e.target.previousSibling) {
        e.target.previousSibling.classList.add("active");
        e.target.classList.remove("active");
      }
      if (e.target.nextSibling) {
        e.target.nextSibling.classList.add("active");
        e.target.classList.remove("active");
      }
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
      if (e.target.previousSibling) {
        e.target.previousSibling.classList.remove("active");
      }
      if (e.target.nextSibling) {
        e.target.nextSibling.classList.remove("active");
      }
    }
    if (isVertical) {
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
      key={ele.name}
      draggable="true"
      onDragStart={dragstartHandler}
      id={ele.name}
    >
      <p>{ele.name}</p>
      <p>Size: {ele.size}</p>
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
        <Button
          text="Vertical"
          clickHandler={orientation}
          className="vertical active"
        />
        <Button
          text="Horizontal"
          clickHandler={orientation}
          className="horizontal"
        />
      </div>
    </>
  );
};

export default GameManager;
