export const speak = (word: string, rate?: number | number[]) => {
  console.log("trying");
  var msg = new SpeechSynthesisUtterance();
  // msg.text = "HELLO";
  const voicesList = window.speechSynthesis.getVoices();
  msg.lang = "zh-CN";
  msg.text = word;
  msg.voice = voicesList.find((voice) => voice.lang === "zh-CN");
  msg.rate = (rate as number) ?? 0.5;
  window.speechSynthesis.speak(msg);
};
