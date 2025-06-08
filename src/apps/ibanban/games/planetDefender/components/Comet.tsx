import { comet } from "../assets";
import { Word } from "../../../data";
import { useEffect, useRef } from "react";
import { speak } from "../../../../../utils/speak";
import playSound from "../../../../../utils/playSound";
import { useSpring, animated } from "@react-spring/web";
import { styled } from "@mui/system";

const StyledAnimatedImg = styled(animated.img)({});

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
      duration: difficulty === "easy" ? 7000 : 5000,
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
    <StyledAnimatedImg
      src={comet}
      alt="comet"
      sx={{
        position: "absolute",
        top: "100px",
        left: "10px",
        width: { xs: "120px", sm: "160px", md: "200px" },
        height: "auto",
        zIndex: 100,
      }}
      style={{ ...spring }}
    />
  );
};

export default Comet;
