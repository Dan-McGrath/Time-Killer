import { useState } from "react";
import Gameboard from "./MemoryGameboard";

const GameManager = () => {
  const [pokemonArray, setPokemonArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  const getNewArray = () => {
    const set = new Set();
    while (set.size < 12) {
      set.add(Math.floor(Math.random() * 150) + 1);
    }
    const arr = Array.from(set);
    setPokemonArray(arr);
    console.log(arr);
  };

  const shuffleCards = (arr) => {
    const newArray = arr.slice(0);
    for (let i = 0; i < newArray.length; i += 1) {
      const randInt = Math.floor(Math.random() * arr.length);
      [newArray[i], newArray[randInt]] = [newArray[randInt], newArray[i]];
    }
    return newArray;
  };

  return (
    <div className="memory-gameboard">
      <Gameboard pokemonArray={pokemonArray} newArrayHandler={getNewArray} />
    </div>
  );
};

export default GameManager;
