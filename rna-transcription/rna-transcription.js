export const NUCLEOTIDES = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export const toRna = (str) => {
  var transcription = ""
  str.split('').forEach(function(letter) {
    transcription += NUCLEOTIDES[letter]
  });
  return transcription
};

