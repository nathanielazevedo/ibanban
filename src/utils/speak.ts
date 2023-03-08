export const speak = (word: string, rate?: number | number[]) => {
  var msg = new SpeechSynthesisUtterance();
  msg.text = word;
  msg.lang = "zh";
  msg.rate = (rate as number) ?? 0.5;
  window.speechSynthesis.speak(msg);
};
