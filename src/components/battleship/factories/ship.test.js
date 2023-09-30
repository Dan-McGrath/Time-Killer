import ship from "./ship";

describe("ship", () => {
  test("should return false if ship is not sunk", () => {
    let newShip = ship("test", 2);
    newShip.hit();
    expect(newShip.isSunk()).toBe(false);
  });

  test("should return true if ship is sunk", () => {
    let newShip = ship("test", 1);
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });
});
