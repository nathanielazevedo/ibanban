//functionality
import { register } from "../data";
import { useParams } from "react-router-dom";

//components
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Row from "../components/overview/Row";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Footer from "../components/overview/Footer";

const Overview = () => {
  const { deckName } = useParams();
  const deck = register[deckName ?? ""];

  return (
    <>
      <div className="overview-container">
        <TableContainer
          component={Paper}
          variant="outlined"
          className="overview-table"
        >
          <Table>
            <TableBody>
              {deck && deck.map((word, i) => <Row key={i} word={word} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer deckName={deckName ?? ""} deckLength={deck.length} />
    </>
  );
};

export default Overview;
