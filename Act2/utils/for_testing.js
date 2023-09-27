const palindrome = (myString) => {
  return myString.split("").reverse().join("");
};

const average = (myArray) => {
  if (myArray.length === 0) {
    return 0;
  }
  let valorInicialAccum = 0;
  const sum = myArray.reduce((accum, num) => accum + num, valorInicialAccum);
  return sum / myArray.length;
};

module.exports = {
  palindrome,
  average,
};
