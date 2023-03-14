export const scrollClassAdder = () => {
  // On scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("game-1");
      }
    });
  });
  // Tell the observer which elements to track
  setTimeout(() => {
    const gameCard = document.querySelector(".gameCard");
    if (gameCard) observer.observe(gameCard);
    const stepper = document.querySelector(".stepper");
    if (stepper) observer.observe(stepper);
  }, 500);
};
