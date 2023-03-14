import { Button, Typography } from "@mui/material";
import earth from "../../assets/earth.png";

const SectionOne = () => {
  console.log("hello");
  return (
    <div className="overview-1-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="pop-in"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="h1" color="lightblue" fontWeight="bold">
              Ibanban
            </Typography>
            <Typography variant="h5">
              &nbsp;Learn Mandarin with games.
            </Typography>
            <Button
              variant="contained"
              style={{
                padding: "10px",
                justifySelf: "flex-start",
                width: "100%",
                marginTop: "20px",
                fontSize: "20px",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <img src={earth} style={{ width: "400px", maxHeight: "400px" }} />
    </div>
  );
};

export default SectionOne;
