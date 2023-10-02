import { useState, useRef } from "react";
import player from "./factories/player";
import Gameboard from "./Gameboard";
import Button from "../Button.jsx";
import Square from "./Square";
const GameSetup = () => {
  const firstPlayer = player("Player 1");
  const secondPlayer = player("Player 2");

  firstPlayer.getBlankBoard();
  secondPlayer.getBlankBoard();

  const [shipsPlaced, setShipsPlaced] = useState(false);
  const [player1, setPlayer1] = useState(firstPlayer);
  const [player2, setPlayer2] = useState(secondPlayer);
  const [isVertical, setIsVertical] = useState(true);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [hasAttacked, setHasAttacked] = useState(false);
  const [message, setMessage] = useState("");
  const [winner, setWinner] = useState(false);
  const currentPlayer = useRef(player1);
  const enemyPlayer = useRef(player2);
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
    const ships = document.querySelectorAll(".ship");
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

    currentPlayer.current.board.shipLocations.forEach((ele) => {
      ships.forEach((ship) => {
        if (ele.ship.name === ship.id) {
          ship.classList.add("placed");
        }
      });
    });

    currentPlayer.current.ships.every((ele) => ele.placed === true) &&
      setShipsPlaced(true);
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

  const endPlacement = () => {
    const squares = document.querySelectorAll(".square");
    if (currentPlayer.current.name === "Player 1") {
      setPlayer1({ ...currentPlayer.current });
      currentPlayer.current = player2;
      let ships = document.querySelectorAll(".ship");
      ships.forEach((ele) => {
        if (ele.classList.contains("placed")) {
          ele.classList.remove("placed");
        }
      });
      currentPlayer.current.board.gameboard.forEach((ele) => {
        if (!ele.isOccupied) {
          squares[ele.index].classList.remove("occupied");
        }
      });
      setShipsPlaced(false);
    } else {
      setPlayer2({ ...currentPlayer.current });
      currentPlayer.current = player1;
      setGameStart(true);
    }
  };

  const endTurn = () => {
    if (currentPlayer.current.name === "Player 1") {
      setPlayer1({ ...currentPlayer.current });
      currentPlayer.current = player2;
      enemyPlayer.current = player1;
    } else {
      setPlayer2({ ...currentPlayer.current });
      currentPlayer.current = player1;
      enemyPlayer.current = player2;
    }
    setHasAttacked(false);
  };

  const checkForWinner = () => {
    return enemyPlayer.current.ships.every((ship) => ship.isSunk() === true);
  };

  const attackHandler = (e) => {
    let index = Number(e.target.id);
    let attack = enemyPlayer.current.board.attack(index);
    if (attack) {
      if (enemyPlayer.current.name === "Player 1") {
        setPlayer1({ ...enemyPlayer.current });
      } else {
        setPlayer2({ ...enemyPlayer.current });
      }
      setHasAttacked(true);
      let winner = checkForWinner();
      if (winner) {
        setMessage(`${currentPlayer.current.name} Wins!`);
        setWinner(true);
      }
    }
  };

  if (shipsPlaced && !gameStart && !hasAttacked) {
    return (
      <>
        <div className="battleship-gameboard-player">
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
        <div className="end-turn">
          <Button text="End Turn" clickHandler={endPlacement} />
        </div>
      </>
    );
  } else if (shipsPlaced && gameStart && !hasAttacked) {
    return (
      <>
        <div className="battleship-gameboard">
          <h2>{currentPlayer.current.name}</h2>
          <h2>Enemy Waters</h2>
          <div className="battleship-gameboard-enemy">
            <Gameboard
              currentPlayer={enemyPlayer.current}
              attackHandler={attackHandler}
            />
          </div>
        </div>
      </>
    );
  } else if (shipsPlaced && gameStart && hasAttacked && !winner) {
    return (
      <>
        <div className="battleship-gameboard">
          <h2>{currentPlayer.current.name}</h2>
          <h2>Enemy Waters</h2>
          <div className="battleship-gameboard-enemy">
            <Gameboard currentPlayer={enemyPlayer.current} />
          </div>
        </div>
        <div className="message">{message}</div>
        <div className="end-turn">
          <Button text="End Turn" clickHandler={endTurn} />
        </div>
      </>
    );
  } else if (!shipsPlaced && !gameStart && !hasAttacked) {
    return (
      <>
        <div className="battleship-gameboard-player">
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
  } else if (shipsPlaced && gameStart && hasAttacked && winner) {
    return (
      <>
        <div className="battleship-gameboard">
          <h2>{currentPlayer.current.name}</h2>
          <h2>Enemy Waters</h2>
          <div className="battleship-gameboard-enemy">
            <Gameboard currentPlayer={enemyPlayer.current} />
          </div>
        </div>
        <div className="end-game">
          <Button text="New Game" clickHandler={endGameHandler} />
        </div>
      </>
    );
  }
};

export default GameSetup;
