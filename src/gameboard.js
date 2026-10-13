import { Ship } from "../src/ship.js";
import { Coord } from "../src/Coord.js";

const EMTY = 0;
const MISSED = 1;
const HIT = 2;
const SHIP = 3;

class Gameboard {
  constructor(size = 10) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.#board[i] = [];
      for (let j = 0; j < size; j++) {
        this.#board[i][j] = EMTY;
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

  hitableCellCount() {
    let count = 0;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (!(
          this.readCell(new Coord(i, j)) == HIT ||
          this.readCell(new Coord(i, j)) == MISSED
        )) {
          count++;
        }
      }
    }
    return count;
  }

  checkShipAvail(length, startCoord, direction) {
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
        if (cell === null || cell !== EMTY) {
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
        if (cell === null || cell !== EMTY) {
          return null;
        }
      }
      for (let i = 0; i < length; i++) {
        this.#board[startCoord.y][startCoord.x + i] = ship;
      }
    } else {
      return null;
    }
    return ship;
  }

  placeShip(length, startCoord, direction) {
    let ship = this.checkShipAvail(length, startCoord, direction);
    if (ship !== null) {
      this.#ships.push(ship);
    }
    return ship;
  }

  placeShipRand(lengths) {
    let ship = null;
    let attempt = 0;
    let ships = [];
    let coords = [];
    let coord;
    const directions = ["vertical", "horizontal"];
    for (let len of lengths) {
      while (ship === null) {
        coord = Coord.random(this.size);

        ship = this.checkShipAvail(
          len,
          coord,
          directions[Math.floor(Math.random() * 2)],
        );
        attempt++;
        if (attempt >= 100) {
          return -1;
        }
      }
      ships.push(ship);
      coords.push(coord);
      ship = null;
      attempt = 0;
    }

    for (ship of ships) {
      this.#ships.push(ship);
    }
  }

  receiveAttack(coord) {
    let cell = this.readCell(coord);
    if (cell === null || cell === MISSED || cell === HIT) {
      return null;
    } else if (cell === EMTY) {
      this.#board[coord.y][coord.x] = MISSED;
      return false;
    } else {
      this.#board[coord.y][coord.x].hit();
      this.#board[coord.y][coord.x] = HIT;
      return true;
    }
  }

  allSunk() {
    for (let ship of this.#ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}

export { Gameboard, EMTY, HIT, MISSED, SHIP };
