class Ship {
  constructor(length) {
    this.length = length;
  }
  #hitNum = 0;
  hit() {
    this.#hitNum++;
    return this.#hitNum;
  }
  isSunk() {
    if (this.#hitNum === this.length) {
      return true;
    } else {
      return false;
    }
  }
}

export { Ship };
