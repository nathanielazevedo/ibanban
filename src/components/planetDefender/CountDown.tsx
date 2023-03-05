import React, { useEffect, useState } from "react";
import playSound from "../../utils/playSound";
import Countdown from "../../assets/countdown.wav";

const CountDown = () => {
  const [timer, setTimer] = useState<number | undefined>(undefined);

  let time: number;
  const startCountDown = () => {
    playSound(Countdown);
    setTimer(3);
    let count = 3;

    time = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(time);
        setTimer(undefined);
      } else setTimer((o) => (o && o > 0 ? o - 1 : undefined));
    }, 1000);
  };

  useEffect(() => {
    !timer && startCountDown();
    return () => clearInterval(time);
  }, []);

  return <div className="timer">{timer}</div>;
};

export default CountDown;
