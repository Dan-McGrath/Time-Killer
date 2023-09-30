import player from "./player";

describe("player", () => {
  it("should return gameboard with length of 100", () => {
    let player1 = player("Player 1");
    player1.getBlankBoard();
    expect(player1.board.gameboard.length).toBe(100);
  });
});
