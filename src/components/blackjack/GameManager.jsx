import deck from "./bjLogic/createDeck";
import player from "./bjLogic/player";
import Gameboard from "./Gameboard";
import Button from "../Button";
import { useState } from "react";

const GameManager = () => {
  const [faceUp, setFaceUp] = useState(true);
  const [player1, setPlayer1] = useState(player("Player 1"));
  const [dealer, setDealer] = useState(player("Dealer"));
  const [currentPlayer, setCurrentPlayer] = useState(player1);

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

  const getNewDeck = () => setCurrentDeck(newDeck);
  if (currentDeck.length < 1) {
    getNewDeck();
  }

  const dealHands = () => {
    let currentCard = currentDeck.pop();
    setPlayer1({ ...player1 }, player1.addCardToHand(currentCard));
    currentCard = currentDeck.pop();
    setDealer({ ...dealer }, dealer.addCardToHand(currentCard));
    currentCard = currentDeck.pop();
    setPlayer1({ ...player1 }, player1.addCardToHand(currentCard));
    currentCard = currentDeck.pop();
    setDealer({ ...dealer }, dealer.addCardToHand(currentCard));
    setCurrentDeck([...currentDeck]);
  };

  const dealCard = () => {
    let currentCard = currentDeck.pop();
    currentPlayer.addCardToHand(currentCard);
    if (currentPlayer.newName === "Player 1") {
      setPlayer1({ ...currentPlayer });
    } else if (currentPlayer.newName === "Dealer") {
      setDealer({ ...currentPlayer });
    }
    setCurrentDeck([...currentDeck]);
  };

  const stay = () => {
    if (currentPlayer.newName === "Player 1") {
      setCurrentPlayer(dealer);
    } else if (currentPlayer.newName === "Dealer") {
      setCurrentPlayer(player1);
    }
  };

  return (
    <>
      <Gameboard
        currentPlayerCards={player1.getHand()}
        currentDealerCards={dealer.getHand()}
        faceUp={faceUp}
      />
      <Button text="Deal" clickHandler={dealHands} />
      <Button text="Hit" clickHandler={dealCard} />
      <Button text="stay" clickHandler={stay} />
    </>
  );
};

export default GameManager;
