//functionality
import { useState } from "react";
import { useInterval } from "../../../../../hooks/useIntreval";

const CountDown = () => {
  const [time, setTime] = useState<number>(3);

  useInterval(
    () => {
      setTime((prev) => prev - 1);
    },
    time === 0 ? null : 1000
  );

  return (
    <div
      style={{
        fontSize: "50px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {time}
    </div>
  );
};

export default CountDown;
