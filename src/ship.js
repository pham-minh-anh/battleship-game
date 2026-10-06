class Ship {
  constructor(length) {
    this.length = length;
  }
  #hitNum = 0;

  hit() {
    if (this.#hitNum < this.length) {
      this.#hitNum++;
    }
    return this.#hitNum;
  }

  isSunk() {
    return this.#hitNum >= this.length;
  }
}

export { Ship };
