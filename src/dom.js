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
import { EMTY, MISSED, HIT, SHIP } from "../src/gameboard.js";

const container = document.querySelector("div.container");
const board_0 = document.querySelector("div.board_0");
const board_1 = document.querySelector("div.board_1");

function renderBoards() {
  board_0.replaceChildren();
  board_1.replaceChildren();
  board_0.classList.remove("inactive");
  board_1.classList.remove("inactive");
  let currentTarget = getCurrentTarget();
  let currentPlayer = getCurrentPlayer();
  let enemyBoard = viewBoardEnemy(currentTarget);
  let myBoard = viewBoard(currentPlayer);
  (currentPlayer === 0 ? board_0 : board_1).classList.add("inactive");
  const stateClass = { 1: "missed", 2: "hit", 3: "ship" };
  for (let row of myBoard) {
    const row_div = document.createElement("div");
    row_div.classList.add("row");
    for (let cell of row) {
      const div = document.createElement("div");
      if (stateClass[cell]) div.classList.add(stateClass[cell]);
      div.classList.add("cell");
      row_div.appendChild(div);
    }
    if (currentPlayer === 0) {
      board_0.appendChild(row_div);
    } else {
      board_1.appendChild(row_div);
    }
  }

  let row_index = 0;
  let column_index = 0;
  for (let row of enemyBoard) {
    const row_div = document.createElement("div");
    row_div.classList.add("row");
    for (let cell of row) {
      const div = document.createElement("div");
      if (stateClass[cell]) div.classList.add(stateClass[cell]);
      div.classList.add("cell");
      let x_coord = column_index;
      let y_coord = row_index;
      div.addEventListener("click", () => {
        playOneTurn(x_coord, y_coord);
        renderBoards();
        if (getWinner() !== null) {
          let winner = getWinner().name;
          renderWin(winner);
        }
      });
      row_div.appendChild(div);
      column_index++;
    }
    if (currentTarget === 0) {
      board_0.appendChild(row_div);
    } else {
      board_1.appendChild(row_div);
    }
    column_index = 0;
    row_index++;
  }
}

function renderWin(winner) {
  const dialog = document.querySelector("#win");
  dialog.textContent = `Player ${winner} wins!`;
  const close_button = document.createElement("button");
  close_button.addEventListener("click", () => dialog.close());
  close_button.textContent = "Close";
  dialog.appendChild(close_button);
  dialog.showModal();
}
let player1 = null;
let player2 = null;
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  player1 = form.player1_name.value;
  form.player1_name.value = "";
  player2 = form.player2_name.value;
  form.player2_name.value = "";
  let header_0 = document.querySelector("h2.board_0");
  let header_1 = document.querySelector("h2.board_1");
  header_0.textContent = player1;
  header_1.textContent = player2;
  reset(player1, player2);
  placeRandomShip();
  renderBoards();
});

const reset_button = document.querySelector("#reset");
reset_button.addEventListener("click", () => {
  if (player1 === null) {
    return;
  }
  reset(player1, player2);
  renderBoards();
});
const ship_button = document.querySelector("#ship");
ship_button.addEventListener("click", () => {
  if (player1 === null) {
    return;
  }
  placeRandomShip();
  renderBoards();
});
reset("Player 1", "Player 2");
renderBoards();
