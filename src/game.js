import { Player } from "./player.js";
import { Gameboard, EMTY, HIT, MISSED, SHIP } from "./gameboard.js";
import { Coord } from "./Coord.js";

let players = [];
let current_target = 1;
let game_over = false;
let winner = null;
let ship_placed = false;

function reset(player1, player2) {
  current_target = 1;
  game_over = false;
  winner = null;
  ship_placed = false;
  players[0] = new Player(player1);
  players[1] = new Player(player2);
}

function placeRandomShip() {
  if (ship_placed == true) {
    return;
  }
  ship_placed = true;
  players[0].gameboard.placeShipRand([3, 2, 1, 1]);
  players[1].gameboard.placeShipRand([3, 2, 1, 1]);
}

const Status = Object.freeze({
  GAMEOVER: "PENDING",
  INVALID: "SUCCESS",
  VALID: "FAILED",
});

function playOneTurn(x, y) {
  if (ship_placed == false) {
    return;
  }
  let coord = new Coord(x, y);
  if (game_over) {
    return Status.GAMEOVER;
  }
  let attack = players[current_target].gameboard.receiveAttack(coord);
  if (attack === null) {
    return Status.INVALID;
  }
  if (!checkWin()) {
    current_target = (current_target + 1) % 2;
  }
  return Status.VALID;
}

function checkWin() {
  if (players[current_target].gameboard.allSunk()) {
    game_over = true;
    winner = players[(current_target + 1) % 2];
    return true;
  } else {
    return false;
  }
}

function getWinner() {
  return winner;
}

function viewBoard(playerIndex) {
  let board = [];
  for (let i = 0; i < players[0].gameboard.size; i++) {
    board[i] = [];
    for (let j = 0; j < players[0].gameboard.size; j++) {
      board[i][j] = players[playerIndex].gameboard.readCell(new Coord(j, i));
    }
  }
  return board;
}

function viewBoardEnemy(enemyIndex) {
  let board = [];
  for (let i = 0; i < players[0].gameboard.size; i++) {
    board[i] = [];
    for (let j = 0; j < players[0].gameboard.size; j++) {
      let cell = players[enemyIndex].gameboard.readCell(new Coord(j, i));
      if (cell === SHIP) {
        cell = EMTY;
      }
      board[i][j] = cell;
    }
  }
  return board;
}

function getCurrentTarget() {
  return current_target;
}

function getCurrentPlayer() {
  return current_target === 0 ? 1 : 0;
}

export {
  reset,
  placeRandomShip,
  playOneTurn,
  getWinner,
  viewBoard,
  viewBoardEnemy,
  getCurrentTarget,
  getCurrentPlayer,
  Status,
};
