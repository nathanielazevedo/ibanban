import { createContext } from "react";
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
export const gltfContext = createContext<any>(undefined);

const PlanetDefenderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { deckName } = useParams();
  const deck = register[deckName ?? ""] as PlanetDefender;
  const thisStack = new stack(deck);

  return (
    <gltfContext.Provider value={""}>
      <GameContext.Provider value={thisStack}>{children}</GameContext.Provider>
    </gltfContext.Provider>
  );
};

export default PlanetDefenderWrapper;
