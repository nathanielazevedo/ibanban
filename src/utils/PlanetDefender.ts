type PlanetDefener = {
  chinese: string;
  pinyin: string;
  english: string;
}[];
export default class PlanetDefenderGame {
  stack: PlanetDefener;
  stackStore: PlanetDefener;

  constructor(deck: PlanetDefener) {
    this.stack = structuredClone(deck);
    this.stackStore = deck;
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  shift() {
    this.stack.shift();
  }

  shiftPush() {
    this.stack.push(this.stack.shift() as never);
  }

  checkWord(input: string) {
    if (input === this.stack[0].english) return true;
    return false;
  }

  getNextWord() {
    return this.stack[0];
  }

  restoreDeck() {
    this.stack = structuredClone(this.stackStore);
  }
}
