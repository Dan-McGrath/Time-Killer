import { useState, useRef } from "react";
import createGameboard from "./tttLogic/createTttGameboard";
import Monitor from "./Monitor";
import Player from "./tttLogic/player";
import Button from "./Button";
import Message from "./Message";

import { checkWinner, checkDraw } from "./tttLogic/winConditions";
import ai from "./tttLogic/ai";

const GameManager = () => {
  const blankGameboard = createGameboard();
  const currentGameboard = createGameboard();
  const [activeGame, setActiveGame] = useState(false);
  const [aiActive, setAiActive] = useState(false);
  const [gameboard, setGameboard] = useState(currentGameboard);
  const player1Moves = useRef([]);
  const player2Moves = useRef([]);
  const message = useRef("");
  const player1 = useRef(Player("Player 1", "X", false, player1Moves.current));
  const player2 = useRef(
    Player("Player 2", "O", aiActive, player2Moves.current),
  );
  const currentPlayer = useRef(player1.current);
  const gameResult = useRef(null);

  const choosePlayersHandler = () => {
    player2.current.activeAi
      ? (setAiActive(false), (player2.current.activeAi = false))
      : (setAiActive(true), (player2.current.activeAi = true));
  };

  const startHandler = () => {
    if (gameboard === blankGameboard) {
      setActiveGame(!activeGame);
    } else {
      resetGameHandler();
      setActiveGame(!activeGame);
    }
  };

  const changeCurrentPlayer = () => {
    currentPlayer.current === player1.current
      ? (currentPlayer.current = player2.current)
      : (currentPlayer.current = player1.current);
  };

  const resetGameHandler = () => {
    setGameboard(blankGameboard);
    currentPlayer.current = player1.current;
    player1Moves.current = [];
    player2Moves.current = [];
    gameResult.current = null;
    message.current = "";
  };

  const clickSquareHandler = (e) => {
    let index = Number(e.currentTarget.dataset.index);

    if (gameboard[index].occupied) {
      return;
    }

    e.currentTarget.textContent = currentPlayer.current.token;
    gameboard[index].content = currentPlayer.current.token;

    currentPlayer.current === player1.current
      ? player1Moves.current.push(index)
      : player2Moves.current.push(index);

    setGameboard([...gameboard], (gameboard[index].occupied = true));
    setGameboard(
      [...gameboard],
      (gameboard[index].occupiedBy = currentPlayer.current),
    );

    gameResult.current =
      currentPlayer.current === player1.current
        ? checkWinner(player1Moves.current)
        : checkWinner(player2Moves.current);

    let draw = checkDraw(gameboard);

    if (gameResult.current) {
      setActiveGame(false);
      return (message.current = `${currentPlayer.current.name} Wins!`);
    }
    if (draw) {
      setActiveGame(false);
      return (message.current = "Draw");
    }
    changeCurrentPlayer();
  };

  // Ai Move
  if (activeGame && aiActive && currentPlayer.current === player2.current) {
    let index = ai();
    while (gameboard[index].occupied) {
      index = ai();
    }
    gameboard[index].content = currentPlayer.current.token;

    currentPlayer.current === player1.current
      ? player1Moves.current.push(index)
      : player2Moves.current.push(index);

    setGameboard([...gameboard], (gameboard[index].occupied = true));
    setGameboard(
      [...gameboard],
      (gameboard[index].occupiedBy = currentPlayer.current),
    );

    gameResult.current =
      currentPlayer.current === player1.current
        ? checkWinner(player1Moves.current)
        : checkWinner(player2Moves.current);

    let draw = checkDraw(gameboard);

    if (gameResult.current) {
      setActiveHandler(false);
      return (message.current = `${currentPlayer.current.name} Wins!`);
    }
    if (draw) {
      setActiveHandler(false);
      return (message.current = "Draw");
    }
    changeCurrentPlayer();
  }

  return activeGame ? (
    <>
      <Monitor
        gameboard={gameboard}
        choosePlayersHandler={choosePlayersHandler}
        squareClickHandler={clickSquareHandler}
        aiActive={aiActive}
      />
      <Button text="Reset" clickHandler={resetGameHandler} />
    </>
  ) : (
    <>
      <Monitor
        gameboard={gameboard}
        choosePlayersHandler={choosePlayersHandler}
        aiActive={aiActive}
      />
      <Message message={message.current} />
      <Button text="Start" clickHandler={startHandler} />
    </>
  );
};

export default GameManager;
