import playSound from "./playSound";
import Good from "../assets/good.wav";
import Win from "../assets/win.wav";
import { WordType } from "../components/overview/Row";
import { State } from "../components/spelling/Word";
import { Dispatch, SetStateAction } from "react";

export class SpellingGame {
  words: WordType[];
  currentWordIndex: number;
  currentLetterIndex: number;
  deckName: string;
  setCurrentWord: (word: WordType) => void;
  specialCharacters: string[];
  setState: any;
  setCompleted: (state: boolean) => void;

  constructor(
    deck: WordType[],
    deckName: string,
    setCurrentWord: (word: WordType) => void,
    setCompleted: (state: boolean) => void
  ) {
    this.deckName = deckName;
    this.words = deck;
    this.currentWordIndex = 0;
    this.currentLetterIndex = 0;
    this.setCurrentWord = setCurrentWord;
    this.specialCharacters = ["̄", "̀", "̌", "́"];
    this.setState = undefined;
    this.setCompleted = setCompleted;
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

  handleChange(
    index: number,
    state: State,
    setState: Dispatch<SetStateAction<State>>
  ) {
    return (input: string) => {
      if (input.length > 1) return;
      console.log(input);
      console.log(state[index].targetValue);
      // wrong iput
      if (input !== state[index].targetValue) {
        setState((previous: State) => {
          previous[index].value = input;
          console.log(previous[index].value);
          previous[index].status = "error";
          return [...previous];
        });
        return;
      }

      // right, but not last letter
      if (this.currentLetterIndex < this.getCurrentPinyinWord().length - 1) {
        this.currentLetterIndex++;
        setState((previous: State) => {
          previous[index].value = input;
          previous[index].status = "completed";
          return [...previous];
        });
        return;
      }

      // last letter, not last word
      if (this.currentWordIndex < this.getDeckLength() - 1) {
        playSound(Good);
        this.goNextWord();
        return;
      }

      // last letter of last word
      playSound(Win);
      this.setCompleted(true);
    };
  }

  //General
  getDeckLength() {
    return this.words.length;
  }

  generateState(): State {
    return this.getCurrentPinyinWord().map((letter: string) => {
      const tones = new Set([
        "\u0304", // tone 1
        "\u0301", // tone 2
        "\u030c", // tone 3
        "\u0300", // tone 4
      ]);
      // Returns the tone, and the index of the letter with the tone
      function stripTone(w: string) {
        const letters = w.normalize("NFD");
        let newStr = undefined;
        for (let i = 0; i < letters.length; i++) {
          if (tones.has(letters[i])) {
            const val = letters.slice(0, 1);
            newStr = val;
          }
        }
        return newStr ?? w;
      }

      return {
        targetValue: stripTone(letter).toLowerCase(),
        value: "",
        ref: undefined,
        status: "NA",
      };
    });
  }

  newGame() {
    this.currentWordIndex = 0;
    this.currentLetterIndex = 0;
    this.generateState();
    this.setCompleted(false);
  }
}
