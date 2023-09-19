const card = (suit, value, name) => {
  const newSuit = suit;
  const newValue = value;
  const newName = name;

  const getSuit = () => newSuit;

  const getValue = () => newValue;

  const getName = () => newName;

  return { getName, getSuit, getValue };
};

export default card;
