//functionality
import { speak } from "../../utils/speak";

//components
import TableRow from "@mui/material/TableRow";
import Cell from "./Cell";

export type WordType = {
  word: {
    chinese: string;
    english?: string;
    pinyin: string;
  };
};

const Row = ({ word }: { word: WordType }) => {
  return (
    <TableRow className="pointer" onClick={() => speak(word.word.chinese)}>
      <Cell word={word.word.english} />
      <Cell word={word.word.pinyin} />
      <Cell word={word.word.chinese} />
    </TableRow>
  );
};

export default Row;
