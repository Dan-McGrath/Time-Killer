import gameboard from "./gameboard";
import ship from "./ship";

describe("gameboard", () => {
  it("should create gameboard with length of 100", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    expect(newGameboard.gameboard.length).toBe(100);
  });

  it("should return location of ship at [10, 11, 12, 13]", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 4);
    newGameboard.addShipLocation(newShip, "x", 10);
    expect(newGameboard.shipLocations[0].location).toEqual([10, 11, 12, 13]);
  });

  it("should return location of ship at [0, 10, 20, 30]", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 4);
    newGameboard.addShipLocation(newShip, "y", 0);
    expect(newGameboard.shipLocations[0].location).toEqual([0, 10, 20, 30]);
  });

  it("should return false if ship is outside of border on x-axis", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 4);
    expect(newGameboard.addShipLocation(newShip, "x", 37)).toEqual(false);
  });

  it("should return false if ship is outside of border on y-axis", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 4);
    expect(newGameboard.addShipLocation(newShip, "y", 79)).toEqual(false);
  });

  it("should return false if location is occupied", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 4);
    let otherShip = ship("ship2, 4");
    newGameboard.addShipLocation(newShip, "y", 0);
    expect(newGameboard.addShipLocation(otherShip, "x", 0)).toEqual(false);
  });

  it("should return false if attack misses", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 4);
    newGameboard.addShipLocation(newShip, "x", 0);
    expect(newGameboard.attack(10)).toBe(false);
  });

  it("should return true if attack hits", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 1);
    newGameboard.addShipLocation(newShip, "x", 0);
    expect(newGameboard.attack(0)).toBe(true);
  });

  it("should return false if square has already been attacked", () => {
    const newGameboard = gameboard();
    newGameboard.createGameboard();
    let newShip = ship("ship", 2);
    newGameboard.attack(0);
    newGameboard.addShipLocation(newShip, "x", 0);
    expect(newGameboard.attack(0)).toBe(false);
  });
});
