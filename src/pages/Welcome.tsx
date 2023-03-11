import { Typography } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import LoadPage from "../components/welcome/LoadPage";
import MainPage from "../components/welcome/MainPage";
import MainPage2 from "../components/welcome/MainPage2";
import { useInterval } from "../hooks/useIntreval";
import logo from "../assets/logo.png";
import bg from "../assets/gamebg.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Overview from "./Overview";
import Spelling from "./Spelling";
import spell from "../assets/spell.png";
import review from "../assets/review.png";
import play from "../assets/play.png";
import back from "../assets/bg.jpeg";
import Panda from "../assets/panda.svg";

const Welcome = () => {
  const englishHello = "Hello - nǐ hǎo - 你好";
  const [englishIndex, setEnglishIndex] = useState(0);
  const getLoaded = () => {
    if (sessionStorage.getItem("loaded") == "true") {
      return true;
    } else {
      return false;
    }
  };
  const [showMainPage, setShowMainPage] = useState<boolean>(false);
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

  return (
    <>
      <LoadPage
        showMainPage={showMainPage}
        englishIndex={englishIndex}
        showIbanban={showIbanban}
        text={englishHello}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          maxWidth: "100vw",
          overflowX: "hidden",
          alignItems: "center",
          minHeight: "100vh",
          // marginTop: "200px",
        }}
      >
        <div
          style={{
            height: "81vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            {/* <Typography variant="h1">Welcome to&nbsp;</Typography> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Panda}
                width="154px"
                height="154px"
                style={{
                  marginRight: "30px",
                  // marginBottom: "40px",
                  paddingTop: "20px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  color="lightblue"
                  variant="h1"
                  fontWeight="bolder"
                  fontSize="100px"
                >
                  Ibanban
                </Typography>
                <Typography
                  // color="lightblue"
                  variant="h5"
                  fontWeight="bolder"
                  // pl="120px"
                >
                  &nbsp;Learn Mandarin with games.
                </Typography>
              </div>
            </div>
            <Canvas
              id="5"
              style={{ height: "400px", width: "400px", marginLeft: "200px" }}
            >
              <MainPage />
            </Canvas>
          </div>
        </div>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            background: `url(${bg}) no-repeat center center fixed`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography variant="h2" fontWeight="bolder">
              We blur the line between&nbsp;
            </Typography>
            <Typography color="lightblue" variant="h2" fontWeight="bolder">
              learning&nbsp;
            </Typography>
            <Typography variant="h2" fontWeight="bolder">
              and&nbsp;
            </Typography>
            <Typography color="lightblue" variant="h2" fontWeight="bolder">
              gaming.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              // marginTop: "130px",
              alignSelf: "center",
              justifySelf: "center",
            }}
          >
            <div style={{ borderRight: "2px solid white" }}>
              <Typography
                color="lightblue"
                variant="h2"
                fontWeight="bolder"
                p="50px"
              >
                LEARNING
              </Typography>
            </div>
            <Typography
              color="lightblue"
              variant="h2"
              fontWeight="bolder"
              p="50px"
            >
              GAMING
            </Typography>
          </div>
        </div>
        {/* demonstration */}
        <div
          style={{
            height: "100vh",
            width: "98vw",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="h3" pb="50px" color="lightblue">
              Review
            </Typography>
            <img src={review} style={{ height: "300px" }} />
          </div>
          <div
            style={{ border: "solid grey 1px", width: "1px", height: "500px" }}
          ></div>
          <div>
            <Typography variant="h3" pb="50px" color="lightblue">
              Practice
            </Typography>
            <img src={spell} style={{ height: "300px" }} />
          </div>
        </div>
        <div
          style={{
            height: "50vh",
            width: "100vw",
            background: `url(${back})  `,
            // backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Canvas
            style={
              {
                // height: "400px",
                // width: "400px",
                // paddingRight: "700px",
              }
            }
          >
            <MainPage2 />
          </Canvas>
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
