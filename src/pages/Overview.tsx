import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Row from "../components/overview/Row";
import { register } from "../data";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Overview = () => {
  const { deckName } = useParams();
  const deck = register[deckName ?? ""];
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "93%",
        }}
      >
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{
            border: "none",
            width: "50vw",
            paddingTop: "30px",
            paddingBottom: "50px",
            overflowY: "scroll",
            flex: "1",
          }}
        >
          <Table>
            <TableBody>
              {deck && deck.map((word) => <Row word={word} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Box
        sx={{
          height: "70px",
          maxHeight: "70px",
          width: "100%",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          justifySelf: "flex-end",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 2rem",
          position: "sticky",
          bottom: "0",
          backgroundColor: "#1a1a1a",
        }}
      >
        <Typography>{deckName}</Typography>
        <Typography>{deck.length}</Typography>
      </Box>
    </>
  );
};

export default Overview;
