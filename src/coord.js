class Coord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static random(size) {
    if (size === 0) {
      return null;
    }
    let x = Math.floor(Math.random() * size);
    let y = Math.floor(Math.random() * size);
    return new Coord(x, y);
  }
}

export { Coord };
