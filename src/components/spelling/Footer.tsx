import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Slider, Stack, Tooltip, Typography } from "@mui/material";
import { SpellingGame } from "../../utils/spelling";

type Footer = {
  GameClass: SpellingGame;
  speechRate: number | number[];
  setSpeechRate: (rate: number | number[]) => void;
};

const Footer = ({ GameClass, speechRate, setSpeechRate }: Footer) => {
  return (
    <Box
      sx={{
        height: "70px",
        width: "100%",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        justifySelf: "flex-end",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 2rem",
      }}
    >
      <Typography>{GameClass.deckName}</Typography>
      <Stack
        spacing={2}
        direction="row"
        sx={{ width: "300px" }}
        alignItems="center"
      >
        <Tooltip title="Speech Rate">
          <Slider
            aria-label="Speech Rate"
            value={speechRate}
            onChange={(event: Event, newValue: number | number[]) => {
              if (event.type == "input") return;
              setSpeechRate(newValue);
            }}
            color="secondary"
            min={0.2}
            max={1}
            step={0.1}
          />
        </Tooltip>
      </Stack>
      <div style={{ display: "flex" }}>
        <ArrowLeftIcon
          onClick={() => GameClass.goPreviousWord()}
          sx={{ cursor: "pointer" }}
        />

        <Typography>
          {GameClass.currentWordIndex + 1 + " - " + GameClass.getDeckLength()}
        </Typography>
        <ArrowRightIcon
          onClick={() => GameClass.goNextWord()}
          sx={{ cursor: "pointer" }}
        />
      </div>
    </Box>
  );
};

export default Footer;
