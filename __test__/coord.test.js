import { Coord } from "../src/Coord.js";

let coord = null;
beforeEach(() => {
  coord = new Coord(3);
});

describe("random coord", () => {
  test("size = 0", () => {
    expect(Coord.random(0)).toBe(null);
  });
  test("size = 10", () => {
    let returnCoord = Coord.random(10);
    expect(returnCoord.x >= 0 && returnCoord.x < 10).toBe(true);
    expect(returnCoord.y >= 0 && returnCoord.y < 10).toBe(true);
  });
});
