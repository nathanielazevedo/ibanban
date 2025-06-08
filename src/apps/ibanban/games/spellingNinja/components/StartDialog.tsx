import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SpellingGame } from "../utils/Spelling";

type WinDialog = {
  open: boolean;
  setShowStartDialog: (show: boolean) => void;
  startGame: SpellingGame;
};

const StartDialog = ({ open, setShowStartDialog, startGame }: WinDialog) => {
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      fullWidth
      sx={{ zIndex: 5501 }}
      PaperProps={{
        sx: {
          height: "500px",
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Spelling Ninja</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h6">
            Translate all the words before the timer runs out.
          </Typography>
          <Box
            sx={{
              height: "10px",
              width: "100%",
              backgroundColor: "#444",
              borderRadius: "5px",
              marginTop: 5,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "0%",
                height: "100%",
                backgroundColor: "#1976d2",
                transition: "width 1s linear",
              }}
            />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => navigate(-1)} color="secondary">
          Leave Game
        </Button>
        <Button
          onClick={() => {
            setShowStartDialog(false);
            startGame.newGame();
          }}
          color="primary"
          variant="contained"
        >
          Start
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StartDialog;
