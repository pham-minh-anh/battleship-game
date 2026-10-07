import { Gameboard } from "../src/gameboard.js";
import { Coord } from "../src/coord.js";

let gameboard = null;
beforeEach(() => {
  gameboard = new Gameboard();
});

describe("placeShip", () => {
  test("invalid length 0", () => {
    expect(gameboard.placeShip(0, new Coord(0, 0), "vertical")).toBe(null);
    expect(gameboard.placeShip(10, new Coord(0, 0), "vertical")).toBe(null);
  });

  test("invalid start coord", () => {
    expect(gameboard.placeShip(3, new Coord(10, 0), "vertical")).toBe(null);
    expect(gameboard.placeShip(4, new Coord(0, 10), "vertical")).toBe(null);
  });

  test("invalid direction", () => {
    expect(gameboard.placeShip(3, new Coord(3, 0), "abc")).toBe(null);
  });

  test("overlaping start coord with existing ship", () => {
    gameboard.placeShip(3, new Coord(0, 0), "vertical");
    expect(gameboard.placeShip(3, new Coord(0, 0), "horizontal")).toBe(null);
  });

  test("overlaping coord with existing ship", () => {
    gameboard.placeShip(3, new Coord(3, 0), "vertical");
    expect(gameboard.placeShip(3, new Coord(1, 1), "horizontal")).toBe(null);
  });

  test("length + coord out of bounds", () => {
    expect(gameboard.placeShip(3, new Coord(8, 1), "horizontal")).toBe(null);
    expect(gameboard.placeShip(3, new Coord(1, 8), "vertical")).toBe(null);
  });

  test("valid ship length 3 vetical", () => {
    let ship = gameboard.placeShip(3, new Coord(0, 1), "horizontal");
    expect(ship.length).toBe(3);
  });

  test("valid ship length 3 horizontal", () => {
    let ship = gameboard.placeShip(3, new Coord(0, 1), "vertical");
    expect(ship.length).toBe(3);
  });
});
