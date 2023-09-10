import { useState, useEffect, useRef } from "react";
import Square from "./Square";
import { checkWinner, checkDraw } from "./tttLogic/winConditions";

const TttGameboard = () => {
  const [gameboard, setGameboard] = useState([]);

  const player1Moves = useRef([]);
  const player2Moves = useRef([]);

  const player1 = useRef({
    value: "X",
  });
  const player2 = useRef({
    value: "O",
  });
  const currentPlayer = useRef(player1.current);

  const changeCurrentPlayer = () => {
    currentPlayer.current === player1.current
      ? (currentPlayer.current = player2.current)
      : (currentPlayer.current = player1.current);
  };

  useEffect(() => {
    const createGameboard = () => {
      let gameboardArray = [];
      for (let i = 0; i < 9; i++) {
        let square = {
          index: i,
          occupied: false,
          occupiedBy: null,
        };
        gameboardArray.push(square);
      }
      setGameboard(gameboardArray);
    };
    createGameboard();
  }, []);

  const clickSquareHandler = (e) => {
    let index = Number(e.currentTarget.dataset.index);
    if (gameboard[index].occupied) {
      return;
    }

    e.currentTarget.textContent = currentPlayer.current.value;

    currentPlayer.current === player1.current
      ? player1Moves.current.push(index)
      : player2Moves.current.push(index);

    setGameboard([...gameboard], (gameboard[index].occupied = true));
    setGameboard(
      [...gameboard],
      (gameboard[index].occupiedBy = currentPlayer.current),
    );

    let result =
      currentPlayer.current === player1.current
        ? checkWinner(player1Moves.current)
        : checkWinner(player2Moves.current);

    let draw = checkDraw(gameboard);

    if (result) {
      return console.log("winner");
    }
    if (draw) {
      return console.log("draw");
    }
    changeCurrentPlayer();
  };

  const mapGameboard = gameboard.map((ele) => (
    <Square
      index={ele.index}
      key={ele.index}
      clickHandler={clickSquareHandler}
    />
  ));
  return <div className="ttt-gameboard">{mapGameboard}</div>;
};

export default TttGameboard;
