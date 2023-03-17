export const scrollClassAdder = () => {
  // On scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("pop-in-animation");
      }
    });
  });
  // Tell the observer which elements to track
  setTimeout(() => {
    const gameCard = document.querySelectorAll(".pop-in");
    if (gameCard) {
      gameCard.forEach((e) => {
        observer.observe(e);
      });
    }
  }, 100);
};
