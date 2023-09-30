const gameboard = () => {
  let gameboard = [];

  const createGameboard = () => {
    if (gameboard.length === 0) {
      for (let i = 0; i < 100; i++) {
        const square = {
          index: i,
          isOccupied: false,
          isAttacked: false,
        };
        gameboard.push(square);
      }
    } else {
      gameboard = [];
      for (let i = 0; i < 100; i++) {
        const square = {
          index: i,
          isOccupied: false,
          isAttacked: false,
        };
        gameboard.push(square);
      }
    }
  };

  const horizontalBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

  let shipLocations = [];

  const addShipLocation = (ship, axis, index) => {
    //check if ship is already placed
    if (ship.placed === true) {
      shipLocations.forEach((ele) => {
        if (ele.ship.name === ship.name) {
          let i = shipLocations.indexOf(ele);
          shipLocations.splice(i, 1);
          ele.location.forEach((loc) => {
            gameboard[loc].isOccupied = false;
          });
        }
      });
    }

    let location = [];
    if (axis === "x") {
      for (let i = 0; i < ship.size; i++) {
        location.push(index + i);
      }
      // check if ship will exceed horizontal borders
      if (
        horizontalBorder.some((num) => {
          return [num + 1].every((ele) => location.includes(ele));
        })
      ) {
        location = [];
      }
    }

    if (axis === "y") {
      // check if ship will exceed vertical borders
      if (index + (ship.size - 1) * 10 < 101) {
        for (let i = 0; i < ship.size; i++) {
          location.push(index + i * 10);
        }
      }
    }
    //check if ship is already occuping square
    shipLocations.forEach((ele) => {
      ele.location.forEach((n) => {
        location.forEach((loc) => {
          if (n === loc) {
            location = [];
          }
        });
      });
    });
    if (location.length === 0) {
      return false;
    } else {
      location.forEach((loc) => {
        gameboard[loc].isOccupied = true;
      });
      ship.placed = true;
      shipLocations.push({
        ship: ship,
        location: location,
      });
      return location;
    }
  };

  const attack = (index) => {
    if (gameboard[index].isAttacked === true) {
      return false;
    }

    gameboard[index].isAttacked = true;

    if (gameboard[index].isOccupied === true) {
      shipLocations.forEach((ele) => {
        if (ele.location.includes(index)) {
          ele.ship.hit();
        }
      });
      return true;
    }
    return false;
  };

  return { gameboard, shipLocations, addShipLocation, createGameboard, attack };
};

export default gameboard;
