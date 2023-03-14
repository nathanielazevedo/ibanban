//functionality
import { useMemo, useState } from "react";
import { useInterval } from "../hooks/useIntreval";

//components
import { Canvas } from "@react-three/fiber";
import { Typography, Chip, Button } from "@mui/material";
import LoadPage from "../components/welcome/LoadPage";
import CometThreeD from "../components/welcome/CometThreeD";
import EarthThreeD from "../components/welcome/EarthThreeD";

//assets
import bg from "../assets/gamebg.jpeg";
import Panda from "../assets/panda.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Welcome = () => {
  const englishHello = "Hello - nǐ hǎo - 你好";
  const [englishIndex, setEnglishIndex] = useState(0);
  const getLoaded = () => {
    if (false) return true;
    return false;
  };
  const [showMainPage, setShowMainPage] = useState<boolean>(getLoaded());
  const [showIbanban, setShowIbanban] = useState(false);

  useInterval(
    () => {
      setEnglishIndex((o) => o + 1);
    },
    englishIndex < englishHello.length ? 150 : null
  );

  if (englishIndex >= englishHello.length && !showMainPage) {
    setTimeout(() => {
      setShowIbanban(true);
    }, 1000);
    setTimeout(() => {
      sessionStorage.setItem("loaded", "true");
      setShowMainPage(true);
    }, 2500);
  }

  // On scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("line-fade");
      }
    });
  });

  const Earth = useMemo(() => {
    return <EarthThreeD />;
  }, []);
  const Comet = useMemo(() => {
    return <CometThreeD />;
  }, []);

  // Tell the observer which elements to track
  const line = document.querySelector(".fade-line");
  if (line) observer.observe(line);

  return (
    <>
      <LoadPage
        showMainPage={showMainPage}
        englishIndex={englishIndex}
        showIbanban={showIbanban}
        text={englishHello}
      />
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
          }}
        >
          <div
            style={{
              maxWidth: "85vw",
              minHeight: "100vh",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography display="inline-block" variant="h3">
                We blur the line between&nbsp;
              </Typography>
              <Typography display="inline-block" color="lightblue" variant="h3">
                learning&nbsp;
              </Typography>
              <Typography display="inline-block" variant="h3">
                and&nbsp;
              </Typography>
              <Typography display="inline-block" color="lightblue" variant="h3">
                gaming.
              </Typography>
            </div>
            <div className="fade-line"></div>
          </div>
        </div>
        {/* demonstration */}
        <div
          style={{
            height: "100vh",
            width: "80vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              flexDirection: "column",
              gap: "100px",
            }}
          >
            <div>
              <Chip
                label={
                  <Typography variant="h6" color="lightblue">
                    1. Review
                  </Typography>
                }
              />
              <Typography style={{ padding: "20px" }}>
                View our list of curarated Mandarin words. Starting from the
                basics
              </Typography>
            </div>
            <div>
              <Chip
                label={
                  <Typography variant="h6" color="lightblue">
                    2. Practice
                  </Typography>
                }
              />
              <Typography style={{ padding: "20px" }}>
                Practice spelling. No pressure, do your best.
              </Typography>
            </div>
            <div>
              <Chip
                label={
                  <Typography variant="h6" color="lightblue">
                    3. Game
                  </Typography>
                }
              />
              <Typography style={{ padding: "20px" }}>
                Have fun with using your newly learned vocabulary. Play games.
              </Typography>
            </div>
          </div>
        </div>
        {/* footer */}
        <div
          style={{
            height: "200px",
            width: "99vw",
            borderTop: "solid rgba(255, 255, 255, 0.12) 1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 100px",
          }}
        >
          <div>
            <Typography variant="h5" color="lightblue">
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
    </>
  );
};

export default Welcome;
