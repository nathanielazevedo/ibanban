//functionality
import { speak } from "../../utils/speak";

//components
import TableRow from "@mui/material/TableRow";
import Cell from "./Cell";
import { WordType } from "../../data";
import { Paper } from "@mui/material";

const Row = ({ word }: { word: WordType }) => {
  return (
    <Paper sx={{ padding: "20px", margin: "20px" }}>
      <TableRow
        className="pointer"
        onClick={() => speak(word.word.chinese)}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Cell word={word.word.english} type={1} />
        <Cell word={word.word.pinyin} type={2} />
      </TableRow>
    </Paper>
  );
};

export default Row;
