export class SpellingGame {
  words: any[];
  currentWordIndex: number;
  currentLetterIndex: number;
  deckName: string;
  setCurrentWord: any;
  specialCharacters: string[];
  setState: any;

  constructor(deck: any, deckName: string, setCurrentWord: any) {
    this.deckName = deckName;
    this.words = deck;
    this.currentWordIndex = 0;
    this.currentLetterIndex = 0;
    this.setCurrentWord = setCurrentWord;
    this.specialCharacters = ["¯", "`", "ˇ", "´"];
    this.setState = undefined;
  }

  //Word Getters
  getCurrentEnglishWord() {
    return this.words[this.currentWordIndex].word.english;
  }

  getCurrentChineseWord() {
    return this.words[this.currentWordIndex].word.chinese;
  }

  getCurrentPinyinWord() {
    return this.words[this.currentWordIndex].word.pinyin.split("");
  }

  //Word Actions
  goNextWord() {
    if (this.currentWordIndex === this.getDeckLength() - 1) return;
    this.currentWordIndex++;
    this.currentLetterIndex = 0;
    this.setState(this.generateState());
    this.setCurrentWord(this.words[this.currentWordIndex]);
  }

  goPreviousWord() {
    if (this.currentWordIndex === 0) return;
    this.currentWordIndex--;
    this.currentLetterIndex = 0;
    this.setState(this.generateState());
    this.setCurrentWord(this.words[this.currentWordIndex]);
  }

  handleChange(index: number, state: any, setState: any) {
    return (input: string) => {
      // if (this.specialCharacters.includes(input)) {
      //   setState((previous: any) => {
      //     previous[index].value = input;
      //     return previous;
      //   });
      // }
      if (input.length > 1) return;

      // right input
      if (input == state[index].targetValue) {
        this.currentLetterIndex++;
        // last letter
        if (this.currentLetterIndex >= this.getCurrentPinyinWord().length) {
          this.currentLetterIndex = 0;
          this.currentWordIndex++;
          if (this.currentWordIndex >= this.getDeckLength()) {
            return;
          }
          setState(this.generateState());
        } else {
          // not last leter
          setState((previous: any) => {
            previous[index].value = input;
            previous[index].status = "completed";
            return [...previous];
          });
        }
      } else {
        // got it wrong
        setState((previous: any) => {
          previous[index].value = input;
          previous[index].status = "error";
          return [...previous];
        });
      }
    };
  }

  //General
  getDeckLength() {
    return this.words.length;
  }

  generateState() {
    return this.getCurrentPinyinWord().map((letter: string) => {
      return {
        targetValue: letter,
        value: "",
        ref: undefined,
        status: "NA",
      };
    });
  }
}
