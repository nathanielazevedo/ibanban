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
      <Box className="flex items-center gap-[50px]">
        <h3 className="text-[50px] text-gradient">{english}</h3>
        <Tooltip title="Hear word" placement="top">
          <HearingIcon
            className="hearing-icon"
            fontSize="large"
            onClick={() => speak(chinese, 0.5)}
          />
        </Tooltip>
      </Box>
      <Box id="inputs" className="flex w-[84vw] gap-[10px]">
        {pinyin?.map((l: string, i: number) => (
          <input
            key={Math.random() * 1000}
            value={wordsState[i]?.value ?? ""}
            autoFocus={GameClass.currentLetterIndex === i}
            className="text-[40px] bg-primary text-white border-2 border-white rounded-md w-[70px] h-[70px] text-center"
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
