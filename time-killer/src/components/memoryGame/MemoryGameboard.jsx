import PropTypes from "prop-types";
import Card from "./memoryCard";
import Button from "../Button";
const Gameboard = ({ pokemonArray, newArrayHandler }) => {
  let cardArray = pokemonArray.map((ele) => (
    <Card key={ele.index} index={ele.pokemon} />
  ));

  return (
    <>
      <div className="memory-gameboard">{cardArray}</div>
      <Button text="Get Cards" clickHandler={newArrayHandler} />
    </>
  );
};
Gameboard.propTypes = {
  pokemonArray: PropTypes.array,
  newArrayHandler: PropTypes.func,
};

export default Gameboard;
