export const speak = (word: string, rate?: number | number[]) => {
  var msg = new SpeechSynthesisUtterance();
  const voicesList = window.speechSynthesis.getVoices();
  msg.lang = "zh-CN";
  msg.text = word;
  msg.voice = voicesList.find((voice) => voice.lang === "zh-CN"  && voice.name.includes("Xiaoxiao")) || null;
  msg.rate = (rate as number) ?? 0.5;
  window.speechSynthesis.speak(msg);
};
