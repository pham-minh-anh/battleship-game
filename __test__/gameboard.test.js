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

describe("placeShipRand", () => {
  test("random placement places the full fleet legally", () => {
    for (let run = 0; run < 50; run++) {
      gameboard = new Gameboard();
      gameboard.placeShipRand([5, 4, 3, 3, 2]);

      let hits = 0;
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (gameboard.receiveAttack(new Coord(x, y))) hits++;
        }
      }

      expect(hits).toBe(17);
      expect(gameboard.allSunk()).toBe(true);
    }
  });
});

describe("recieveAttach", () => {
  test("hit", () => {
    gameboard.placeShip(3, new Coord(0, 0), "vertical");
    expect(gameboard.receiveAttack(new Coord(0, 0))).toBe(true);
  });

  test("miss", () => {
    gameboard.placeShip(3, new Coord(0, 0), "vertical");
    expect(gameboard.receiveAttack(new Coord(4, 0))).toBe(false);
  });

  test("null", () => {
    gameboard.placeShip(3, new Coord(0, 0), "vertical");
    gameboard.receiveAttack(new Coord(4, 0));
    expect(gameboard.receiveAttack(new Coord(4, 0))).toBe(null);
  });
});

describe("allSunk", () => {
  test("true", () => {
    gameboard.placeShip(3, new Coord(0, 0), "vertical");
    gameboard.receiveAttack(new Coord(0, 0));
    gameboard.receiveAttack(new Coord(0, 1));
    gameboard.receiveAttack(new Coord(0, 2));
    expect(gameboard.allSunk()).toBe(true);
  });
});
