import { useState } from "react";
import { register } from "../data";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";

//components
import Comet from "../components/planetDefender/Comet";
import WinDialog from "../components/planetDefender/WinDialog";
import StartDialog from "../components/planetDefender/StartDialog";

//assets
import bg from "../assets/bg.webp";
import Win from "../assets/win.wav";
import Good from "../assets/good.wav";
import playSound from "../utils/playSound";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CountDown from "../components/planetDefender/CountDown";
// You need to implement a stack data structure

type PlanetDefender = {
  word: {
    chinese: string;
    pinyin: string;
    english: string;
  };
}[];

const Patterns = () => {
  const { deckName } = useParams();
  const deck = register[deckName ?? ""] as PlanetDefender;

  const [playDeck, setPlayDeck] = useState<PlanetDefender>([]);
  const wordInfo = playDeck[0];
  const [playing, setPlaying] = useState<boolean>(false);

  const [input, setInput] = useState("");
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [difficulty, setDifficulty] = useState("easy");
  const [showCountDown, setShowCountDown] = useState(false);

  const handleWrong = () => {
    setPlaying(false);
    setInput("");

    // remove and append wrong word
    const wrong = playDeck.shift();
    setPlayDeck((o: any) => [...o, wrong]);
    setTimeout(() => {
      setPlaying(true);
    }, 500);
  };

  const handleChange = (text: string) => {
    setInput(text);
    // word is right
    if (text === wordInfo?.word?.english) {
      setPlaying(false);
      let num = 0;
      setPlayDeck((o: any) => {
        if (num == 0) {
          num = num + 1;
          o.shift();
        }
        // game is won
        if (o.length == 0) {
          setShowWinDialog(true);
          playSound(Win);
          return [];
        } else {
          // got the word right, but game is not over
          playSound(Good);
          setTimeout(() => {
            setInput("");
            setPlaying(true);
          }, 500);
          return [...o];
        }
      });
    }
  };

  // really starts game
  const startGame = () => {
    setPlaying(false);
    setShowStartDialog(false);
    setTimeout(() => {
      setPlaying(true);
      setInput("");
    }, 500);
  };

  // sets countdown
  const prepareGame = () => {
    setShowCountDown(true);
    // setPlayDeck(structuredClone(deck));
    setTimeout(() => {
      setShowCountDown(false);
      startGame();
    }, 3000);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: `url(${bg}) no-repeat center center fixed`,
          height: "100vh",
          backgroundSize: "cover",
          width: "100vw",
        }}
      >
        {showCountDown ? <CountDown /> : null}
        <CloseRoundedIcon
          className="planet-defender-close"
          onClick={() => {
            setShowStartDialog(true);
            setPlaying(false);
          }}
        />
        {playing && (
          <Comet
            text={playDeck && playDeck[0]}
            handleWrong={handleWrong}
            difficulty={difficulty}
          />
        )}
        <div className="planet" />
        <TextField
          id="planet-defender-text-field"
          onChange={(evt) => handleChange(evt.target.value)}
          value={input}
          sx={{ position: "absolute", bottom: 100, right: 800 }}
        />
      </div>

      <WinDialog
        open={showWinDialog}
        setShowWinDialog={setShowWinDialog}
        setShowStartDialog={setShowStartDialog}
        prepareGame={prepareGame}
      />

      <StartDialog
        open={showStartDialog}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setShowStartDialog={setShowStartDialog}
        prepareGame={prepareGame}
      />
    </>
  );
};

export default Patterns;
