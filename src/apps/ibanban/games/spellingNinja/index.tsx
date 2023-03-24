//functionality
import { register } from "../../data";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpellingGame } from "./utils/Spelling";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

//components
import { Box } from "@mui/material";
import Word from "./components/Word";
import WinPage from "./components/WinPage";
import LostPage from "./components/LostPage";
import StartDialog from "./components/StartDialog";

const Words = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const [lost, setLost] = useState(false);
  const setCurrentWord = useState(register[deckName].words[0])[1];
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const GameClass = useMemo(() => {
    return new SpellingGame(
      register[deckName].words,
      deckName,
      setCurrentWord,
      setCompleted
    );
  }, []);

  useEffect(() => {
    if (lost == true || showStartDialog === true || completed === true) return;
    let circularProgress = document.querySelector(
        ".circular-progress"
      ) as HTMLDivElement,
      progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
      progressEndValue = 100,
      speed = 100;

    let progress = setInterval(() => {
      progressStartValue++;

      if (progressValue?.textContent) {
        progressValue.textContent = `${progressStartValue}%`;
      }
      if (circularProgress?.style.background) {
        circularProgress.style.background = `conic-gradient(#2ec7e6 ${
          progressStartValue * 3.6
        }deg, #ededed 0deg)`;
      }

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
        setLost(true);
      }
    }, speed);
    return () => {
      clearInterval(progress);
      progressStartValue = 0;
    };
  }, [lost, showStartDialog, completed]);

  if (completed)
    return <WinPage GameClass={GameClass} setCompleted={setCompleted} />;
  if (lost) return <LostPage GameClass={GameClass} setLost={setLost} />;
  if (showStartDialog)
    return (
      <StartDialog
        startGame={GameClass}
        setShowStartDialog={setShowStartDialog}
        open={showStartDialog}
      />
    );

  return (
    <Box className="h-[78vh] flex relative">
      <Box className="flex flex-col justify-center gap-[40px] bg-primary mx-auto w-[900px]">
        <CloseRoundedIcon
          className="absolute top-0 left-0 m-5 cursor-pointer"
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
        />
        <Word GameClass={GameClass} />
      </Box>
      <Box className="flex flex-row gap-10 absolute top-0 right-64 ">
        <div className="container">
          <div className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Words;
