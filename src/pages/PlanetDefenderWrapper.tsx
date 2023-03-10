import { createContext, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { register } from "../data";
import stack from "../utils/stack";
import { Scene } from "../components/welcome/Shape";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

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
  const comet = useMemo(() => {
    return useLoader(GLTFLoader, "/comet/comet.gltf");
  }, []);
  return (
    <gltfContext.Provider value={comet}>
      <GameContext.Provider value={thisStack}>{children}</GameContext.Provider>
    </gltfContext.Provider>
  );
};

export default PlanetDefenderWrapper;
