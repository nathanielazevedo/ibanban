import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { register } from "../data";
import stack from "../utils/stack";

type PlanetDefender = {
  word: {
    chinese: string;
    pinyin: string;
    english: string;
  };
}[];

export const GameContext = createContext<stack | undefined>(undefined);

const PlanetDefenderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { deckName } = useParams();
  const deck = register[deckName ?? ""] as PlanetDefender;
  const thisStack = new stack(deck);
  return (
    <GameContext.Provider value={thisStack}>{children}</GameContext.Provider>
  );
};

export default PlanetDefenderWrapper;