import Win from "../assets/win.wav";
import Good from "../assets/good.wav";
import CountdownSound from "../assets/countdown.wav";
import Lose from "../assets/lose.wav";

const playSound = (soundName: string) => {
  let sound;
  switch (soundName) {
    case "Win":
      sound = new Audio(Win);
      sound.volume = 0.9;
      sound.play();
      break;
    case "Good":
      sound = new Audio(Good);
      sound.volume = 0.9;
      sound.play();
      break;
    case "CountdownSound":
      sound = new Audio(CountdownSound);
      sound.volume = 0.9;
      sound.play();
      break;
    case "Lose":
      sound = new Audio(Lose);
      sound.volume = 0.9;
      sound.play();
      break;
  }
};

export default playSound;
