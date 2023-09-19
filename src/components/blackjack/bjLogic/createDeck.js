import card from "./createCard";

const deck = () => {
  const createDeck = () => {
    let newDeck = [];
    let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    let faceCards = ["Ace", "Jack", "Queen", "King"];
    for (let i = 0; i < 4; i++) {
      let suit = suits[i];
      let index = 0;
      for (let j = 1; j < 14; j++) {
        let value = j;
        let newCard;
        if (j === 1) {
          newCard = card(suit, "11", faceCards[0], index);
          newDeck.push(newCard);
        } else if (j === 11) {
          newCard = card(suit, "10", faceCards[1], index);
          newDeck.push(newCard);
        } else if (j === 12) {
          newCard = card(suit, "10", faceCards[2], index);
          newDeck.push(newCard);
        } else if (j === 13) {
          newCard = card(suit, "10", faceCards[3], index);
          newDeck.push(newCard);
        } else {
          newCard = card(suit, String(value), String(j), index);
          newDeck.push(newCard);
        }
      }
    }
    return newDeck;
  };

  return createDeck;
};

export default deck;
