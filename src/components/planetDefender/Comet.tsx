import { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { colors } from "../../styles/PlanetDefender";

const Comet = ({
  text,
  handleWrong,
  difficulty,
}: {
  text: any;
  handleWrong: any;
  difficulty: any;
}) => {
  const first = useRef(true);
  const [spring, api] = useSpring(() => ({
    from: { x: -700 },
    to: { x: 400 },
    config: {
      duration: 5000,
    },
    onRest: (x) => {
      if (x.finished) {
        handleWrong();
        const sound = new Audio("./lose.wav");
        sound.volume = 0.1;
        sound.play();
      }
    },
  }));
  useEffect(() => {
    if (first.current) {
      first.current = false;
      const msg = new SpeechSynthesisUtterance();
      msg.text = text?.word?.chinese ?? "";
      msg.lang = "zh";
      msg.rate = 0.5;
      window.speechSynthesis.speak(msg);
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
