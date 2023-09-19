import deck from "./bjLogic/createDeck";
import Gameboard from "./Gameboard";
import Button from "../Button";
import { useState } from "react";

const GameManager = () => {
  let newDeck = deck()();

  const [currentDeck, setCurrentDeck] = useState(newDeck);

  const shuffleCards = (arr) => {
    const newArray = arr.slice(0);
    for (let i = 0; i < newArray.length; i += 1) {
      const randInt = Math.floor(Math.random() * arr.length);
      [newArray[i], newArray[randInt]] = [newArray[randInt], newArray[i]];
    }
    return newArray;
  };

  const getDeck = () => setCurrentDeck(shuffleCards(newDeck));
  return (
    <>
      <Gameboard currentDeck={currentDeck} />
      <Button text="get Deck" clickHandler={getDeck} />
    </>
  );
};

export default GameManager;
