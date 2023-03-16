//functionality
import playSound from "../../utils/playSound";
import { useState, useRef, useMemo } from "react";
import PlanetDefenderGame from "../../utils/PlanetDefender";

//components
import Comet from "./Comet";
import Footer from "./Footer";
import Loading from "./Loading";
import WinDialog from "./WinDialog";
import CountDown from "./CountDown";
import StartDialog from "./StartDialog";
import { Box, TextField } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type PlanetDefender = {
  pdClass: PlanetDefenderGame;
};

const PlanetDefender = ({ pdClass }: PlanetDefender) => {
  const [currentWord, setCurrentWord] = useState(pdClass.getNextWord());
  const [input, setInput] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const planetRef = useRef<HTMLCanvasElement | null>(null);

  const [showComet, setShowComet] = useState<boolean>(false);
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [borderColor, setBorderColor] = useState("lightblue");
  const [showCountDown, setShowCountDown] = useState(false);

  // Start countdown
  const startCountDown = () => {
    playSound("CountdownSound");
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
        playSound("Win");
      } else {
        setBorderColor("green");
        playSound("Good");
        setCurrentWord(pdClass.getNextWord());
        setTimeout(() => {
          setBorderColor("blue");
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

  return (
    <>
      <Box className="planet-defender-container">
        {showCountDown ? <CountDown /> : null}
        {showComet && (
          <Comet
            word={currentWord}
            handleWrong={handleWrong}
            difficulty={difficulty}
            planetRef={planetRef.current}
          />
        )}
        {/* <Canvas ref={planetRef} className="planet">
          {Earth}
        </Canvas> */}
        <Footer stack={pdClass}>
          <CloseRoundedIcon
            className="planet-defender-close"
            onClick={() => {
              setShowStartDialog(true);
              setShowComet(false);
            }}
          />
          <TextField
            value={input}
            autoComplete="off"
            disabled={!showComet}
            id="planet-defender-text-field"
            inputRef={(input) => input && input.focus()}
            onChange={(evt) => handleInputChange(evt.target.value)}
            sx={{ border: `solid ${borderColor} 1px`, borderRadius: "5px" }}
          />
        </Footer>
      </Box>
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
