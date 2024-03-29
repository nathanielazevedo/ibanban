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
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      fullWidth
      sx={{ zIndex: "5501" }}
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
          <Typography mt="20px">Allow voice speech</Typography>
          <Switch onChange={(evt) => speak("你好")} />
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ display: "flext", justifyContent: "space-between" }}>
        <Button onClick={() => navigate(-1)}>Leave Game</Button>

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
