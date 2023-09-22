import ship from "./ship";

const player = (name) => {
  const getName = () => name;

  const ships = [
    {
      ship: ship(5, "Carrier"),
      placed: false,
    },
    {
      ship: ship(5, "Battleship"),
      placed: false,
    },
    {
      ship: ship(5, "Destroyer"),
      placed: false,
    },
    {
      ship: ship(5, "Submarine"),
      placed: false,
    },
    {
      ship: ship(5, "Patrol Boat"),
      placed: false,
    },
  ];

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
  };
};

export default player;
