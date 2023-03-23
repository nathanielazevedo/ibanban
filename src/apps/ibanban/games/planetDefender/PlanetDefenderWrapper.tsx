//functionality
import { register } from "../../data";
import { useParams } from "react-router-dom";
import PlanetDefenderGame from "./utils/PlanetDefender";
import PlanetDefender from "./components/PlanetDefender";

const PlanetDefenderWrapper = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const pdClass = new PlanetDefenderGame(register[deckName].words);

  return <PlanetDefender pdClass={pdClass} />;
};

export default PlanetDefenderWrapper;
