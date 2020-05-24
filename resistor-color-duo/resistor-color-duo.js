export const RESISTORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const decodedValue = (colors) => {
  return Number(`${RESISTORS.indexOf(colors[0])}${RESISTORS.indexOf(colors[1])}`);
};