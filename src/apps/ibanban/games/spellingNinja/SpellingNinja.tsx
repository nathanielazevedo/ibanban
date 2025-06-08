//functionality
import decks from "../../data/index";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpellingGame } from "./utils/Spelling";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

//components
import { Box, LinearProgress } from "@mui/material";
import Word from "./components/Word";
import WinPage from "./components/WinPage";
import LostPage from "./components/LostPage";
import StartDialog from "./components/StartDialog";

const Words = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const [lost, setLost] = useState(false);
  const setCurrentWord = useState(decks[deckName].words[0])[1];
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const GameClass = useMemo(() => {
    return new SpellingGame(
      decks[deckName].words,
      deckName,
      setCurrentWord,
      setCompleted
    );
  }, []);

  useEffect(() => {
    if (lost || showStartDialog || completed) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10;
        if (next >= 100) {
          setLost(true);
          clearInterval(interval);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [lost, showStartDialog, completed]);

  if (completed) {
    return <WinPage GameClass={GameClass} setCompleted={setCompleted} />;
  }

  if (lost)
    return (
      <LostPage
        GameClass={GameClass}
        setLost={setLost}
        setProgress={setProgress}
      />
    );

  return (
    <Box sx={{ height: "78vh", display: "flex", position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "40px",
          // backgroundColor: "primary.main",
          mx: "auto",
          width: "900px",
          position: "relative",
          p: 4,
          borderRadius: 2,
        }}
      >
        <CloseRoundedIcon
          fontSize="large"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            m: 2,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(-1);
          }}
        />
        <Word GameClass={GameClass} />
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 10, borderRadius: 5 }}
        />
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
