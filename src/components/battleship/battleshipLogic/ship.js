const ship = (length, name) => {
  let numberOfHits = 0;
  const getNumberofHits = () => numberOfHits;
  const getName = () => name;
  const getLength = () => length;

  const isSunk = () => {
    if (numberOfHits >= getLength()) {
      return true;
    }
    return false;
  };

  const hit = () => {
    numberOfHits++;
    return numberOfHits;
  };

  return { hit, isSunk, getLength, getName, getNumberofHits };
};

export default ship;
