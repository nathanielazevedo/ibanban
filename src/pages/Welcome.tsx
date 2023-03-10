import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import LoadPage from "../components/welcome/LoadPage";
import MainPage from "../components/welcome/MainPage";
import { useInterval } from "../hooks/useIntreval";

const Welcome = () => {
  const englishHello = "Hello - nǐ hǎo - 你好";
  const [englishIndex, setEnglishIndex] = useState(1);
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
      <Canvas style={{ height: "500px", width: "500px" }}>
        <MainPage />
      </Canvas>
    </>
  );
};

export default Welcome;
