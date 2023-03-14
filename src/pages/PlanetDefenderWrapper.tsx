//functionality
import { register } from "../data";
import { useParams } from "react-router-dom";
import PlanetDefenderGame from "../utils/PlanetDefender";

//components
import PlanetDefender from "../components/planetDefender/PlanetDefender";

const PlanetDefenderWrapper = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const pdClass = new PlanetDefenderGame(register[deckName]);

  return <PlanetDefender pdClass={pdClass} />;
};

export default PlanetDefenderWrapper;
