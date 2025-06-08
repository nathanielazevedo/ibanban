//functionality
import { useEffect, useState } from "react";
import { SpellingGame } from "../utils/Spelling";
import { speak } from "../../../../../utils/speak";

//components
import { Box, Tooltip, Typography } from "@mui/material";

//assets
import HearingIcon from "@mui/icons-material/Hearing";

type WordType = {
  GameClass: SpellingGame;
};

export type WordsState = {
  targetValue: string;
  value: string;
  ref: Element | undefined;
  status: string;
}[];

const Word = ({ GameClass }: WordType) => {
  const [wordsState, setWordsState] = useState<WordsState>(
    GameClass.generateState()
  );

  const chinese = GameClass.getCurrentChineseWord;
  const english = GameClass.getCurrentEnglishWord;
  const pinyin = GameClass.getCurrentPinyinWord;

  useEffect(() => {
    GameClass.setState = setWordsState;

    const inputRefs = document.getElementById("inputs")?.children;
    if (!inputRefs) return;

    setWordsState((prevState) => {
      prevState?.forEach((e, i) => {
        e.ref = inputRefs[i];
      });
      return [...prevState];
    });
  }, []);

  // 🔥 Focus the current input when wordsState updates
  useEffect(() => {
    const activeIndex = GameClass.currentLetterIndex;
    const inputRefs = document.getElementById("inputs")?.children;
    if (inputRefs?.[activeIndex]) {
      (inputRefs[activeIndex] as HTMLElement).focus();
    }
  }, [wordsState]);

  const getBorderColor = (state: string) => {
    if (state === "completed") return "green";
    if (state === "error") return "red";
    return "white";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          marginBottom: "24px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "50px",
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {english}
        </Typography>
        <Tooltip title="Hear word" placement="top">
          <HearingIcon
            fontSize="large"
            onClick={() => speak(chinese, 0.5)}
            sx={{ cursor: "pointer", color: "#90caf9" }}
          />
        </Tooltip>
      </Box>

      <Box
        id="inputs"
        sx={{
          display: "flex",
          gap: "10px",
          width: "84vw",
          flexWrap: "wrap",
        }}
      >
        {pinyin?.map((l: string, i: number) => (
          <input
            key={i}
            value={wordsState[i]?.value ?? ""}
            onChange={(evt) =>
              GameClass.handleChange(
                i,
                wordsState,
                setWordsState
              )(evt.target.value)
            }
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            style={{
              fontSize: "40px",
              backgroundColor: "#000",
              color: "white",
              border: `2px solid ${getBorderColor(wordsState[i]?.status)}`,
              borderRadius: "8px",
              width: "70px",
              height: "70px",
              textAlign: "center",
            }}
          />
        ))}
      </Box>
    </>
  );
};

export default Word;
