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
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const backRoute = splitLocation.slice(0, 5).join("/");

  return (
    <Dialog
      open={open}
      fullWidth
      sx={{ zIndex: "5000" }}
      PaperProps={{
        sx: { height: "700px", backgroundColor: "black" },
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
            name="row-radio-buttons-group"
            defaultValue={difficulty}
            sx={{ paddingTop: "20px", marginLeft: "20px" }}
          >
            <FormControlLabel
              value="easy"
              control={<Radio />}
              label="Easy"
              onClick={() => setDifficulty("easy")}
            />
            <Typography ml="20px">
              Pinyin word will be shown on the comet.
            </Typography>
            <Typography ml="20px">
              You will have 7 seconds to input the correct response.
            </Typography>
            <FormControlLabel
              value="hard"
              control={<Radio />}
              label="Hard"
              onClick={() => setDifficulty("hard")}
              sx={{ marginTop: "20px" }}
            />
            <Typography ml="20px">
              Pinyin word will be not shown on the comet.
            </Typography>
            <Typography ml="20px">
              You will have 5 seconds to input the correct response.
            </Typography>
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ display: "flext", justifyContent: "space-between" }}>
        <Link to={backRoute}>
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
