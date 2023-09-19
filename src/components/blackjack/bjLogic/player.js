const player = (name) => {
  let newName = name;
  let hand = [];
  let score = 0;

  const getHand = () => hand;
  const discardHand = () => (hand = []);
  const addCardToHand = (card) => {
    getHand().push(card);
  };

  const addScore = () => {
    getHand().forEach((ele) => {
      score += ele.getValue();
    });
  };

  const getScore = () => score;

  const changeAceValue = () => {
    hand.forEach((ele) => {
      if (ele.getName() === "Ace") {
        ele.changeValue();
      }
    });
  };

  return {
    newName,
    getScore,
    getHand,
    discardHand,
    addCardToHand,
    changeAceValue,
    addScore,
  };
};

export default player;
