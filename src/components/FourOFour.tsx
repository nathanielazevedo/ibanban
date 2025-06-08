import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "./Button";

const FourOFour = () => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">You lost?</Typography>
      <Link to="/map" style={{ marginTop: "4rem" }}>
        <Button text="Go Home" />
      </Link>
    </div>
  );
};

export default FourOFour;
