//functionality
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import playSound from "../../utils/playSound";
import { speak } from "../../utils/speak";
import { WordType } from "../../data";

//assets
import lose from "../../assets/lose.wav";
import bg from "../../assets/asteroid.png";

type Comet = {
  word: WordType;
  handleWrong: () => void;
  difficulty: string;
  planetRef: HTMLDivElement | null;
};

const Comet = ({ word, handleWrong, difficulty, planetRef }: Comet) => {
  const firstRender = useRef(true);
  const [hit, setHit] = useState(false);

  const [spring] = useSpring(() => ({
    from: { x: -50 },
    to: { x: planetRef ? planetRef.getBoundingClientRect().left - 55 : 500 },
    config: {
      duration: difficulty == "easy" ? 7000 : 5000,
    },
    onRest: (x) => {
      if (x.finished) {
        setHit(true);
        playSound(lose);
        handleWrong();
      }
    },
  }));
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      speak(word.word.chinese);
    }
  }, []);

  return (
    <animated.div
      className={hit ? "wobble" : "shake"}
      style={{
        width: 150,
        height: 150,
        position: "absolute",
        top: "420px",
        borderRadius: "50%",
        color: "white",
        display: "flex",
        fontSize: "20px",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${bg}) repeat center`,
        backgroundSize: "cover",
        filter: "brightness(200%)",
        ...spring,
      }}
    >
      {difficulty == "easy" && word.word.pinyin}
    </animated.div>
  );
};

export default Comet;
