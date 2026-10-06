import { Coordinates, Gameboard } from "./gameboard.js";

class Player {
  constructor(name = "computer") {
    this.name = name;
  }
  gameboard = new Gameboard();

  hasLost() {
    return this.gameboard.allSunk();
  }

  randomShip(lengths) {
    let arr = ["vertical", "horizontal"];
    let x;
    let y;
    let direction;
    let coord;
    let status = null;
    for (let length of lengths) {
      status = null;
      while (status === null) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        direction = Math.floor(Math.random() * 2);
        coord = new Coordinates(x, y);
        status = this.gameboard.placeShip(length, coord, arr[direction]);
      }
    }
  }

  randomAttack(board) {
    let status = null;
    let x;
    let y;
    let availableMoves = 0;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (!board.isAttacked(new Coordinates(i, j))) {
          availableMoves++;
        }
      }
    }

    if (availableMoves === 0) {
      return null;
    }

    while (status === null) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      status = board.receiveAttack(new Coordinates(x, y));
    }
    return { x, y };
  }
}

export { Player };
