import Intro from "./Intro";
import Bathroom from "./Bathroom";
import Pet from "./Pet";
import Hello from "./Hello";

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

export default  {
  Intro,
  Hello,
  Bathroom,
  Pet
} as Decks;
