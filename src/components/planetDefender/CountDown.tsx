//functionality
import { useState } from "react";
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
