import { useState, useContext, useRef } from "react";
import { TextField } from "@mui/material";
import { GameContext } from "../../pages/PlanetDefenderWrapper";
//components
import Comet from "./Comet";
import WinDialog from "./WinDialog";
import StartDialog from "./StartDialog";
//assets
import Win from "../../assets/win.wav";
import Good from "../../assets/good.wav";
import playSound from "../../utils/playSound";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CountDown from "./CountDown";
import Footer from "./Footer";
import MainPage from "../welcome/MainPage";
import { Canvas } from "@react-three/fiber";
import bg from "../../assets/bg.jpeg";
import { useInterval } from "../../hooks/useIntreval";
import Loading from "./Loading";

const PlanetDefender = () => {
  const context = useContext(GameContext);
  if (!context) return <></>;
  const [currentWord, setCurrentWord] = useState(context.getNextWord());
  const [showComet, setShowComet] = useState<boolean>(false);
  const [input, setInput] = useState("");
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [borderColor, setBorderColor] = useState("lightblue");
  const [difficulty, setDifficulty] = useState("easy");
  const [showCountDown, setShowCountDown] = useState(false);
  const planetRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useInterval(
    () => {
      setCount((o) => o + 1);
    },
    count > 3 ? null : 1000
  );

  // starts countdown
  const startCountDown = () => {
    setShowCountDown(true);
    setTimeout(() => {
      setShowCountDown(false);
      startGame();
    }, 3000);
  };

  // starts game
  const startGame = () => {
    setShowStartDialog(false);
    context.restoreDeck();
    setCurrentWord(context.getNextWord());
    setTimeout(() => {
      setShowComet(true);
      setInput("");
    }, 500);
  };

  // Inputting characters into bar
  const handleInputChange = (text: string) => {
    setInput(text);
    if (context.checkWord(text)) {
      context.shift();
      setShowComet(false);
      if (context.isEmpty()) {
        setShowWinDialog(true);
        playSound(Win);
      } else {
        setBorderColor("green");
        playSound(Good);
        setCurrentWord(context.getNextWord());
        setTimeout(() => {
          setBorderColor("black");
          setInput("");
          setShowComet(true);
        }, 500);
      }
    }
  };

  // comet hit the planet
  const handleWrong = () => {
    setBorderColor("red");
    setShowComet(false);
    setInput("");
    context.shiftPush();
    setCurrentWord(context.getNextWord());
    setTimeout(() => {
      setBorderColor("black");
      setShowComet(true);
    }, 500);
  };

  // const CometMemo = useMemo(() => {
  //   return (
  //     <Comet
  //       text={currentWord}
  //       handleWrong={handleWrong}
  //       difficulty={difficulty}
  //       planetRef={planetRef.current}
  //     />
  //   );
  // }, [currentWord]);

  return (
    <>
      <div
        style={{
          // height: "100%",
          // maxWidth: "100%",
          background: `url(${bg}) repeat`,
          // backgroundSize: "cover",
          // imageRendering: "-webkit-optimize-contrast",
          backgroundPosition: "50% 50%",
          position: "absolute",
          zIndex: "5000",
          bottom: "0",
          height: "100vh",
          width: "100%",
          // backgroundColor: "black",
        }}
      >
        {showCountDown ? <CountDown /> : null}
        {showComet && (
          <Comet
            text={currentWord ?? "ni hao"}
            handleWrong={handleWrong}
            difficulty={difficulty}
            planetRef={planetRef.current}
          />
        )}

        {/* // <div
          //   ref={planetRef}
          //   style={{
          //     height: "500px",
          //     width: "500px",
          //     position: "absolute",
          //     top: "270px",
          //     left: "100px",
          //   }}
          // >
          //   <Canvas>
          //     <directionalLight position={[0, 0, 5]} />
          //     <Scene />
          //   </Canvas>
          // </div>
          // </Comet> */}
        <div
          ref={planetRef}
          className="planet"
          style={{ height: "500px", width: "500px" }}
        >
          <Canvas>
            <MainPage />
          </Canvas>
        </div>
        <Footer stack={context}>
          <CloseRoundedIcon
            sx={{
              fontSize: "75px",
              color: "white",
              paddingRight: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowStartDialog(true);
              setShowComet(false);
            }}
          />
          <TextField
            id="planet-defender-text-field"
            onChange={(evt) => handleInputChange(evt.target.value)}
            value={input}
            focused={showComet}
            inputRef={(input) => input && input.focus()}
            autoFocus={showComet}
            autoComplete={"off"}
            sx={{ border: `solid ${borderColor} 1px`, borderRadius: "5px" }}
            disabled={!showComet}
          />
        </Footer>
      </div>

      <Loading className={count > 3 ? "dropPage" : ""} />
      <WinDialog
        open={showWinDialog}
        setShowWinDialog={setShowWinDialog}
        setShowStartDialog={setShowStartDialog}
        prepareGame={startCountDown}
      />

      <StartDialog
        open={showStartDialog}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setShowStartDialog={setShowStartDialog}
        prepareGame={startCountDown}
      />
    </>
  );
};

export default PlanetDefender;
