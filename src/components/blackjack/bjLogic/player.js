const player = (name) => {
  let newName = name;
  let hand = [];

  const getHand = () => hand;
  const discardHand = () => (hand = []);
  const addCardToHand = (card) => {
    getHand().push(card);
  };

  const addScore = () => {
    let score = 0;
    getHand().forEach((ele) => {
      score += ele.getValue();
    });
    return score;
  };

  const changeAceValue = () => {
    hand.forEach((ele) => {
      if (ele.getName() === "Ace") {
        ele.changeValue();
      }
    });
  };

  return {
    newName,
    getHand,
    discardHand,
    addCardToHand,
    changeAceValue,
    addScore,
  };
};

export default player;
