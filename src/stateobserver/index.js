class StateObserver {
  constructor() {
    this.state = new Array(64);
    this.state.fill(2);
    Object.seal(this.state);
    this.player = 0;
    this.terminal = false;
    this.availableActions = new Map();
    // set start position
    this.state[27] = 0;
    this.state[28] = 1;
    this.state[35] = 1;
    this.state[36] = 0;
    this.setAvailableActions();
  }

  setNextPlayer() {
    this.player = (this.player + 1) % 2;
  }

  getNextPlayer() {
    return (this.player + 1) % 2;
  }

  getPlayer() {
    return this.player;
  }

  getAvailableActions() {
    return this.availableActions;
  }

  setAvailableActions() {
    this.availableActions = new Map();
    this.state.forEach((x, i) => {
      if (x === 2) {
        const neighbours = this.getNeighbours(i);
        let flips = [];

        neighbours.forEach((n, j) => {
          const toFlip = this.checkValidity(i, n);
          if (toFlip.length > 0) {
            console.log(toFlip);
            flips = [...flips, ...toFlip];
          }
        });
        if (flips.length > 0) {
          this.availableActions.set(i, flips);
        }
      }
    });
  }

  checkValidity(x, n) {
    if (this.state[n] !== this.getNextPlayer()) return [];
    const toFlip = [];
    toFlip.push(n);
    const direction = n - x;
    // check from now on if the next is empty
    let out = 0;
    let last = n;
    let next = last + direction;

    while (next >= 0 && next < 64) {
      if (out > 5) break;
      if (last % 8 === 0 && next % 8 === 7) break;
      if (next % 8 === 0 && last % 8 === 0) break;
      if (next === 2) break;
      if (next === this.player) return toFlip;
      toFlip.push(next);
      out++;
      // update index
      last = next;
      next += direction;
    }
    return [];
  }

  getNeighbours(index) {
    // Check for neighbours of enemies
    const neighbours = [];
    const dirs = [-9, -8, -7, -1, 1, 7, 8, 9];
    for (let i = 0; i < dirs.length; i++) {
      let newIndex = index + dirs[i];
      if (newIndex < 0 || newIndex > 63) continue;
      if (newIndex % 8 === 0 && index % 8 === 7) continue;
      if (index % 8 === 0 && newIndex % 8 === 0) continue;
      neighbours.push(newIndex);
    }
    return neighbours;
  }

  advance(index) {
    if (this.availableActions.includes(index)) {
    }
  }

  getStateAsString() {
    let str = "";
    this.state.forEach((x, i) => {
      if (i % 8 === 0) str += "\n";
      str += x === 0 ? " X " : x === 1 ? " O " : " - ";
    });
    return str;
  }
}

export default StateObserver;
