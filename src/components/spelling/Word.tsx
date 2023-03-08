import { useEffect, useRef, useState } from "react";
import Letter from "./Letter";
import { speak } from "../../utils/speak";
import { Tooltip, Typography } from "@mui/material";
import HearingIcon from "@mui/icons-material/Hearing";
import { SpellingGame } from "../../utils/spelling";

type Word = {
  GameClass: SpellingGame;
  speechRate: number | number[];
};

type State = [
  {
    targetValue: string;
    value: string;
    ref: any;
    status: string;
  }
];

const Word = ({ GameClass, speechRate }: Word) => {
  const [state, setState] = useState<State>(GameClass.generateState());

  useEffect(() => {
    const inputRefs = document.getElementById("inputs")?.children;
    GameClass.setState = setState;
    if (!inputRefs) return;
    //apply's refs to each letter
    setState((previous) => {
      previous?.forEach((e, i) => {
        e.ref = inputRefs[i];
      });
      return previous;
    });
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
        <Typography variant="h2">
          {GameClass.getCurrentEnglishWord()}
        </Typography>
        <Tooltip title="Hear word" placement="top">
          <HearingIcon
            onClick={() => speak(GameClass.getCurrentChineseWord(), speechRate)}
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
        {GameClass.getCurrentPinyinWord()?.map(
          (letter: string, index: number) => (
            <Letter
              key={(Math.random() * index) / Math.random()}
              value={state[index]?.value ?? ""}
              focused={GameClass.currentLetterIndex === index}
              state={state[index]?.status}
              handleChange={() => {
                return GameClass.handleChange(index, state, setState);
              }}
            />
          )
        )}
      </div>
      {/* {showCheck && (
        <CheckIcon
          sx={{ color: "lightgreen", marginLeft: "50px", fontSize: "50px" }}
        />
      )} */}
    </div>
  );
};

export default Word;
