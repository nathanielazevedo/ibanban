const playSound = (soundName: string) => {
  const sound = new Audio(soundName);
  sound.volume = 0.9;
  sound.play();
};

export default playSound;
