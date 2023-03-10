import { createContext, useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { register } from "../data";
import stack from "../utils/stack";
import { Scene } from "../components/welcome/Shape";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useInterval } from "../hooks/useIntreval";

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
