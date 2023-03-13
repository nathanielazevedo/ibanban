//functionality
import { useParams } from "react-router-dom";
import { register } from "../data";
import PlanetDefenderGame from "../utils/PlanetDefender";

//components
import PlanetDefender from "../components/planetDefender/PlanetDefender";

type PlanetDefenderDeck = {
  word: {
    chinese: string;
    pinyin: string;
    english: string;
  };
}[];

const PlanetDefenderWrapper = () => {
  const { deckName } = useParams();
  const deck = register[deckName ?? ""] as PlanetDefenderDeck;
  const PDClass = new PlanetDefenderGame(deck);

  return <PlanetDefender pdClass={PDClass} />;
};

export default PlanetDefenderWrapper;
