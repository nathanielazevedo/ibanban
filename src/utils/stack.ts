type StackType = {
  word: {
    chinese: string;
    pinyin: string;
    english: string;
  };
}[];
export default class PlanetDefenderClass {
  stack: StackType;
  stackStore: StackType;

  constructor(deck: StackType) {
    this.stack = structuredClone(deck);
    this.stackStore = deck;
  }

  public shift() {
    this.stack.shift();
  }

  public shiftPush() {
    this.stack.push(this.stack.shift() as never);
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  checkWord(input: string) {
    if (input === this.stack[0].word.english) {
      return true;
    } else {
      return false;
    }
  }

  getNextWord() {
    return this.stack[0];
  }

  restoreDeck() {
    this.stack = structuredClone(this.stackStore);
  }
}
