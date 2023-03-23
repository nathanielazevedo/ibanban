import Intro from "./Intro";

export type Word = {
  chinese: string;
  pinyin: string;
  english: string;
};

export type Deck = {
  id: string;
  name: string;
  version: string;
  words: Word[];
  sentences: {
    english: string;
    chinese: string;
    pinyin: string;
  }[];
};

type Decks = {
  [key: string]: Deck;
};

export const register: Decks = {
  Intro,
};
