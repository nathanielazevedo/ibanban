import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import playSound from "../../utils/playSound";
import { speak } from "../../utils/speak";
import lose from "../../assets/lose.wav";
import { WordType } from "../overview/Row";
import bg from "../../assets/asteroid.png";

type Comet = {
  text: WordType;
  handleWrong: () => void;
  difficulty: string;
  planetRef: HTMLDivElement | null;
};

const Comet = ({ text, handleWrong, difficulty, planetRef }: Comet) => {
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
        setTimeout(() => {
          handleWrong();
        }, 700);
      }
    },
  }));
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      speak(text.word.chinese);
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
        // background: `radial-gradient(circle at 5% 15%, pink 1px,
        //     gray 4%,darkgray 60%, black 100%)`,
        background: `url(${bg}) repeat center`,
        backgroundSize: "cover",
        filter: "brightness(200%)",
        ...spring,
      }}
    >
      {difficulty == "easy" && text?.word?.pinyin}
    </animated.div>
  );
};

export default Comet;
