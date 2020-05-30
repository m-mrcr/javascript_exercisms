const alphabet = new Set([...'abcdefghijklmnopqrstuvwxyz'])

export const isPangram = (str) => {
  const letters = str
    .toLowerCase()
    .match(/[a-z]/g);
  
    const uniqueLetters = new Set(letters);

    return uniqueLetters.size === alphabet.size
};

