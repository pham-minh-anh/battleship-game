import { Coordinates, Gameboard } from "../src/gameboard.js";

describe("receiveAttack & placeShip", () => {
  let gameboard = new Gameboard();
  test("empty board", () => {
    expect(gameboard.receiveAttack(new Coordinates(0, 0))).toBe(false);
  });

  test("ship hitted", () => {
    gameboard.placeShip(3, new Coordinates(0, 0), "vertical");
    expect(gameboard.receiveAttack(new Coordinates(0, 0))).toBe(true);
  });

  test("ship hitted again same spot", () => {
    expect(gameboard.receiveAttack(new Coordinates(0, 0))).toBe(null);
  });

  test("1 ship not hitted", () => {
    expect(gameboard.receiveAttack(new Coordinates(9, 0))).toBe(false);
  });

  test("new ship overlap, not hitted same spot", () => {
    gameboard.placeShip(3, new Coordinates(0, 0), "horizontal");
    expect(gameboard.receiveAttack(new Coordinates(0, 0))).toBe(null);
  });

  test("new ship overlap, not hitted", () => {
    gameboard.placeShip(3, new Coordinates(3, 3), "horizontal");
    gameboard.receiveAttack(new Coordinates(3, 3));
    gameboard.placeShip(3, new Coordinates(3, 1), "vertical");
    expect(gameboard.receiveAttack(new Coordinates(3, 3))).toBe(null);
  });

  test("new ship overlap, not hitted", () => {
    gameboard.placeShip(3, new Coordinates(2, 3), "horizontal");
    expect(gameboard.receiveAttack(new Coordinates(2, 3))).toBe(false);
  });

  test("new ship not overlap, hitted", () => {
    gameboard.placeShip(3, new Coordinates(1, 0), "horizontal");
    expect(gameboard.receiveAttack(new Coordinates(2, 0))).toBe(true);
  });

  test("ship length out of bound, not hitted", () => {
    gameboard.placeShip(3, new Coordinates(8, 0), "horizontal");
    expect(gameboard.receiveAttack(new Coordinates(8, 0))).toBe(false);
  });
});

describe("allSunk", () => {
  let gameboard = new Gameboard();
  test("1 ship3 1 hit", () => {
    gameboard.placeShip(3, new Coordinates(0, 0), "vertical");
    gameboard.receiveAttack(new Coordinates(0, 0));
    expect(gameboard.allSunk()).toBe(false);
  });

  test("1 ship3 2 hit", () => {
    gameboard.receiveAttack(new Coordinates(0, 1));
    expect(gameboard.allSunk()).toBe(false);
  });

  test("1 ship3 3 hit", () => {
    gameboard.receiveAttack(new Coordinates(0, 2));
    expect(gameboard.allSunk()).toBe(true);
  });
});
