//functionality
import { register } from "../data";
import { useParams } from "react-router-dom";

//components
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Row from "../components/overview/Row";
import TableBody from "@mui/material/TableBody";
import Footer from "../components/overview/Footer";
import TableContainer from "@mui/material/TableContainer";

const Overview = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;
  const deck = register[deckName];

  return (
    <>
      <Box className="overview-container">
        <TableContainer
          component={Paper}
          variant="outlined"
          className="overview-table"
        >
          <Table>
            <TableBody>
              {deck.map((word, i) => (
                <Row key={i} word={word} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer deckName={deckName} deckLength={deck.length} />
    </>
  );
};

export default Overview;
