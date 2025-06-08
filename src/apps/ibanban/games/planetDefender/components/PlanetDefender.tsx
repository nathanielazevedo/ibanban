// functionality
import playSound from "../../../../../utils/playSound";
import { useState, useRef, useEffect } from "react";
import PlanetDefenderGame from "../utils/PlanetDefender";

// components
import Comet from "./Comet";
import earth from "../assets/earth.svg";
import WinDialog from "./WinDialog";
import CountDown from "./CountDown";
import StartDialog from "../../planetDefender/components/StartDialog";
import { Box, TextField, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type PlanetDefenderProps = {
  pdClass: PlanetDefenderGame;
};

const PlanetDefender = ({ pdClass }: PlanetDefenderProps) => {
  const [currentWord, setCurrentWord] = useState(pdClass.getNextWord());
  const [input, setInput] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const planetRef = useRef<HTMLImageElement | null>(null);
  const [showComet, setShowComet] = useState<boolean>(false);
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [borderColor, setBorderColor] = useState("lightblue");
  const [showCountDown, setShowCountDown] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (showComet && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showComet]);

  const startCountDown = () => {
    playSound("CountdownSound");
    setShowCountDown(true);
    setTimeout(() => {
      setShowCountDown(false);
      startGame();
    }, 3000);
  };

  const startGame = () => {
    setShowStartDialog(false);
    pdClass.restoreDeck();
    setCurrentWord(pdClass.getNextWord());
    setTimeout(() => {
      setShowComet(true);
      setInput("");
    }, 500);
  };

  const handleInputChange = async (text: string) => {
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
        await sleep(300);
        setCurrentWord(pdClass.getNextWord());
        setBorderColor("blue");
        setInput("");
        setShowComet(true);
      }
    }
  };

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
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
        }}
      >
        {showCountDown && <CountDown />}

        <CloseRoundedIcon
          fontSize="large"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: 2,
            cursor: "pointer",
          }}
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

        <Box
          component="img"
          ref={planetRef}
          src={earth}
          alt="planet"
          sx={{
            width: { xs: "120px", sm: "160px", md: "200px" },
            pt: { xs: "65px", sm: "0px" },
            height: "auto",
            alignSelf: "flex-end",
            mr: { xs: "0", sm: 2 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(to right, #4facfe, #00f2fe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "10px",
            }}
          >
            {currentWord.pinyin}
          </Typography>
          <TextField
            value={input}
            fullWidth
            size="medium"
            autoComplete="off"
            disabled={!showComet}
            inputRef={inputRef}
            onChange={(evt) => handleInputChange(evt.target.value)}
            inputProps={{
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: false,
              style: {
                padding: "12px",
                fontSize: "18px",
              },
            }}
            sx={{
              maxWidth: "90vw",
              input: {
                border: `2px solid ${borderColor}`,
                borderRadius: "8px",
                background: "#121212",
                color: "white",
              },
            }}
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
