import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { speak } from "../../../../../utils/speak";
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
      sx={{ zIndex: "5501" }}
      PaperProps={{
        sx: { height: "300px", backgroundColor: "black" },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        Spelling Ninja
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="h6">
            Translate all the words before the timer runs out.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flext", justifyContent: "space-between" }}>
        <Button onClick={() => navigate(-1)}>Leave Game</Button>

        <Button
          onClick={() => {
            setShowStartDialog(false);
            startGame.newGame();
          }}
        >
          Start
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StartDialog;
