//functionality
import { register } from "../data";
import { useParams } from "react-router-dom";

//components
import { Box } from "@mui/material";
import WordCard from "../components/review/WordCard";

const Overview = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const deck = register[deckName];

  return (
    <Box className="overview-container">
      {deck.map((word, i) => (
        <WordCard key={i} word={word} />
      ))}
    </Box>
  );
};

export default Overview;
