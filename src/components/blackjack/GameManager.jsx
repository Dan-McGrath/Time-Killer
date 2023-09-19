import deck from "./bjLogic/createDeck";
import Gameboard from "./Gameboard";
import Button from "../Button";
import { useState } from "react";

const GameManager = () => {
  const [faceUp, setFaceUp] = useState(true);

  const shuffleCards = (arr) => {
    const newArray = arr.slice(0);
    for (let i = 0; i < newArray.length; i += 1) {
      const randInt = Math.floor(Math.random() * arr.length);
      [newArray[i], newArray[randInt]] = [newArray[randInt], newArray[i]];
    }
    return newArray;
  };
  let newDeck = shuffleCards(deck()());

  const [currentDeck, setCurrentDeck] = useState(newDeck);

  const getDeck = () => setCurrentDeck(newDeck);
  return (
    <>
      <Gameboard currentDeck={currentDeck} faceUp={faceUp} />
      <Button text="get Deck" clickHandler={getDeck} />
    </>
  );
};

export default GameManager;
