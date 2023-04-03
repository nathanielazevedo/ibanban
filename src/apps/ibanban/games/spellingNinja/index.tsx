//functionality
import { register } from "../../data";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpellingGame } from "./utils/Spelling";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch } from "react-redux";
import { setLevel } from "../../../../state";

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
  const dispatch = useDispatch();

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
    const pb = document.querySelector(".progress-bar > div") as HTMLDivElement;
    const intreval = setInterval(myTimer, 1000);
    let progress = 0;

    function myTimer() {
      if (progress < 100 || progress < 10) {
        progress = progress + 10;
      } else {
        setLost(true);
      }

      if (pb) pb.style.width = progress + "%";
    }
    return () => {
      clearInterval(intreval);
    };
  }, [lost, showStartDialog, completed]);

  if (completed) {
    dispatch(
      setLevel({ deckName: GameClass.deckName, deckLevel: "spellingNinja" })
    );
    return <WinPage GameClass={GameClass} setCompleted={setCompleted} />;
  }
  if (lost) return <LostPage GameClass={GameClass} setLost={setLost} />;

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
        <div className="progress-bar">
          <div></div>
        </div>
      </Box>
      {showStartDialog && (
        <StartDialog
          startGame={GameClass}
          setShowStartDialog={setShowStartDialog}
          open={showStartDialog}
        />
      )}
    </Box>
  );
};

export default Words;
