import { useEffect, useState } from "react";
import playSound from "../../utils/playSound";
import Countdown from "../../assets/countdown.wav";
import { useInterval } from "../../hooks/useIntreval";

const CountDown = () => {
  const [time, setTime] = useState<number>(3);

  useInterval(
    () => {
      setTime((o) => o - 1);
    },
    time == 0 ? null : 1000
  );

  return <div className="timer">{time}</div>;
};

export default CountDown;
