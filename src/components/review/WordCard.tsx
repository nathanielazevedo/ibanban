//functionality
import { speak } from "../../utils/speak";

//components
import { WordType } from "../../data";
import { Box, Paper, Tooltip, Typography } from "@mui/material";

//assets
import HearingIcon from "@mui/icons-material/Hearing";

const WordCard = ({ word }: { word: WordType }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        marginBottom: "20px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        width="100%"
        sx={{
          width: "100%",
        }}
      >
        <Typography color="white" variant="h5">
          {word.word.pinyin}
        </Typography>
        <Typography color="grey" variant="h5">
          {word.word.english}
        </Typography>
      </Box>
      <Tooltip title="Hear word" placement="top">
        <HearingIcon
          className="hearing-icon"
          onClick={() => speak(word.word.chinese, 0.5)}
        />
      </Tooltip>
    </Paper>
  );
};

export default WordCard;
