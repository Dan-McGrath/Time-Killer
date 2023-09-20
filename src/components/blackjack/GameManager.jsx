import deck from "./bjLogic/createDeck";
import player from "./bjLogic/player";

import Gameboard from "./Gameboard";
import Button from "../Button";
import { useState, useRef } from "react";

const GameManager = () => {
  const [faceUp, setFaceUp] = useState(false);
  const [player1, setPlayer1] = useState(player("Player 1"));
  const [dealer, setDealer] = useState(player("Dealer"));
  const [cardsDealt, setCardsDealt] = useState(false);
  const [dealersTurn, setDealersTurn] = useState(false);
  const [message, setMessage] = useState("");

  const currentplayer = useRef(player1);
  const playerScore = useRef(player1.addScore());
  const dealerScore = useRef(dealer.addScore());

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

  const dealHands = () => {
    setTimeout(() => {
      hit();
      currentplayer.current = dealer;
    }, 400);

    setTimeout(() => {
      hit();
      currentplayer.current = player1;
    }, 800);

    setTimeout(() => {
      hit();
      currentplayer.current = dealer;
    }, 1200);

    setTimeout(() => {
      hit();
      currentplayer.current = player1;
      setCardsDealt(true);
    }, 1600);
  };

  const aiMove = () => {
    while (dealerScore.current < 17) {
      let newCard = currentDeck.pop();
      setCurrentDeck([...currentDeck]);
      setDealer({ ...dealer }, dealer.addCardToHand(newCard));
      dealerScore.current = dealer.addScore();
    }
    if (dealerScore.current === 21) {
      setMessage("Blackjack!");
    }
    if (dealerScore.current > 21) {
      setMessage("Bust!");
    }
  };

  const stay = () => {
    if (currentplayer.current.newName === "Player 1") {
      currentplayer.current = dealer;

      setTimeout(() => {
        setDealersTurn(true);
        setFaceUp(true);
        aiMove();
      }, 500);
    }
    // setTimeout(() => {
    //   aiMove();
    // }, 1000);
  };

  const hit = () => {
    let currentCard = currentDeck.pop();
    setCurrentDeck([...currentDeck]);
    if (currentplayer.current.newName === "Player 1") {
      setPlayer1({ ...player1 }, player1.addCardToHand(currentCard));
      playerScore.current = player1.addScore();
    }
    if (currentplayer.current.newName === "Dealer") {
      setDealer({ ...dealer }, dealer.addCardToHand(currentCard));
      dealerScore.current = dealer.addScore();
    }
  };

  const nextRound = () => {
    dealer.discardHand();
    setDealer({ ...dealer });
    player1.discardHand();
    setPlayer1({ ...player1 });
    setCardsDealt(false);
    setDealersTurn(false);
  };

  if (currentDeck.length < 1) {
    getNewDeck();
  }

  return cardsDealt ? (
    !dealersTurn ? (
      <>
        <div className="scores">
          <p>Player Score: {playerScore.current}</p>
        </div>
        <Gameboard
          currentPlayerCards={player1.getHand()}
          currentDealerCards={dealer.getHand()}
          faceUp={faceUp}
          cardsDealt={cardsDealt}
        />
        <div className="message">{message}</div>

        <Button text="Hit" clickHandler={hit} />
        <Button text="stay" clickHandler={stay} />
      </>
    ) : (
      <>
        <div className="scores">
          <p>Dealer Score: {dealerScore.current}</p>
          <p>Player Score: {playerScore.current}</p>
        </div>
        <Gameboard
          currentPlayerCards={player1.getHand()}
          currentDealerCards={dealer.getHand()}
          faceUp={faceUp}
          cardsDealt={cardsDealt}
        />
        <div className="message">{message}</div>
        <Button text="Next Round" clickHandler={nextRound} />
      </>
    )
  ) : (
    <>
      <Gameboard
        currentPlayerCards={player1.getHand()}
        currentDealerCards={dealer.getHand()}
        faceUp={faceUp}
        cardsDealt={cardsDealt}
      />
      <Button text="Deal" clickHandler={dealHands} />
    </>
  );
};

export default GameManager;
