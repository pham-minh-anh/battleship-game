import { Ship } from "./ship";

class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Gameboard {
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.#board[i] = [];
      // Initialize an empty board
      for (let j = 0; j < 10; j++) {
        this.#board[i][j] = 0;
      }
    }
  }
  #board = [];
  #ships = [];

  placeShip(length, startCoord, direction) {
    // Input validate
    if (length <= 0 || length > 10) {
      return null;
    } else if (this.#board[startCoord.y][startCoord.x] !== 0) {
      return null;
    }
    ship = new Ship(length);

    if (direction === "vertical") {
      for (let i = 0; i < length; i++) {
        if (startCoord.y + i < 0 || startCoord.y + i >= 10) {
          return null;
        }
        if (this.#board[startCoord.y + i][startCoord.x] !== 0) {
          return null;
        }
      }

      for (let i = 0; i < length; i++) {
        this.#board[startCoord.y + i][startCoord.x] = ship;
      }
    } else if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        if (startCoord.x + i < 0 || startCoord.x + i >= 10) {
          return null;
        }
        if (this.#board[startCoord.y][startCoord.x + i] !== 0) {
          return null;
        }
      }

      for (let i = 0; i < length; i++) {
        this.#board[startCoord.y][startCoord.x + i] = ship;
      }
    }
    this.#ships.push(ship);
    return ship;
  }
  receiveAttack(coord) {
    let ship = this.#board[coord.y][coord.x];
    if (ship === 0) {
      this.#board[coord.y][coord.x] = 1;
      return false;
    } else if (ship === 1 || ship === 2) {
      return null;
    } else {
      ship.hit();
      this.#board[coord.y][coord.x] = 2;
      return true;
    }
  }

  // gameboard.js
  isAttacked(coord) {
    const cell = this.#board[coord.y][coord.x];
    return cell === 1 || cell === 2;
  }

  allSunk() {
    for (ship of this.#ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}

export { Coordinates, Gameboard };
