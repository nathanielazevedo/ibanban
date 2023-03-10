import { Typography } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import LoadPage from "../components/welcome/LoadPage";
import MainPage from "../components/welcome/MainPage";
import { useInterval } from "../hooks/useIntreval";

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
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ display: "flex" }}>
          <Typography variant="h1">Welcome to&nbsp;</Typography>
          <Typography color="lightblue" variant="h1" fontWeight="bolder">
            Ibanban
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography variant="h3">We blur the line between&nbsp;</Typography>
          <Typography color="lightblue" variant="h3" fontWeight="bolder">
            learning&nbsp;
          </Typography>
          <Typography variant="h3">and&nbsp;</Typography>
          <Typography color="lightblue" variant="h3" fontWeight="bolder">
            gaming.
          </Typography>
        </div>
        <Canvas style={{ height: "400px", width: "400px" }}>
          <MainPage />
        </Canvas>
      </div>
    </>
  );
};

export default Welcome;
