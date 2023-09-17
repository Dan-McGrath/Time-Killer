import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = ({
  pokemon,
  faceDown,
  index,
  isSelected,
  isMatched,
  selected,
}) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
      );
      const data = await response.json();
      setPokemonImg(data.sprites.front_default);
      let captilizedName =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);
      setPokemonName(captilizedName);
    };
    fetchPokemon();
  }, [pokemon]);

  if (faceDown === false) {
    return (
      <div className="card faceup">
        <img src={pokemonImg} alt={pokemonName} />
        <p>{pokemonName}</p>
      </div>
    );
  }
  if (faceDown && isMatched) {
    return (
      <div className="card faceup" data-index={index}>
        <img src={pokemonImg} alt={pokemonName} />
        <p>{pokemonName}</p>
      </div>
    );
  }

  return faceDown ? (
    isSelected ? (
      <div className="card faceup" onClick={selected} data-index={index}>
        <img src={pokemonImg} alt={pokemonName} />
        <p>{pokemonName}</p>
      </div>
    ) : (
      <div
        className="card facedown"
        onClick={selected}
        data-index={index}
      ></div>
    )
  ) : (
    <div className="card faceup" onClick={selected} data-index={index}>
      <img src={pokemonImg} alt={pokemonName} />
      <p>{pokemonName}</p>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.number,
  active: PropTypes.bool,
  faceDown: PropTypes.bool,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  isMatched: PropTypes.bool,
  selected: PropTypes.func,
};

export default Card;
