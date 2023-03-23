import { win, good, lose, countdown } from "../apps/ibanban/games/assets";

const playSound = (soundName: string) => {
  let sound;
  switch (soundName) {
    case "Win":
      sound = new Audio(win);
      sound.volume = 0.9;
      sound.play();
      break;
    case "Good":
      sound = new Audio(good);
      sound.volume = 0.9;
      sound.play();
      break;
    case "CountdownSound":
      sound = new Audio(countdown);
      sound.volume = 0.9;
      sound.play();
      break;
    case "Lose":
      sound = new Audio(lose);
      sound.volume = 0.9;
      sound.play();
      break;
  }
};

export default playSound;
