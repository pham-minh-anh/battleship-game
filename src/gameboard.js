import { Ship } from "../src/ship.js";
import { Coord } from "../src/Coord.js";

class Gameboard {
  constructor(size = 10) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.#board[i] = [];
      for (let j = 0; j < size; j++) {
        this.#board[i][j] = 0;
      }
    }
  }
  #board = [];
  #ships = [];

  readCell(coord) {
    if (!coord.isValid(this.size)) {
      return null;
    }
    return this.#board[coord.y][coord.x];
  }

  availCellCount() {}

  placeShip(length, startCoord, direction) {
    if (length <= 0 || length >= 10) {
      return null;
    } else if (!startCoord.isValid(this.size)) {
      return null;
    }

    const ship = new Ship(length);

    if (direction === "vertical") {
      // Check if each cell is emty
      for (let i = 0; i < length; i++) {
        let coord = new Coord(startCoord.x, startCoord.y + i);
        let cell = this.readCell(coord);
        if (cell === null || cell !== 0) {
          return null;
        }
      }
      for (let i = 0; i < length; i++) {
        this.#board[startCoord.y + i][startCoord.x] = ship;
      }
    } else if (direction === "horizontal") {
      // Check if each cell is emty
      for (let i = 0; i < length; i++) {
        let coord = new Coord(startCoord.x + i, startCoord.y);
        let cell = this.readCell(coord);
        if (cell === null || cell !== 0) {
          return null;
        }
      }
      for (let i = 0; i < length; i++) {
        this.#board[startCoord.y][startCoord.x + i] = ship;
      }
    } else {
      return null;
    }

    this.#ships.push(ship);
    return ship;
  }
}

export { Gameboard };
