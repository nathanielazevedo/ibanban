import { Box, Typography } from "@mui/material";
import planetDefender from "../../assets/planetDefender.png";
import spellingNinja from "../../assets/spellingNinja.png";
import Panda from "../../assets/panda.svg";

const SectionTwo = () => {
  return (
    <Box className="section-2-container">
      <Box className="section-2-top pop-in">
        <img src={Panda} className="section-2-panda" />
        <Box className="section-2-top-text">
          <Typography variant="h3">The best way to learn Mandarin.</Typography>
          <Typography variant="h5" pt="10px">
            Learning with Ibanban is fun, and it works! With quick, bite-sized
            voabulary decks, your vocabulary will improve in no time. Play games
            that reinforce your learning.
          </Typography>
        </Box>
      </Box>
      <Box className="section-2-games">
        <img src={spellingNinja} />
        <img src={planetDefender} />
        <img src={planetDefender} />
      </Box>
    </Box>
  );
};

export default SectionTwo;
