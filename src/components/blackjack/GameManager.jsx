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
    if (currentDeck.length < 4) {
      getNewDeck();
    }
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
      setCardsDealt(true);
      currentplayer.current = player1;
    }, 1600);
  };

  const aiMove = () => {
    let dealersHand = dealer.getHand();

    if (dealerScore.current < 17) {
      setTimeout(() => {
        let newCard = currentDeck.pop();
        setCurrentDeck([...currentDeck]);
        setDealer({ ...dealer }, dealer.addCardToHand(newCard));
        dealerScore.current = dealer.addScore();
        aiMove();
      }, 1000);
    }

    if (dealerScore.current === 21) {
      setMessage("Dealer has Blackjack!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    if (dealerScore.current > 21) {
      dealersHand.forEach((ele) => {
        if (ele.getValue() === 11) {
          ele.changeValue();
          dealerScore.current = dealer.addScore();
          aiMove();
        }
      });
      setMessage("Dealer Busted!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const stay = () => {
    if (currentplayer.current.newName === "Player 1") {
      currentplayer.current = dealer;

      setTimeout(() => {
        setDealersTurn(true);
        setFaceUp(true);
      }, 500);
    }
    setTimeout(() => {
      aiMove();
    }, 1000);
  };

  const hit = () => {
    let currentCard = currentDeck.pop();
    setCurrentDeck([...currentDeck]);
    if (currentplayer.current.newName === "Player 1") {
      setPlayer1({ ...player1 }, player1.addCardToHand(currentCard));
      playerScore.current = player1.addScore();
      if (playerScore.current === 21) {
        setMessage("Blackjack!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }

      if (playerScore.current > 21) {
        player1.getHand().forEach((ele) => {
          if (ele.getValue() === 11) {
            ele.changeValue();
            playerScore.current = player1.addScore();
          }
        });
        setMessage("Bust");
        setTimeout(() => {
          stay();
          setMessage("");
        }, 2000);
      }
    }
    if (currentplayer.current.newName === "Dealer") {
      setDealer({ ...dealer }, dealer.addCardToHand(currentCard));
      dealerScore.current = dealer.addScore();
    }
  };

  const nextRound = () => {
    setDealer({ ...dealer }, dealer.discardHand());
    dealerScore.current = dealer.addScore();
    setPlayer1({ ...player1 }, player1.discardHand());
    playerScore.current = player1.addScore();
    setCardsDealt(false);
    setDealersTurn(false);
    setFaceUp(false);
    currentplayer.current = player1;
  };

  if (currentDeck.length < 10) {
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
          <p>Cards in Deck: {currentDeck.length}</p>
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
