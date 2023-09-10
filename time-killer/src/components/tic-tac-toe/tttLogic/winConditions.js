const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkDraw = (gameboard) => {
  let draw = gameboard.every((ele) => ele.occupied);
  return draw;
};

const checkWinner = (playerMoves) => {
  let winner = false;
  winConditions.forEach((ele) => {
    if (ele.every((element) => playerMoves.includes(element))) {
      winner = true;
    }
  });
  return winner;
};

export { checkWinner, checkDraw };
