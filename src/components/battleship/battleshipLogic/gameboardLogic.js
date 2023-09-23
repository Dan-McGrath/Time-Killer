const gameboard = () => {
  const gameboardArr = [];

  const createGameboard = () => {
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        const square = {
          coordinate: [i, j],
          isOccupied: false,
          isAttacked: false,
          isMissed: false,
        };
        gameboardArr.push(square);
      }
    }

    return gameboardArr;
  };

  const getGameboard = () => gameboardArr;

  const getSquare = () => {};

  return {
    createGameboard,
    getGameboard,
  };
};

export default gameboard;
