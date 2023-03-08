import { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { colors } from "../../styles/PlanetDefender";
import playSound from "../../utils/playSound";
import { speak } from "../../utils/speak";
import lose from "../../assets/lose.wav";

type Comet = {
  text: any;
  handleWrong: () => void;
  difficulty: string;
};

const Comet = ({ text, handleWrong, difficulty }: Comet) => {
  const firstRender = useRef(true);
  const [spring] = useSpring(() => ({
    from: { x: -700 },
    to: { x: 400 },
    config: {
      duration: 5000,
    },
    onRest: (x) => {
      if (x.finished) {
        handleWrong();
        playSound(lose);
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
      style={{
        width: 80,
        height: 80,
        position: "absolute",
        top: "420px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(circle at 5% 15%, pink 1px,
            ${colors.purple} 4%,${colors.red} 60%, ${colors.pink} 100%)`,
        ...spring,
      }}
    >
      {difficulty == "easy" && text?.word?.pinyin}
    </animated.div>
  );
};

export default Comet;
