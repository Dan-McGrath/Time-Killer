import { useState, useEffect, useRef } from "react";
import Square from "./Square";

const TttGameboard = () => {
  const [gameboard, setGameboard] = useState([]);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);

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
      ? setPlayer1Moves([...player1Moves, index])
      : setPlayer2Moves([...player2Moves, index]);

    setGameboard([...gameboard], (gameboard[index].occupied = true));
    setGameboard(
      [...gameboard],
      (gameboard[index].occupiedBy = currentPlayer.current),
    );

    console.log(currentPlayer.current);
    console.log(player1.current);

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
