import PropTypes from "prop-types";
import Card from "./memoryCard";

const Gameboard = ({ pokemonArray, active, faceDown }) => {
  let cardArray = pokemonArray.map((ele) => (
    <Card
      key={ele.index}
      index={ele.pokemon}
      isActive={active}
      faceDown={faceDown}
    />
  ));

  return (
    <>
      <div className="memory-gameboard">{cardArray}</div>
    </>
  );
};
Gameboard.propTypes = {
  pokemonArray: PropTypes.array,
  active: PropTypes.bool,
  faceDown: PropTypes.bool,
};

export default Gameboard;
