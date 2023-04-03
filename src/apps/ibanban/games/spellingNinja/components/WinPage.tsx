//components
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SpellingGame } from "../utils/Spelling";

type WinPage = {
  GameClass: SpellingGame;
  setCompleted: (completed: boolean) => void;
};

const WinPage = ({ GameClass, setCompleted }: WinPage) => {
  const navigate = useNavigate();
  return (
    <div className="h-[90vh] flex flex-col items-center pt-48">
      <h3 className="w-50vw text-[20px]">
        <span className="text-[30px] text-gradient">Congratulations!</span>{" "}
        <br /> You completed Spelling Ninja for this deck. <br /> You can now
        play the next game!
      </h3>
      <Button
        sx={{ mt: 4 }}
        onClick={() => {
          setCompleted(false);
          GameClass.newGame();
        }}
      >
        <Typography variant="h4">Play Again</Typography>
      </Button>
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        <Typography variant="h4">Back to games</Typography>
      </Button>
    </div>
  );
};

export default WinPage;
