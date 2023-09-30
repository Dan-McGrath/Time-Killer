const ship = (newName, newSize) => {
  const name = newName;
  const size = newSize;
  let numberOfHits = 0;
  let placed = false;

  const isSunk = () => {
    return numberOfHits >= size ? true : false;
  };

  const hit = () => (numberOfHits += 1);

  return { name, size, placed, isSunk, hit };
};

export default ship;
