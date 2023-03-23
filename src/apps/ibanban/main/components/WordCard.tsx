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
      className="mt-[20px] p-[20px] flex items-center justify-between"
    >
      <Box>
        <Typography color="white" variant="h5">
          {word.pinyin}
        </Typography>
        <Typography color="grey" variant="h5" className="pt-2">
          {word.english}
        </Typography>
      </Box>
      <Tooltip title="Hear word" placement="top">
        <HearingIcon
          className="hearing-icon cursor-pointer"
          onClick={() => speak(word.chinese, 0.5)}
        />
      </Tooltip>
    </Paper>
  );
};

export default WordCard;
