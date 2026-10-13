import { Player } from "../src/player.js";
import { Coord } from "../src/coord.js";
import { Gameboard, EMTY, HIT, MISSED } from "../src/gameboard.js";

describe("randomAttack", () => {
  let target;

  beforeEach(() => {
    target = new Player();
  });

  test("attacks every cell exactly once, all in bounds", () => {
    const seen = new Set();

    for (let i = 0; i < 100; i++) {
      const { x, y } = Player.randomAttack(target);
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(10);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThan(10);
      seen.add(`${x},${y}`);
    }

    expect(seen.size).toBe(100);
  });

  test("returns null when no cells are left", () => {
    for (let i = 0; i < 100; i++) Player.randomAttack(target);
    expect(Player.randomAttack(target)).toBeNull();
  });

  test("actually attacks the board", () => {
    const { x, y } = Player.randomAttack(target);
    expect([MISSED, HIT]).toContain(target.gameboard.readCell(new Coord(x, y)));
  });

  test("sinks every ship after attacking all cells", () => {
    target.gameboard.placeShip(3, new Coord(0, 0), "vertical");
    target.gameboard.placeShip(2, new Coord(5, 5), "horizontal");

    for (let i = 0; i < 100; i++) Player.randomAttack(target);

    expect(target.gameboard.allSunk()).toBe(true);
  });
});
