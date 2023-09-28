const gameboard = () => {
  const gameboardArr = [];

  const createGameboard = () => {
    let index = 0;
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        const square = {
          index: index,
          coordinate: [i, j],
          isOccupied: false,
          isAttacked: false,
          isMissed: false,
        };
        index += 1;
        gameboardArr.push(square);
      }
    }

    return gameboardArr;
  };

  let shipLocations = [];

  const addShipLocation = (ship, location) => {
    shipLocations.push({
      ship: ship,
      location: location,
    });
  };

  const getGameboard = () => gameboardArr;

  const getSquare = () => {};

  return {
    createGameboard,
    getGameboard,
    shipLocations,
    addShipLocation,
  };
};

export default gameboard;
