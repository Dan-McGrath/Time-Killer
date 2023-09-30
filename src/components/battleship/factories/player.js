import ship from "./ship";
import gameboard from "./gameboard";

const player = (newName) => {
  const name = newName;

  const board = gameboard();

  const getBlankBoard = () => {
    board.createGameboard();
  };

  const ships = [
    ship("Carrier", 5),
    ship("Battleship", 4),
    ship("Destroyer", 3),
    ship("Submarine", 3),
    ship("Patrol Boat", 2),
  ];

  return {
    name,
    board,
    ships,
    getBlankBoard,
  };
};

export default player;
