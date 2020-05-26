export const NUCLEOTIDES = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export const toRna = (str) => {
  return str.split('').map(function(n) {
		return NUCLEOTIDES[n]
	}).join('')
};