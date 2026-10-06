import { Ship } from "../src/ship.js";

describe("increment hits", () => {
  let ship = new Ship(3);
  test("1 hits", () => {
    expect(ship.hit()).toBe(1);
  });
  test("2 hits", () => {
    expect(ship.hit()).toBe(2);
  });
  test("3 hits", () => {
    expect(ship.hit()).toBe(3);
  });
});

describe("isSunk", () => {
  let ship = new Ship(3);
  beforeEach(() => {
    ship.hit();
  });
  test("1 hits", () => {
    expect(ship.isSunk()).toBe(false);
  });
  test("2 hits", () => {
    expect(ship.isSunk()).toBe(false);
  });
  test("3 hits", () => {
    expect(ship.isSunk()).toBe(true);
  });
});
