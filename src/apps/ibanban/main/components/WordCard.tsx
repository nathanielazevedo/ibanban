//functionality
import { speak } from "../../../../utils/speak";

//components
import { Word } from "../../data";
import { Box, Paper, Tooltip, Typography } from "@mui/material";

//assets
import HearingIcon from "@mui/icons-material/Hearing";

const WordCard = ({ word }: { word: Word }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "#1a1a1a",
      }}
    >
      <Box>
        <Typography color="white" variant="h5">
          {word.pinyin}
        </Typography>
        <Typography color="grey.500" variant="h5" sx={{ paddingTop: "8px" }}>
          {word.english}
        </Typography>
      </Box>
      <Tooltip title="Hear word" placement="top">
        <HearingIcon
          onClick={() => speak(word.chinese, 0.5)}
          sx={{
            cursor: "pointer",
            color: "#90caf9", // optional: color highlight
            "&:hover": { color: "#42a5f5" },
          }}
        />
      </Tooltip>
    </Paper>
  );
};

export default WordCard;
