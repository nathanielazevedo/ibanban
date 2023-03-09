import { useMemo, useState } from "react";
import { register } from "../data";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Word from "../components/spelling/Word";
import Footer from "../components/spelling/Footer";
import { SpellingGame } from "../utils/spelling";
import { keyDownListener } from "../utils/keyDownListener";

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

  document.onkeydown = (e) => keyDownListener(e, GameClass);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="space-between"
      width="100%"
    >
      {completed ? (
        <div className="great">
          <Typography variant="h1">Great Job!</Typography>
          <Button
            onClick={() => {
              GameClass.newGame();
            }}
          >
            <Typography variant="h4">Spell Them Again</Typography>
          </Button>
        </div>
      ) : (
        <>
          {" "}
          <Word GameClass={GameClass} speechRate={speechRate} />
          <Footer
            GameClass={GameClass}
            speechRate={speechRate}
            setSpeechRate={setSpeechRate}
          />
        </>
      )}
    </Box>
  );
};

export default Words;
