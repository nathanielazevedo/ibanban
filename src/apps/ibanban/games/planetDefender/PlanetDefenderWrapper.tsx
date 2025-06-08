//functionality
import decks from "../../data/index";

import { useParams } from "react-router-dom";
import PlanetDefenderGame from "./utils/PlanetDefender";
import PlanetDefender from "./components/PlanetDefender";

const PlanetDefenderWrapper = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const pdClass = new PlanetDefenderGame(decks[deckName].words, deckName);

  return <PlanetDefender pdClass={pdClass} />;
};

export default PlanetDefenderWrapper;
