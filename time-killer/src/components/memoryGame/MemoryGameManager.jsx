import { useState } from "react";
import Gameboard from "./MemoryGameboard";

const startingArr = [
  { index: 0, pokemon: 1 },
  { index: 1, pokemon: 2 },
  { index: 2, pokemon: 3 },
  { index: 3, pokemon: 4 },
  { index: 4, pokemon: 5 },
  { index: 5, pokemon: 6 },
  { index: 6, pokemon: 7 },
  { index: 7, pokemon: 8 },
  { index: 8, pokemon: 9 },
  { index: 9, pokemon: 10 },
  { index: 10, pokemon: 11 },
  { index: 11, pokemon: 12 },
];

const GameManager = () => {
  const [pokemonArray, setPokemonArray] = useState(startingArr);

  const getNewArray = () => {
    let fullArray;
    const set = new Set();
    while (set.size < 12) {
      set.add(Math.floor(Math.random() * 150) + 1);
    }

    const arr = Array.from(set);
    fullArray = arr;
    fullArray.forEach((ele) => fullArray.push(ele));
    for (let i = 0; i < fullArray.length; i++) {
      fullArray[i] = { index: i, pokemon: fullArray[i] };
    }
    console.log(fullArray);
    setPokemonArray(fullArray);
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
    <Gameboard pokemonArray={pokemonArray} newArrayHandler={getNewArray} />
  );
};

export default GameManager;
