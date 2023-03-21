import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const SectionOne = () => {
  return (
    <Box className="section-1-container fc">
      <Box className="pop-in">
        <Typography className="section-1-ibanban" color="lightblue">
          Learn Mandarin with games.
        </Typography>
        <Typography className="section-1-text">
        We offer a fun and interactive way to learn Mandarin Chinese 
        through games! Our games are designed to help you build your 
        vocabulary and gain confidence in using Mandarin Chinese
        </Typography>
        <Link to="/ibanban/deck/Hello/review" className="section-1-link">
          <Button className="section-1-button" variant="contained">
            Get Started
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SectionOne;
