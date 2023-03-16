import { Box, Button, Typography } from "@mui/material";
import earth from "../../assets/earth.png";

const SectionOne = () => {
  return (
    <Box className="section-1-container fc">
      <Box className="pop-in">
        <Typography className="section-1-ibanban" color="lightblue">
          Learn Mandarin with games.
        </Typography>
        <Typography className="section-1-text">
          Ibanban makes learning Mandarin fun. You bailed on the 20 other
          learning apps you downloaded. Play games, learn Mandarin. Try Ibanban.
        </Typography>
        <Button className="section-1-button" variant="contained">
          Get Started
        </Button>
      </Box>
      <img src={earth} />
    </Box>
  );
};

export default SectionOne;
