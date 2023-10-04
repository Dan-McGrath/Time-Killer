import { useState } from "react";
import Gameboard from "./MemoryGameboard";
import Button from "../Button";

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
  const [active, setActive] = useState(false);
  const [faceDown, setFaceDown] = useState(false);
  const [matches, setMatches] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
      fullArray[i] = {
        index: i,
        pokemon: fullArray[i],
        selected: false,
        matched: false,
      };
    }
    return setPokemonArray(fullArray);
  };

  const checkMatch = () => {
    let matchesArr = [];
    pokemonArray.forEach((ele) => {
      if (ele.selected === true) {
        matchesArr.push(ele);
      }
    });
    let firstEle = pokemonArray.indexOf(matchesArr[0]);
    let secondEle = pokemonArray.indexOf(matchesArr[1]);
    if (matchesArr[0].pokemon === matchesArr[1].pokemon) {
      pokemonArray[firstEle].matched = true;
      pokemonArray[secondEle].matched = true;
      setMatches(matches + 1);
      setPokemonArray([...pokemonArray]);
    } else {
      setMistakes(mistakes + 1);
    }
    pokemonArray[firstEle].selected = false;
    pokemonArray[secondEle].selected = false;
    setPokemonArray([...pokemonArray]);
  };

  const selectHandler = (e) => {
    let tempIndex = Number(e.currentTarget.dataset.index);
    let isSelected;
    pokemonArray.forEach((ele) => {
      if (ele.index === tempIndex) {
        isSelected = ele;
      }
    });

    let count = 0;
    let index = pokemonArray.indexOf(isSelected);

    if (pokemonArray[index].matched === true) {
      return;
    }
    if (pokemonArray[index].selected === true) {
      pokemonArray[index].selected = false;
      setPokemonArray([...pokemonArray]);
      return;
    }
    pokemonArray[index].selected = true;
    setPokemonArray([...pokemonArray]);

    pokemonArray.forEach((ele) => {
      if (ele.selected === true) {
        count += 1;
      }
    });

    if (count === 2) {
      setTimeout(() => {
        checkMatch();
      }, 500);

      return;
    }
  };

  const startHandler = () => {
    if (pokemonArray.length > 12) {
      setPokemonArray(shuffleCards(pokemonArray));
      setTimeout(() => {
        setActive(true);
        setFaceDown(true);
      }, 2500);
    }
    return;
  };

  const shuffleCards = (arr) => {
    const newArray = arr.slice(0);
    for (let i = 0; i < newArray.length; i += 1) {
      const randInt = Math.floor(Math.random() * arr.length);
      [newArray[i], newArray[randInt]] = [newArray[randInt], newArray[i]];
    }
    return newArray;
  };

  const resetHandler = () => {
    if (matches === 12) {
      if (bestScore === 0 || mistakes < bestScore) {
        setBestScore(mistakes);
      }
    }
    setMistakes(0);
    setMatches(0);
    setActive(false);
  };

  return active ? (
    <>
      <div className="score">
        <p>Matches: {matches}/12</p>
        <p>Mistakes: {mistakes}</p>
        <p>Top Score: {bestScore}</p>
      </div>
      <Gameboard
        pokemonArray={pokemonArray}
        faceDown={faceDown}
        selected={selectHandler}
      />
      <div className="player-btns">
        <Button text="Reset" clickHandler={resetHandler} />
      </div>
    </>
  ) : (
    <>
      <div className="score">
        <p>Top Score: {bestScore}</p>
      </div>
      <Gameboard
        pokemonArray={pokemonArray}
        handler={getNewArray}
        startHandler={startHandler}
      />
      <div className="player-btns">
        <Button text="Get Cards" clickHandler={getNewArray} />
        <Button text="Start" clickHandler={startHandler} />
      </div>
    </>
  );
};

export default GameManager;
