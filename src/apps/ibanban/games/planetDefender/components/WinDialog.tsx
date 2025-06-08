import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import PlanetDefenderGame from "../utils/PlanetDefender";

type WinDialogProps = {
  open: boolean;
  setShowWinDialog: (state: boolean) => void;
  setShowStartDialog: (state: boolean) => void;
  prepareGame: () => void;
  pdClass: PlanetDefenderGame;
};

const WinDialog = ({
  open,
  setShowWinDialog,
  setShowStartDialog,
  prepareGame,
  pdClass,
}: WinDialogProps) => {
  return (
    <Dialog open={open} sx={{ zIndex: 5000 }} fullWidth>
      <DialogTitle>
        <Typography variant="h4" component="h3">
          You won!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="h6" component="h4">
            You defended the planet!
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            setShowWinDialog(false);
            setShowStartDialog(true);
          }}
        >
          Menu
        </Button>
        <Button
          onClick={() => {
            setShowWinDialog(false);
            prepareGame();
          }}
        >
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WinDialog;
