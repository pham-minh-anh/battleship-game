import {
  reset,
  playOneTurn,
  getWinner,
  viewBoard,
  viewBoardEnemy,
  getCurrentTarget,
  getCurrentPlayer,
  Status,
} from "../src/game.js";
import { Coord } from "../src/coord.js";
import { EMTY, MISSED, HIT } from "../src/gameboard.js";

const isAttacked = (cell) => cell === MISSED || cell === HIT;

beforeEach(() => {
  reset();
});

describe("reset", () => {
  test("starts with player 0 attacking player 1", () => {
    expect(getCurrentPlayer()).toBe(0);
    expect(getCurrentTarget()).toBe(1);
    expect(getWinner()).toBeNull();
  });

  test("places the fleet (3+2+1+1 = 7 cells) on both boards", () => {
    for (const index of [0, 1]) {
      const shipCells = viewBoard(index)
        .flat()
        .filter((cell) => cell !== EMTY);
      expect(shipCells.length).toBe(7);
    }
  });
});

describe("playOneTurn", () => {
  test("valid attack returns VALID and hits the chosen cell", () => {
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

  test("repeat attack on the same cell returns INVALID", () => {
    playOneTurn(0, 0); // player 0 → board 1
    playOneTurn(5, 5); // player 1 → board 0
    expect(playOneTurn(0, 0)).toBe(Status.INVALID);
    expect(getCurrentPlayer()).toBe(0);
  });

  test("game ends with a winner, then rejects moves", () => {
    outer: for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        playOneTurn(x, y); // player 0's move
        if (getWinner() !== null) break outer;
        playOneTurn(x, y); // player 1's move
        if (getWinner() !== null) break outer;
      }
    }

    expect(getWinner()).not.toBeNull();
    expect(playOneTurn(9, 9)).toBe(Status.GAMEOVER);
  });
});

describe("views", () => {
  test("enemy view hides ships", () => {
    const cells = viewBoardEnemy(1).flat();
    expect(cells.every((cell) => cell === EMTY)).toBe(true);
  });

  test("enemy view still shows attacks", () => {
    playOneTurn(2, 3);
    expect(isAttacked(viewBoardEnemy(1)[3][2])).toBe(true);
  });
});
