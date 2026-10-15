# Battleship

A two-player Battleship game in the browser, built with vanilla JavaScript, webpack and Jest as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

**Live demo:** https://pham-minh-anh.github.io/battleship-game/

## Features

- Two players enter their names and take turns on one screen
- Ships are placed randomly for both players (fleet of 3, 2, 1, 1)
- Click a cell on the opponent's board to attack
- Enemy ships stay hidden; only hits and misses are shown
- The current player's own board is dimmed and can't be clicked
- A dialog announces the winner when a fleet is sunk
- Reset to start a new game with the same players

## How to play

1. Enter both player names and press **Start game**.
2. On your turn, click a cell on your opponent's board.
   - Red cross: hit
   - Pale cell: miss
3. Turns alternate after every valid attack. Attacking the same cell twice does nothing.
4. The first player to sink the whole enemy fleet wins.

## Project structure

```
src/
├── ship.js        Ship: length, hits, sunk state
├── coord.js       Coord: x/y position, bounds check, random coordinate
├── gameboard.js   Gameboard: ship placement, attacks, sunk check
├── player.js      Player: name and own gameboard, random attack
├── game.js        Game controller: players, turns, win check, board views
├── dom.js         Rendering and event handling
├── index.js       Entry point
├── template.html
└── styles.css
__test__/          Jest tests for each module
```

The game logic (`ship`, `coord`, `gameboard`, `player`, `game`) has no DOM code, so it's fully testable with Jest. `dom.js` only draws the current state and passes clicks to the game controller.

## Getting started

```bash
git clone <your-repo-url>
cd battleship-game
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open http://localhost:8080.

## Scripts

| Command          | What it does                                   |
| ---------------- | ---------------------------------------------- |
| `npm run dev`    | Start the webpack dev server                   |
| `npm test`       | Run the Jest test suite                        |
| `npm run watch`  | Re-run tests automatically on file changes     |
| `npm run build`  | Bundle the app into `dist`                     |
| `npm run deploy` | Build and publish `dist` to GitHub Pages       |

## Built with

- JavaScript (ES modules)
- webpack and webpack-dev-server
- Babel
- Jest
- gh-pages
