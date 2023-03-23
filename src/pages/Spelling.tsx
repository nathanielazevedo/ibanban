//functionality
import { register } from "../data";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { SpellingGame } from "../utils/spelling";

//components
import { Box } from "@mui/material";
import Word from "../components/spelling/Word";
import WinPage from "../components/spelling/WinPage";

const Words = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;

  const setCurrentWord = useState(register[deckName].words[0])[1];
  const [completed, setCompleted] = useState(false);

  const GameClass = useMemo(() => {
    return new SpellingGame(
      register[deckName].words,
      deckName,
      setCurrentWord,
      setCompleted
    );
  }, []);

  if (completed) return <WinPage GameClass={GameClass} />;

  return (
    <Box className="bg-primary h-[88vh]">
      <Box className="flex flex-col justify-center gap-[40px] bg-primary mx-auto h-[88vh] w-[900px]">
        <Word GameClass={GameClass} />
      </Box>
    </Box>
  );
};

export default Words;
