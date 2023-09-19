import PropTypes from "prop-types";
import Card from "./Card";

const Gameboard = ({ currentPlayerCards, currentDealerCards, faceUp }) => {
  let playerHand = currentPlayerCards.map((ele) => (
    <Card
      key={`${ele.getName()} of ${ele.getSuit()}`}
      name={ele.getName()}
      faceUp={faceUp}
    />
  ));

  let dealerHand = currentDealerCards.map((ele) => (
    <Card
      key={`${ele.getName()} of ${ele.getSuit()}`}
      name={ele.getName()}
      suit={ele.getSuit()}
      faceUp={faceUp}
    />
  ));
  return (
    <>
      <div className="player-hand">{playerHand}</div>
      <div className="dealer-hand">{dealerHand}</div>
    </>
  );
};

Gameboard.propTypes = {
  currentPlayerCards: PropTypes.array,
  currentDealerCards: PropTypes.array,
  faceUp: PropTypes.bool,
};

export default Gameboard;
