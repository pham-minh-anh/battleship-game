import { Player } from "../src/player.js";
import { Coordinates } from "../src/gameboard.js";

describe("player", () => {
  test("random placement places the full fleet legally", () => {
    for (let run = 0; run < 50; run++) {
      const playerTest = new Player();
      playerTest.randomShip([5, 4, 3, 3, 2]);

      let hits = 0;
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (playerTest.gameboard.receiveAttack(new Coordinates(x, y))) {
            hits++;
          }
        }
      }

      expect(hits).toBe(17); // 5+4+3+3+2, so no overlaps or missing ships
      expect(playerTest.gameboard.allSunk()).toBe(true);
    }
  });

  test("computer attacks every cell exactly once", () => {
    const playerTest = new Player();
    const computer = new Player("computer");
    const seen = new Set();

    for (let i = 0; i < 100; i++) {
      const { x, y } = computer.randomAttack(playerTest.gameboard);
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(9);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(9);
      seen.add(`${x},${y}`);
    }

    expect(seen.size).toBe(100);
    expect(computer.randomAttack()).toBeNull(); // or whatever you return when out of moves
  });
});
