import PropTypes from "prop-types";
import Card from "./Card";

const Gameboard = ({ currentDeck, faceUp }) => {
  let deck = currentDeck.map((ele) => (
    <Card
      key={`${ele.getName()} of ${ele.getSuit()}`}
      name={ele.getName()}
      suit={ele.getSuit()}
      faceUp={faceUp}
    />
  ));
  return <div className="gameboard">{deck}</div>;
};

Gameboard.propTypes = {
  currentDeck: PropTypes.array,
  faceUp: PropTypes.bool,
};

export default Gameboard;
