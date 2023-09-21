const card = (suit, value, name) => {
  const newSuit = suit;
  let newValue = Number(value);
  const newName = name;

  const getSuit = () => newSuit;

  const getValue = () => newValue;

  const getName = () => `${newName} of ${newSuit}`;

  const changeValue = () => {
    if (getValue() === 11) {
      newValue = Number(1);
    } else if (getValue() === 1) {
      newValue = Number(11);
    }
    return;
  };

  return { getName, getSuit, getValue, changeValue };
};

export default card;
