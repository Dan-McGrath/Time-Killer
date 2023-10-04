import PropTypes from "prop-types";
import Card from "./Card";

const Gameboard = ({
  currentPlayerCards,
  currentDealerCards,
  faceUp,
  cardsDealt,
  message,
}) => {
  let playerHand = currentPlayerCards.map((ele) => (
    <Card key={`${ele.getName()}`} name={ele.getName()} faceUp={true} />
  ));

  let dealerHand = currentDealerCards.map((ele) => (
    <Card
      key={`${ele.getName()} of ${ele.getSuit()}`}
      name={ele.getName()}
      suit={ele.getSuit()}
      faceUp={true}
    />
  ));

  return cardsDealt ? (
    faceUp ? (
      <>
        <p className="player">Dealers Hand</p>
        <div className="bj-gameboard">
          <div className="player-hand">{playerHand}</div>
          <div className="message">{message}</div>
          <div className="dealer-hand">{dealerHand}</div>
        </div>
        <p className="player">Your Hand</p>
      </>
    ) : (
      <>
        <p className="player">Dealers Hand</p>
        <div className="bj-gameboard">
          <div className="player-hand">{playerHand}</div>
          <div className="message">{message}</div>
          <div className="dealer-hand">
            <Card name={currentDealerCards[0].getName()} faceUp={true} />
            <Card name={currentDealerCards[1].getName()} faceUp={false} />
          </div>
        </div>
        <p className="player">Your Hand</p>
      </>
    )
  ) : (
    <>
      <p className="player">Dealers Hand</p>
      <div className="bj-gameboard">
        <div className="player-hand">{playerHand}</div>
        <div className="message">{message}</div>
        <div className="dealer-hand">{dealerHand}</div>
      </div>
      <p className="player">Your Hand</p>
    </>
  );
};

Gameboard.propTypes = {
  currentPlayerCards: PropTypes.array,
  currentDealerCards: PropTypes.array,
  faceUp: PropTypes.bool,
  cardsDealt: PropTypes.bool,
  message: PropTypes.string
};

export default Gameboard;
