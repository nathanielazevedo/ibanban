//components
import { Button, Typography, Box } from "@mui/material";
import { SpellingGame } from "../utils/Spelling";

type LostPageProps = {
  GameClass: SpellingGame;
  setLost?: (lost: boolean) => void;
  setProgress: any;
};

const LostPage = ({ GameClass, setLost, setProgress }: LostPageProps) => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "12rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: 4 }}>
        You lose!
      </Typography>

      <Button
        onClick={() => {
          setLost?.(false);
          setProgress(0);
          GameClass.newGame();
        }}
      >
        <Typography variant="h4">Try Again</Typography>
      </Button>
    </Box>
  );
};

export default LostPage;
