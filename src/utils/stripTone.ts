const tones = new Set([
  "\u0304", // tone 1
  "\u0301", // tone 2
  "\u030c", // tone 3
  "\u0300", // tone 4
]);

// Remove tone from letters with tone
export const stripTone = (w: string) => {
  const letters = w.normalize("NFD");
  let newStr = undefined;
  for (let i = 0; i < letters.length; i++) {
    if (tones.has(letters[i])) {
      const val = letters.slice(0, 1);
      newStr = val;
    }
  }
  return newStr ?? w;
};
