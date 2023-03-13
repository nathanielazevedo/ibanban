import { TableCell, Typography } from "@mui/material";

const Cell = ({ word }: { word: string | undefined }) => {
  return (
    <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
      <Typography variant="h6">{word}</Typography>
    </TableCell>
  );
};

export default Cell;
