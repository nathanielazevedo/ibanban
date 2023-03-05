import { Typography } from "@mui/material";

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
