import { Card, Paper, Typography } from "@mui/material";
import planetDefender from "../../assets/planetDefender.png";
import spellingNinja from "../../assets/spellingNinja.png";
import bg from "../../assets/gamebg.jpeg";
import Panda from "../../assets/panda.svg";

const SectionTwo = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url(${bg}) no-repeat center center fixed`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Paper
        style={{
          maxWidth: "65vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
        elevation={0}
      >
        <img
          src={Panda}
          width="170px"
          height="170px"
          style={{
            marginRight: "30px",
            paddingTop: "20px",
          }}
        />
        <div>
          <Typography variant="h4" color="lightblue">
            The worlds #1 way to learn Mandarin.
          </Typography>
          <Typography variant="subtitle1" pt="10px">
            Learning with Ibanban is fun, and it works! With quick, bite-sized
            voabulary decks, your vocabulary will improve in no time. Play games
            that reinforce your learning. Enjoy!
          </Typography>
        </div>
      </Paper>
      <div className="gameCard" style={{ display: "flex", gap: "100px" }}>
        <Card
          elevation={0}
          sx={{
            maxWidth: 275,
            display: "flex",
            alignItems: "center",
            padding: "30px 0",
          }}
        >
          <img src={spellingNinja} style={{ width: "200px" }} />
        </Card>
        <Card
          elevation={0}
          sx={{ maxWidth: 275, display: "flex", alignItems: "center" }}
        >
          <img src={planetDefender} style={{ width: "200px" }} />
        </Card>
        <Card
          elevation={0}
          sx={{ maxWidth: 275, display: "flex", alignItems: "center" }}
        >
          <img src={planetDefender} style={{ width: "200px" }} />
        </Card>
      </div>
    </div>
  );
};

export default SectionTwo;
