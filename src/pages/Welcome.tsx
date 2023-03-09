import { Typography } from "@mui/material";
import arrow from "../assets/arrow.png";

const Welcome = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={arrow}
        style={{
          transform: "rotate(80deg) scaleX(-1)",
          position: "absolute",
          top: 0,
          left: 70,
        }}
      />
      <Typography variant="h2" color="lightblue">
        Learn Mandarin with games.
      </Typography>
      <Typography variant="h5" pt="3rem" mb="10rem">
        Choose a deck from the left panel to get started
      </Typography>
    </div>
  );
};

export default Welcome;
