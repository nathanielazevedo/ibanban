//components
import { Button, Typography } from "@mui/material";
import { SpellingGame } from "../utils/Spelling";

type LostPage = {
  GameClass: SpellingGame;
  setLost?: (lost: boolean) => void;
};

const LostPage = ({ GameClass, setLost }: LostPage) => {
  return (
    <div className="h-[90vh] flex flex-col items-center pt-48">
      <Typography variant="h1">You lose!</Typography>
      <Button
        onClick={() => {
          setLost && setLost(false);
          GameClass.newGame();
        }}
      >
        <Typography variant="h4">Try Again</Typography>
      </Button>
    </div>
  );
};

export default LostPage;
