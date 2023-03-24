//components
import { Button, Typography } from "@mui/material";
import { SpellingGame } from "../utils/Spelling";

type WinPage = {
  GameClass: SpellingGame;
  setCompleted: (completed: boolean) => void;
};

const WinPage = ({ GameClass, setCompleted }: WinPage) => {
  return (
    <div className="h-[90vh] flex flex-col items-center pt-48">
      <Typography variant="h1">Great Job!</Typography>
      <Button
        onClick={() => {
          setCompleted(false);
          GameClass.newGame();
        }}
      >
        <Typography variant="h4">Spell Them Again</Typography>
      </Button>
    </div>
  );
};

export default WinPage;
