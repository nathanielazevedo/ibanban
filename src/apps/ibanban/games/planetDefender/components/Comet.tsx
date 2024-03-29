//functionality
import { comet } from "../assets";
import { Word } from "../../../data";
import { useEffect, useRef } from "react";
import { speak } from "../../../../../utils/speak";
import playSound from "../../../../../utils/playSound";
import { useSpring, animated } from "@react-spring/web";

type Comet = {
  word: Word;
  handleWrong: () => void;
  difficulty: string;
  planetRef: HTMLImageElement | null;
};

const Comet = ({ word, handleWrong, difficulty, planetRef }: Comet) => {
  const firstRender = useRef(true);

  const [spring] = useSpring(() => ({
    from: { x: -50 },
    to: { x: planetRef ? planetRef.getBoundingClientRect().left - 120 : 500 },
    config: {
      duration: difficulty == "easy" ? 7000 : 5000,
    },
    onRest: (x) => {
      if (x.finished) {
        playSound("Lose");
        handleWrong();
      }
    },
  }));
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      speak(word.chinese);
    }
  }, []);

  return (
    <animated.img
      className="z-100 w-[150px] h-[150px] absolute top-[100px] left-[10px]"
      style={{ ...spring }}
      src={comet}
    >
      {/* {difficulty == "easy" && word.word.pinyin} */}
    </animated.img>
  );
};

export default Comet;
