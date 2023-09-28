import ship from "./ship";
import gameboard from "./gameboardLogic";

const player = (name) => {
  const getName = () => name;

  const gameboardObj = gameboard();

  const newGameboard = gameboardObj.createGameboard();

  const currentGameboard = gameboardObj.getGameboard();

  const ships = [
    {
      ship: ship(5, "Carrier"),
      placed: false,
    },
    {
      ship: ship(4, "Battleship"),
      placed: false,
    },
    {
      ship: ship(3, "Destroyer"),
      placed: false,
    },
    {
      ship: ship(3, "Submarine"),
      placed: false,
    },
    {
      ship: ship(2, "Patrol Boat"),
      placed: false,
    },
  ];

  const shipLocations = gameboardObj.shipLocations;

  const addShipLocation = gameboardObj.addShipLocation;

  const selectShip = (index) => {
    if (ships[index].placed === true) {
      return false;
    }

    return ships[index];
  };

  const selectCoordinate = () => {};

  const selectOrientation = () => {};

  const placeShip = (ship, orientation, coordinate) => {
    if (ship.placed === true) {
      return false;
    }
  };

  return {
    getName,
    selectShip,
    selectCoordinate,
    selectOrientation,
    placeShip,
    newGameboard,
    currentGameboard,
    ships,
    shipLocations,
    addShipLocation,
  };
};

export default player;
