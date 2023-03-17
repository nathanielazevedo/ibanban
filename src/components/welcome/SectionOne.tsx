import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import earth from "../../assets/earth.png";
import logo from "../../assets/logo.svg";

const SectionOne = () => {
  return (
    <Box className="section-1-container fc">
      <Box className="pop-in">
        <Typography className="section-1-ibanban" color="lightblue">
          Learn Mandarin with games.
        </Typography>
        <Typography className="section-1-text">
          You bailed on the 20 other learning apps you downloaded. Now try
          Ibanban. Play games, learn Mandarin.
        </Typography>
        <Link to="/ibanban/deck/Hello/review" className="section-1-link">
          <Button className="section-1-button" variant="contained">
            Get Started
          </Button>
        </Link>
      </Box>
      <img src={logo} />
    </Box>
  );
};

export default SectionOne;
