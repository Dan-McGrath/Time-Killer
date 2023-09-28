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
    let location = [];
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
            location.push(index + i);
          }
          if (currentPlayer.current === player1) {
            setPlayer1(
              { ...player1 },
              player1.addShipLocation(ele.ship, location),
            );
          } else {
            setPlayer2(
              { ...player2 },
              player2.addShipLocation(ele.ship, location),
            );
          }

          //currentPlayer.current.addShipLocation();
        }
        if (isVertical && (size - 1) * 10 + index < 101) {
          squares[index].appendChild(dragged);

          for (let i = size - 1; i >= 0; i--) {
            squares[index].classList.add("occupied");
            location.push(index);
            index += 10;
          }
          if (currentPlayer.current === player1) {
            setPlayer1(
              { ...player1 },
              player1.addShipLocation(ele.ship, location),
            );
          } else {
            setPlayer2(
              { ...player2 },
              player2.addShipLocation(ele.ship, location),
            );
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

  const currentShipLocations = currentPlayer.current.shipLocations.map(
    (ele) => <div key={ele.ship}>{ele.location}</div>,
  );

  console.log(currentPlayer.current.shipLocations);
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
      <div>{currentShipLocations}</div>
    </>
  );
};

export default GameManager;
