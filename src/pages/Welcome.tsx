//functionality
import { useMemo } from "react";

//components
import { Canvas } from "@react-three/fiber";
import {
  Typography,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Card,
} from "@mui/material";
import EarthThreeD from "../components/welcome/EarthThreeD";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";

//assets
import bg from "../assets/gamebg.jpeg";
import Panda from "../assets/panda.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import planetDefender from "../assets/planetDefender.png";
import spellingNinja from "../assets/spellingNinja.png";

const Welcome = () => {
  // On scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("game-1");
      }
    });
  });

  const Earth = useMemo(() => {
    return <EarthThreeD />;
  }, []);

  // Tell the observer which elements to track
  setTimeout(() => {
    const gameCard = document.querySelector(".gameCard");
    if (gameCard) observer.observe(gameCard);
    const stepper = document.querySelector(".stepper");
    if (stepper) observer.observe(stepper);
  }, 500);

  return (
    <>
      <div>
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
          <Canvas
            className="pop"
            style={{
              height: "400px",
              maxWidth: "400px",
            }}
          >
            {Earth}
          </Canvas>
        </div>
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
          <div
            style={{
              maxWidth: "65vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // borderBottom: "solid grey 2px",
            }}
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
                Learning with Ibanban is fun, and it works! With quick,
                bite-sized voabulary decks, your vocabulary will improve in no
                time. Play games that reinforce your learning. Enjoy!
              </Typography>
            </div>
          </div>
          <div className="gameCard" style={{ display: "flex", gap: "100px" }}>
            <Card
              sx={{
                maxWidth: 275,
                display: "flex",
                alignItems: "center",
                padding: "30px 0",
              }}
            >
              <img src={spellingNinja} style={{ width: "200px" }} />
            </Card>
            <Card sx={{ maxWidth: 275, display: "flex", alignItems: "center" }}>
              <img src={planetDefender} style={{ width: "200px" }} />
            </Card>
            <Card sx={{ maxWidth: 275, display: "flex", alignItems: "center" }}>
              <img src={planetDefender} style={{ width: "200px" }} />
            </Card>
          </div>
        </div>
        {/* demonstration */}
        <div
          style={{
            height: "50vh",

            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box>
            <Stepper alternativeLabel activeStep={2} className="stepper">
              {[
                {
                  title: "Learn",
                  description:
                    "View our list of curarated Mandarin words. Starting from the basics",
                  icon: LocalLibraryIcon,
                },
                {
                  title: "Practice",
                  description: "Practice spelling. No pressure, do your best.",
                  icon: SpellcheckIcon,
                },
                {
                  title: "Play",
                  description:
                    "Have fun with using your newly learned vocabulary. Play games.",
                  icon: SportsEsportsIcon,
                },
              ].map((label, i) => (
                <Step key={i} sx={{ fontSize: "50px", padding: "0 30px" }}>
                  <StepLabel
                    sx={{ fontSize: "50px" }}
                    StepIconComponent={label.icon}
                  >
                    <Typography color="lightblue" variant="h5">
                      {label.title}
                    </Typography>
                    <Typography style={{ color: "white", maxWidth: "300px" }}>
                      {label.description}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        {/* footer */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              height: "200px",
              width: "85vw",
              borderTop: "solid rgba(255, 255, 255, 0.12) 1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 100px",
            }}
          >
            <div>
              <Typography variant="h5" color="lightblue" fontWeight="bolder">
                Ibanban
              </Typography>
              <Typography style={{ fontStyle: "italic" }}>
                © Copyright 2022
              </Typography>
              <Typography style={{ fontStyle: "italic" }}>
                All rights reserved.
              </Typography>
            </div>
            <div>
              <LinkedInIcon style={{ fontSize: "45px", marginRight: "20px" }} />
              <GitHubIcon style={{ fontSize: "45px" }} />
            </div>
            <img
              src={Panda}
              width="104px"
              height="104px"
              style={{ paddingTop: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
