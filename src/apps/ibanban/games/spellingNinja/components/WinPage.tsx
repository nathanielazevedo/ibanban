//components
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SpellingGame } from "../utils/Spelling";

type WinPageProps = {
  GameClass: SpellingGame;
  setCompleted: (completed: boolean) => void;
};

const WinPage = ({ GameClass, setCompleted }: WinPageProps) => {
  const navigate = useNavigate();

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
      <Typography
        variant="h5"
        sx={{
          maxWidth: "600px",
          fontSize: "20px",
          marginBottom: 4,
        }}
      >
        <span
          style={{
            fontSize: "30px",
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Congratulations!
        </span>
        <br />
        You completed Spelling Ninja for this deck. <br />
        You can now play the next game!
      </Typography>

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
    </Box>
  );
};

export default WinPage;
