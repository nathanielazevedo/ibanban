import { useEffect, useRef, useState } from "react";
import Letter from "./Letter";
import { speak } from "../../utils/speak";
import { Tooltip, Typography } from "@mui/material";
import HearingIcon from "@mui/icons-material/Hearing";

type Word = {
  word: Record<string, any>;
  goNextWord: () => void;
  speechRate: number | number[];
};

const Word = ({ word, goNextWord, speechRate }: Word) => {
  const [inputRefs, setInputRefs] = useState<any>(undefined);

  useEffect(() => {
    setInputRefs(document.getElementById("inputs"));
  }, []);

  return (
    <div style={{ padding: "15rem 0 0 5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "40px",
          height: "100px",
        }}
      >
        <Typography variant="h2">{word?.word?.english}</Typography>
        <Tooltip title="Hear word" placement="top">
          <HearingIcon
            onClick={() => speak(word.word.chinese, speechRate)}
            sx={{
              fontSize: "50px",
              color: "gray",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </div>
      <div
        id="inputs"
        style={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
        }}
      >
        {inputRefs &&
          word.word.pinyin
            .split("")
            ?.map((letter: string, i: number) => (
              <Letter
                index={i}
                letter={letter}
                goNextWord={goNextWord}
                refs={inputRefs?.children}
                key={Math.random() * i}
              />
            ))}
      </div>
    </div>
  );
};

export default Word;
