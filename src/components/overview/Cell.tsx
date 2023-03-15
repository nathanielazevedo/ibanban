import { TableCell, Typography } from "@mui/material";

const Cell = ({ word, type }: { word: string | undefined; type: number }) => {
  return (
    <TableCell
      align="center"
      sx={{
        borderBottomWidth: "0px",
        width: "200px",
        margin: "0 20px",
        borderLeft: type == 2 ? "solid grey 3px" : "",
      }}
    >
      <Typography color={"white"} variant="h5">
        {word}
      </Typography>
    </TableCell>
  );
};

export default Cell;
