import PropTypes from "prop-types";
import Card from "./Card";

const Gameboard = ({ currentDeck }) => {
  let deck = currentDeck.map((ele) => (
    <Card
      key={`${ele.getName()} of ${ele.getSuit()}`}
      name={ele.getName()}
      suit={ele.getSuit()}
    />
  ));
  return <div className="gameboard">{deck}</div>;
};

Gameboard.propTypes = {
  currentDeck: PropTypes.array,
};

export default Gameboard;
