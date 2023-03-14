//components
import { Button, Typography } from "@mui/material";

type WinPage = {
  GameClass: any;
};

const WinPage = ({ GameClass }: WinPage) => {
  return (
    <div className="spelling-win-container">
      <Typography variant="h1">Great Job!</Typography>
      <Button onClick={() => GameClass.newGame()}>
        <Typography variant="h4">Spell Them Again</Typography>
      </Button>
    </div>
  );
};

export default WinPage;
