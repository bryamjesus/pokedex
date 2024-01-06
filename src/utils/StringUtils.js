export const firstCapitalLetter = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const addNumbers = (symbol, number, maxSize) => {
  const lengthNumber = number.toString().length;
  let ceros = symbol.repeat(maxSize - lengthNumber);
  return lengthNumber < maxSize
    ? `${ceros}${number.toString()}`
    : number.toString();
};
