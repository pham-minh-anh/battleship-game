import { Player } from "../src/player.js";

let player = null;
beforeEach(() => {
  player = new Player(3);
});

describe("hit", () => {
  test("hit ", () => {
    expect(true).toBe(true);
  });
});
