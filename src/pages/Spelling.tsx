import { Box } from "@mui/material";
import { useState } from "react";
import Word from "../components/spelling/Word";
import { register } from "../data";
import { useParams } from "react-router-dom";
import Footer from "../components/spelling/Footer";

const Words = () => {
  const { deckName } = useParams();
  const deck = register[deckName ?? ""];
  const [index, setIndex] = useState(0);
  const [speechRate, setSpeechRate] = useState<number | number[]>(1);

  const goNextWord = () => {
    const idx = index;
    setIndex(idx + 1);
  };

  const previousWord = () => {
    if (index !== 0) {
      const idx = index;
      setIndex(idx - 1);
    }
  };

  const keyDownListener = (e: any) => {
    const key = e.key;
    switch (key) {
      case "ArrowRight":
        goNextWord();
        break;
      case "ArrowLeft":
        previousWord();
        break;
    }
  };

  document.onkeydown = keyDownListener;

  if (index >= deck.length) return <div>Finished</div>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="space-between"
      width="100%"
    >
      <Word
        word={deck[index]}
        goNextWord={goNextWord}
        speechRate={speechRate}
      />
      <Footer
        deckName={deckName ?? ""}
        index={index}
        previousWord={previousWord}
        nextWord={goNextWord}
        deckLength={deck.length}
        speechRate={speechRate}
        setSpeechRate={setSpeechRate}
      />
    </Box>
  );
};

export default Words;
