import { useMemo, useState } from "react";
import { register } from "../data";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Word from "../components/spelling/Word";
import Footer from "../components/spelling/Footer";
import { SpellingGame } from "../utils/spelling";
import { keyDownListener } from "../utils/keyDownListener";

const Words = () => {
  const [speechRate, setSpeechRate] = useState<number | number[]>(1);
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const setCurrentWord = useState(register[deckName][0])[1];

  const GameClass = useMemo(() => {
    return new SpellingGame(register[deckName], deckName, setCurrentWord);
  }, []);

  document.onkeydown = (e) => keyDownListener(e, GameClass);

  if (GameClass.currentWordIndex >= GameClass.getDeckLength())
    return <div>Finished</div>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="space-between"
      width="100%"
    >
      <Word GameClass={GameClass} speechRate={speechRate} />
      <Footer
        GameClass={GameClass}
        speechRate={speechRate}
        setSpeechRate={setSpeechRate}
      />
    </Box>
  );
};

export default Words;
