//functionality
import { useEffect, useState } from "react";
import { SpellingGame } from "../../utils/spelling";
import { speak } from "../../utils/speak";

//components
import { Box, Tooltip, Typography } from "@mui/material";

//assets
import HearingIcon from "@mui/icons-material/Hearing";

type WordType = {
  GameClass: SpellingGame;
  speechRate: number | number[];
};

export type WordsState = {
  targetValue: string;
  value: string;
  ref: Element | undefined;
  status: string;
}[];

const Word = ({ GameClass, speechRate }: WordType) => {
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
    setWordsState((o) => {
      o?.forEach((e, i) => {
        e.ref = inputRefs[i];
      });
      return o;
    });
  }, []);

  const getBorderColor = (state: string) => {
    let borderColor = "white";
    if (state == "completed") borderColor = "green";
    else if (state == "error") borderColor = "red";
    return borderColor;
  };

  return (
    <>
      <Box className="spelling-word-container">
        <Typography variant="h2">{english}</Typography>
        <Tooltip title="Hear word" placement="top">
          <HearingIcon
            className="hearing-icon"
            onClick={() => speak(chinese, speechRate)}
          />
        </Tooltip>
      </Box>
      <Box id="inputs" className="spelling-letters">
        {pinyin?.map((l: string, i: number) => (
          <input
            key={Math.random() * 1000}
            value={wordsState[i]?.value ?? ""}
            autoFocus={GameClass.currentLetterIndex === i}
            className="spelling-input"
            style={{ borderColor: getBorderColor(wordsState[i].status) }}
            onChange={(evt) =>
              GameClass.handleChange(
                i,
                wordsState,
                setWordsState
              )(evt.target.value)
            }
          />
        ))}
      </Box>
    </>
  );
};

export default Word;
