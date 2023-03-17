//functionality
import { register } from "../data";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { SpellingGame } from "../utils/spelling";

//components
import { Box } from "@mui/material";
import Word from "../components/spelling/Word";
import Footer from "../components/spelling/Footer";
import WinPage from "../components/spelling/WinPage";

const Words = () => {
  const [speechRate, setSpeechRate] = useState<number | number[]>(0.5);
  const { deckName } = useParams();
  if (!deckName) return <></>;

  const setCurrentWord = useState(register[deckName][0])[1];
  const [completed, setCompleted] = useState(false);

  const GameClass = useMemo(() => {
    return new SpellingGame(
      register[deckName],
      deckName,
      setCurrentWord,
      setCompleted
    );
  }, []);

  if (completed) return <WinPage GameClass={GameClass} />;

  return (
    <>
      <Box className="spelling-container">
        <Word GameClass={GameClass} speechRate={speechRate} />
      </Box>
      <Footer
        GameClass={GameClass}
        speechRate={speechRate}
        setSpeechRate={setSpeechRate}
      />
    </>
  );
};

export default Words;
