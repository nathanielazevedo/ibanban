import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import PlanetDefenderGame from "../utils/PlanetDefender";

type WinDialog = {
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
}: WinDialog) => {
  return (
    <Dialog open={open} sx={{ zIndex: "5000" }} fullWidth>
      <DialogTitle>
        <h3 className="text-[30px]">You won!</h3>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <h4 className="text-[20px]">You defended the planet!</h4>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flext", justifyContent: "space-between" }}>
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
