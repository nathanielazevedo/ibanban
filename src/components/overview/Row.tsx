import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import { speak } from "../../utils/speak";
import TableRow from "@mui/material/TableRow";

export type WordType = {
  word: {
    chinese: string;
    english?: string;
    pinyin: string;
  };
};

const Row = ({ word }: { word: WordType }) => {
  return (
    <TableRow
      onClick={() => speak(word.word.chinese)}
      sx={{ cursor: "pointer" }}
    >
      <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
        <Typography variant="h6">{word.word.english}</Typography>
      </TableCell>
      <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
        <Typography variant="h6">{word.word.pinyin}</Typography>
      </TableCell>
      <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
        <Typography variant="h6">{word.word.chinese}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default Row;
