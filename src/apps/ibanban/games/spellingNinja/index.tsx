//functionality
import { register } from "../../data";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpellingGame } from "./utils/Spelling";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

//components
import { Box } from "@mui/material";
import Word from "./components/Word";
import WinPage from "./components/WinPage";

const Words = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;

  const setCurrentWord = useState(register[deckName].words[0])[1];
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

  if (completed) return <WinPage GameClass={GameClass} />;

  return (
    <Box className="h-[58vh] flex relative">
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
    </Box>
  );
};

export default Words;
