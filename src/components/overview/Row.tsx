import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import { speak } from "../../utils/speak";
import TableRow from "@mui/material/TableRow";

const Row = ({ word }: { word: Record<any, any> }) => {
  return (
    <TableRow>
      <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
        <Typography variant="h6">{word.word.english}</Typography>
      </TableCell>
      <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
        <Typography variant="h6">{word.word.pinyin}</Typography>
      </TableCell>
      <TableCell
        align="center"
        sx={{ cursor: "pointer", borderBottomWidth: "0.01px" }}
        onClick={() => speak(word.word.chinese)}
      >
        <Typography variant="h6">{word.word.chinese}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default Row;
