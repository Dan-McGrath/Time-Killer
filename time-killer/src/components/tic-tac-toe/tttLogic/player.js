const Player = (name, token, activeAi = false, playerMoves = []) => {
  const player = {
    name: name,
    token: token,
    playerMoves: playerMoves,
    activeAi: activeAi,
  };
  return player;
};

export default Player;
