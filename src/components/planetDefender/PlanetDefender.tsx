//functionality
import { useState, useRef, useMemo } from "react";
import { TextField } from "@mui/material";
import PlanetDefenderGame from "../../utils/PlanetDefender";

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
import EarthThreeD from "../welcome/EarthThreeD";
import { Canvas } from "@react-three/fiber";
import bg from "../../assets/bg.jpeg";
import Loading from "./Loading";
import CountdownSound from "../../assets/countdown.wav";

type PlanetDefender = {
  pdClass: PlanetDefenderGame;
};

const PlanetDefender = ({ pdClass }: PlanetDefender) => {
  const [currentWord, setCurrentWord] = useState(pdClass.getNextWord());
  const [input, setInput] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const planetRef = useRef<HTMLDivElement | null>(null);

  const [showComet, setShowComet] = useState<boolean>(false);
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [borderColor, setBorderColor] = useState("lightblue");
  const [showCountDown, setShowCountDown] = useState(false);

  // Start countdown
  const startCountDown = () => {
    playSound(CountdownSound);
    setShowCountDown(true);
    setTimeout(() => {
      setShowCountDown(false);
      startGame();
    }, 3000);
  };

  // Start game
  const startGame = () => {
    setShowStartDialog(false);
    pdClass.restoreDeck();
    setCurrentWord(pdClass.getNextWord());
    setTimeout(() => {
      setShowComet(true);
      setInput("");
    }, 500);
  };

  // Handle Inputting characters
  const handleInputChange = (text: string) => {
    setInput(text);
    if (pdClass.checkWord(text)) {
      pdClass.shift();
      setShowComet(false);
      if (pdClass.isEmpty()) {
        setShowWinDialog(true);
        playSound(Win);
      } else {
        setBorderColor("green");
        playSound(Good);
        setCurrentWord(pdClass.getNextWord());
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
    pdClass.shiftPush();
    setCurrentWord(pdClass.getNextWord());
    setTimeout(() => {
      setBorderColor("black");
      setShowComet(true);
    }, 500);
  };

  const Earth = useMemo(() => {
    return <EarthThreeD />;
  }, []);

  return (
    <>
      <div
        style={{
          background: `url(${bg}) repeat`,
          zIndex: "5000",
          height: "calc(100vh - 70px)",
          width: "100%",
        }}
      >
        {showCountDown ? <CountDown /> : null}
        {showComet && (
          <Comet
            word={currentWord}
            handleWrong={handleWrong}
            difficulty={difficulty}
            planetRef={planetRef.current}
          />
        )}
        <div
          ref={planetRef}
          className="planet"
          style={{ height: "500px", width: "500px" }}
        >
          <Canvas>{Earth}</Canvas>
        </div>
        <Footer stack={pdClass}>
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
      <Loading />
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
