import { Box, Slider, Stack, Tooltip, Typography } from "@mui/material";
import { SpellingGame } from "../../utils/spelling";

type Footer = {
  GameClass: SpellingGame;
  speechRate: number | number[];
  setSpeechRate: (rate: number | number[]) => void;
};

const Footer = ({ GameClass, speechRate, setSpeechRate }: Footer) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box className="overview-footer">
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
        <Typography>
          {GameClass.currentWordIndex + 1 + " - " + GameClass.getDeckLength()}
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
