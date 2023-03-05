import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

type WinDialog = {
  open: boolean;
  setShowWinDialog: (state: boolean) => void;
  setShowStartDialog: (state: boolean) => void;
  prepareGame: () => void;
};

const WinDialog = ({
  open,
  setShowWinDialog,
  setShowStartDialog,
  prepareGame,
}: WinDialog) => {
  return (
    <Dialog open={open}>
      <DialogTitle>You won!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          You so smart!
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
