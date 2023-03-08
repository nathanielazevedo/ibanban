import { SpellingGame } from "./spelling";

export const keyDownListener = (e: any, GameClass: SpellingGame) => {
  const key = e.key;
  switch (key) {
    case "ArrowRight":
      GameClass.goNextWord();
      break;
    case "ArrowLeft":
      GameClass.goPreviousWord();
      break;
  }
};
