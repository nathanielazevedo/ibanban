import playSound from "../../../../../utils/playSound";
import Good from "../../assets/good.wav";
import Win from "../../assets/win.wav";
import { WordsState } from "../components/Word";
import { Dispatch, SetStateAction } from "react";
import { stripTone } from "../../../../../utils/stripTone";
import { Word } from "../../../data";

export class SpellingGame {
  deckName: string;
  words: Word[];
  currentWordIndex: number;
  currentLetterIndex: number;
  setCurrentWord: (word: Word) => void;
  setState: ((state: WordsState) => void) | undefined;
  setCompleted: (state: boolean) => void;

  constructor(
    deck: Word[],
    deckName: string,
    setCurrentWord: (word: Word) => void,
    setCompleted: (state: boolean) => void
  ) {
    this.deckName = deckName;
    this.words = deck;
    this.currentWordIndex = 0;
    this.currentLetterIndex = 0;
    this.setCurrentWord = setCurrentWord;
    this.setState = undefined;
    this.setCompleted = setCompleted;
  }

  //Word Getters
  get getCurrentEnglishWord() {
    return this.words[this.currentWordIndex].english;
  }

  get getCurrentChineseWord() {
    return this.words[this.currentWordIndex].chinese;
  }

  get getCurrentPinyinWord() {
    return this.words[this.currentWordIndex].pinyin.split("");
  }

  //Word Actions
  goNextWord() {
    if (this.currentWordIndex === this.getDeckLength() - 1) return;
    this.currentWordIndex++;
    this.currentLetterIndex = 0;
    this.setState && this.setState(this.generateState());
    this.setCurrentWord(this.words[this.currentWordIndex]);
  }

  goPreviousWord() {
    if (this.currentWordIndex === 0) return;
    this.currentWordIndex--;
    this.currentLetterIndex = 0;
    this.setState && this.setState(this.generateState());
    this.setCurrentWord(this.words[this.currentWordIndex]);
  }

  handleChange(
    index: number,
    state: WordsState,
    setState: Dispatch<SetStateAction<WordsState>>
  ) {
    return (input: string) => {
      if (input.length > 1) return;
      // wrong iput
      if (input !== state[index].targetValue) {
        setState((previous: WordsState) => {
          previous[index].value = input;
          console.log(previous[index].value);
          previous[index].status = "error";
          return [...previous];
        });
        return;
      }
      // right, but not last letter
      if (this.currentLetterIndex < this.getCurrentPinyinWord.length - 1) {
        this.currentLetterIndex++;
        setState((previous: WordsState) => {
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

  generateState(): WordsState {
    return this.getCurrentPinyinWord.map((letter: string) => {
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
