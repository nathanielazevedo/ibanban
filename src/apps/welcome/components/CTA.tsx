import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { Box } from "@mui/material";

const CTA = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "60px",
      // marginBottom: "60px",
      padding: "40px",
      // borderRadius: "20px",
      background: "linear-gradient(to right, #000000,rgb(34, 76, 112))",
      // boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    }}
  >
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 600,
          fontFamily: "Poppins, sans-serif",
          color: "white",
          margin: 0,
        }}
      >
        Go play some games now!
      </h2>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0",
        marginTop: "40px",
      }}
    >
      <Link to="/map">
        <Button />
      </Link>
    </div>
  </Box>
);

export default CTA;
