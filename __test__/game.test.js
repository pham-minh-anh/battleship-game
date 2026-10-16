import {
  reset,
  placeRandomShip,
  playOneTurn,
  getWinner,
  viewBoard,
  viewBoardEnemy,
  getCurrentTarget,
  getCurrentPlayer,
  Status,
} from "../src/game.js";
import { EMTY, MISSED, HIT } from "../src/gameboard.js";

const FLEET_CELLS = 3 + 2 + 1 + 1;

const isAttacked = (cell) => cell === MISSED || cell === HIT;
const countShipCells = (index) =>
  viewBoard(index)
    .flat()
    .filter((cell) => cell !== EMTY).length;

beforeEach(() => {
  reset("Alice", "Bob");
});

describe("reset", () => {
  test("starts with player 0 attacking player 1 and no winner", () => {
    expect(getCurrentPlayer()).toBe(0);
    expect(getCurrentTarget()).toBe(1);
    expect(getWinner()).toBeNull();
  });

  test("starts with both boards empty", () => {
    expect(countShipCells(0)).toBe(0);
    expect(countShipCells(1)).toBe(0);
  });

  test("ignores attacks before ships are placed", () => {
    expect(playOneTurn(0, 0)).toBeUndefined();
    expect(getCurrentPlayer()).toBe(0);
  });
});

describe("placeRandomShip", () => {
  test("places the fleet on both boards", () => {
    placeRandomShip();
    expect(countShipCells(0)).toBe(FLEET_CELLS);
    expect(countShipCells(1)).toBe(FLEET_CELLS);
  });

  test("only places the fleet once per game", () => {
    placeRandomShip();
    placeRandomShip();
    expect(countShipCells(0)).toBe(FLEET_CELLS);
    expect(countShipCells(1)).toBe(FLEET_CELLS);
  });
});

describe("playOneTurn", () => {
  beforeEach(() => {
    placeRandomShip();
  });

  test("valid attack returns VALID and marks the chosen cell", () => {
    expect(playOneTurn(4, 6)).toBe(Status.VALID);
    expect(isAttacked(viewBoard(1)[6][4])).toBe(true);
  });

  test("valid attack switches turns", () => {
    playOneTurn(0, 0);
    expect(getCurrentPlayer()).toBe(1);
    expect(getCurrentTarget()).toBe(0);
  });

  test("out-of-bounds attack returns INVALID and keeps the turn", () => {
    expect(playOneTurn(10, 0)).toBe(Status.INVALID);
    expect(getCurrentPlayer()).toBe(0);
  });

  test("repeat attack on the same cell returns INVALID and keeps the turn", () => {
    playOneTurn(0, 0); // player 0 -> board 1
    playOneTurn(5, 5); // player 1 -> board 0
    expect(playOneTurn(0, 0)).toBe(Status.INVALID);
    expect(getCurrentPlayer()).toBe(0);
  });

  test("game ends with a named winner, then rejects moves", () => {
    outer: for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        playOneTurn(x, y); // player 0's move
        if (getWinner() !== null) break outer;
        playOneTurn(x, y); // player 1's move
        if (getWinner() !== null) break outer;
      }
    }

    expect(["Alice", "Bob"]).toContain(getWinner().name);
    expect(playOneTurn(9, 9)).toBe(Status.GAMEOVER);
  });
});

describe("views", () => {
  beforeEach(() => {
    placeRandomShip();
  });

  test("enemy view hides ships", () => {
    const cells = viewBoardEnemy(1).flat();
    expect(cells.every((cell) => cell === EMTY)).toBe(true);
  });

  test("enemy view still shows attacks", () => {
    playOneTurn(2, 3);
    expect(isAttacked(viewBoardEnemy(1)[3][2])).toBe(true);
  });
});
