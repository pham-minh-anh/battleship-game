import { Gameboard } from "../src/gameboard.js";

let gameboard = null;
beforeEach(() => {
  gameboard = new Gameboard(3);
});

describe("hit", () => {
  test("hit ", () => {
    expect(true).toBe(true);
  });
});
