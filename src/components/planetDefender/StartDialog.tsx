import React from "react";
import {
  TextField,
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
} from "@mui/material";
import { Link } from "react-router-dom";

type WinDialog = {
  open: boolean;
  setDifficulty: (difficulty: string) => void;
  setShowStartDialog: (state: boolean) => void;
  prepareGame: () => void;
  difficulty: string;
};

const StartDialog = ({
  open,
  setDifficulty,
  setShowStartDialog,
  prepareGame,
  difficulty,
}: WinDialog) => {
  return (
    <Dialog
      open={open}
      fullWidth
      PaperProps={{ sx: { height: "500px", backgroundColor: "black" } }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        Planet Defender
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Translate the word before the comet hits the planet!
        </DialogContentText>
        <FormControl sx={{ marginTop: "35px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Difficulty
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={difficulty}
          >
            <FormControlLabel
              value="easy"
              control={<Radio />}
              label="Easy"
              onClick={() => setDifficulty("easy")}
            />
            <FormControlLabel
              value="hard"
              control={<Radio />}
              label="Hard"
              onClick={() => setDifficulty("hard")}
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ display: "flext", justifyContent: "space-between" }}>
        <Link to="/">
          <Button>Leave Game</Button>
        </Link>
        <Button
          onClick={() => {
            setShowStartDialog(false);
            prepareGame();
          }}
        >
          Start
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StartDialog;
