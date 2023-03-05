type StackType = {
  word: {
    chinese: string;
    pinyin: string;
    english: string;
  };
}[];
export default class PlanetDefender {
  stack: StackType;

  constructor(deck: StackType) {
    this.stack = structuredClone(deck);
  }

  shift() {
    this.stack.shift();
  }

  shiftPush() {
    this.stack.push(this.stack.shift() as never);
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  checkWork(input: string) {
    if (input === this.stack[0].word.english) {
      this.shift();
    }
  }
}
