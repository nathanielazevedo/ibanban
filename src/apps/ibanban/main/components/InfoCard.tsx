//components
import { Deck } from "../../data";
import { Box, Paper, Typography } from "@mui/material";

const WordCard = ({ deck }: { deck: Deck }) => {
  return (
    <>
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
            Name: {deck.name}
          </Typography>
        </Box>
      </Paper>
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
            Length: {deck.words.length}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default WordCard;
