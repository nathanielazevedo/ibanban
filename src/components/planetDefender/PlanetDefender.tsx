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
    context.shiftPush();
    setCurrentWord(context.getNextWord());
    setTimeout(() => {
      setBorderColor("blue");
      setShowComet(true);
    }, 500);
  };

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        {showCountDown ? <CountDown /> : null}
        <CloseRoundedIcon
          sx={{
            fontSize: "75px",
            color: "white",
            position: "absolute",
            left: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowStartDialog(true);
            setShowComet(false);
          }}
        />
        {showComet && (
          <Comet
            text={currentWord}
            handleWrong={handleWrong}
            difficulty={difficulty}
            planetRef={planetRef.current}
          />
        )}
        <div ref={planetRef} className="planet" />
        <Footer stack={context}>
          <TextField
            id="planet-defender-text-field"
            onChange={(evt) => handleInputChange(evt.target.value)}
            value={input}
            focused={showComet}
            inputRef={(input) => input && input.focus()}
            autoFocus={showComet}
            autoComplete={"off"}
            sx={{ border: `solid ${borderColor} 1px` }}
            disabled={!showComet}
          />
        </Footer>
      </div>

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
