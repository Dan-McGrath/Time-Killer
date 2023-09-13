const createGameboard = () => {
  let gameboardArray = [];
  for (let i = 0; i < 9; i++) {
    let square = {
      index: i,
      occupied: false,
      occupiedBy: null,
      content: "",
    };
    gameboardArray.push(square);
  }
  return gameboardArray;
};

export default createGameboard;
