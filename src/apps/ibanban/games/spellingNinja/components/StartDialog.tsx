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
  Box,
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
        sx: { height: "500px", backgroundColor: "black" },
      }}
    >
      <DialogTitle className="flex justify-between items-center">
        <h3 className="text-[30px]">Spelling Ninja</h3>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="h6">
            <h3 className="text-[16px]">
              Translate all the words before the timer runs out.
            </h3>
          </Typography>
          <div className="progress-bar mt-20">
            <div></div>
          </div>
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
