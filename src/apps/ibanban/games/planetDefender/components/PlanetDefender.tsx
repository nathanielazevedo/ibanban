//functionality
import playSound from "../../../../../utils/playSound";
import { useState, useRef } from "react";
import PlanetDefenderGame from "../utils/PlanetDefender";

//components
import Comet from "./Comet";
import earth from "../assets/earth.svg";
import WinDialog from "./WinDialog";
import CountDown from "./CountDown";
import StartDialog from "../../planetDefender/components/StartDialog";
import { Box, TextField } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch } from "react-redux";
import { setLevelCompleted } from "../../../../../state";

type PlanetDefender = {
  pdClass: PlanetDefenderGame;
};

const PlanetDefender = ({ pdClass }: PlanetDefender) => {
  const [currentWord, setCurrentWord] = useState(pdClass.getNextWord());
  const [input, setInput] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const planetRef = useRef<HTMLImageElement | null>(null);
  const dispatch = useDispatch();
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
        dispatch(setLevelCompleted());
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
      <Box className="h-[50vh] flex flex-col items-center justify-evenly relative">
        {showCountDown ? <CountDown /> : null}
        <CloseRoundedIcon
          className="absolute top-0 left-0 m-5 cursor-pointer"
          fontSize="large"
          onClick={() => {
            setShowStartDialog(true);
            setShowComet(false);
          }}
        />
        {showComet && (
          <Comet
            word={currentWord}
            handleWrong={handleWrong}
            difficulty={difficulty}
            planetRef={planetRef.current}
          />
        )}
        <img className="h-64 w-64 self-end r-5" ref={planetRef} src={earth} />
        <Box className="flex flex-col items-center">
          <h5 className="text-gradient text-[20px] pb-[10px]">
            {currentWord.pinyin}
          </h5>
          <TextField
            value={input}
            autoComplete="off"
            disabled={!showComet}
            id="border-2 outline-none"
            inputRef={(input) => input && input.focus()}
            onChange={(evt) => handleInputChange(evt.target.value)}
          />
        </Box>
      </Box>
      <WinDialog
        open={showWinDialog}
        setShowWinDialog={setShowWinDialog}
        setShowStartDialog={setShowStartDialog}
        prepareGame={startCountDown}
        pdClass={pdClass}
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
