import PropTypes from "prop-types";
import Card from "./memoryCard";

const Gameboard = ({ pokemonArray, faceDown, selected }) => {
  let cardArray = pokemonArray.map((ele) => (
    <Card
      key={ele.index}
      pokemon={ele.pokemon}
      faceDown={faceDown}
      pokemonArray={pokemonArray}
      index={ele.index}
      isSelected={ele.selected}
      isMatched={ele.matched}
      selected={selected}
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
  selected: PropTypes.func,
};

export default Gameboard;
