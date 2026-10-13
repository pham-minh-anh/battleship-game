import { Coord } from "./Coord.js";
import { Gameboard, EMTY, HIT, MISSED } from "./gameboard.js";

class Player {
  constructor(name) {
    this.name = name;
  }

  gameboard = new Gameboard();

  static randomAttack(player) {
    // Generate a random hitable coord
    let coord;
    while (true) {
      coord = Coord.random(player.gameboard.size);
      if (!(
        player.gameboard.readCell(coord) == HIT ||
        player.gameboard.readCell(coord) == MISSED
      )) {
        break;
      }
      if (player.gameboard.hitableCellCount() === 0) {
        return null;
      }
    }
    // hit the coord
    let status = player.gameboard.receiveAttack(coord);
    return coord;
  }
}

export { Player };
