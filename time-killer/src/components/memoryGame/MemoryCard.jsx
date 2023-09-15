import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = ({ index }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");
  const [selected, setSelected] = useState(false);
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}/`,
      );
      const data = await response.json();
      setPokemonImg(data.sprites.front_default);
      let captilizedName =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);
      setPokemonName(captilizedName);
    };
    fetchPokemon();
  }, [index]);

  const selectedHandler = () => {
    setSelected(!selected);
  };

  return selected ? (
    <div className="card faceup" onClick={selectedHandler}>
      <img src={pokemonImg} alt={pokemonName} />
      <p>{pokemonName}</p>
    </div>
  ) : (
    <div className="card facedown" onClick={selectedHandler}></div>
  );
};

Card.propTypes = {
  index: PropTypes.number,
};

export default Card;
