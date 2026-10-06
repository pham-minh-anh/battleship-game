import { Ship } from "../src/ship.js";

let ship = null;
beforeEach(() => {
  ship = new Ship(3);
});

describe("hit", () => {
  test("hit 1", () => {
    expect(ship.hit()).toBe(1);
  });

  test("hit 2", () => {
    ship.hit();
    expect(ship.hit()).toBe(2);
  });

  test("hit 3", () => {
    ship.hit();
    ship.hit();
    expect(ship.hit()).toBe(3);
  });

  test("hit more than length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hit()).toBe(3);
  });
});

describe("isSunk", () => {
  test("sunk 1", () => {
    expect(ship.isSunk()).toBe(false);
  });

  test("sunk 2", () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("sunk 3", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
