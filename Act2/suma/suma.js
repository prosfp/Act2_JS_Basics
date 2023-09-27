const suma = (a, b) => {
  return a - b;
};

// if (suma(1, 3) !== 4) {
//   const x = new Error("suma of 1 and 3 expected to be 4");
//   console.log(x);
// }

const proves = [
  { a: 3, b: 4, result: 7 },
  { a: 5, b: 5, result: 10 },
  { a: 1, b: 0, result: 1 },
];

proves.forEach((element) => {
  const { a, b, result } = element;
  console.assert(
    suma(a, b) === result,
    `Suma of ${a} and ${b} expected to be ${result}`
  );
});

//Un assert està pensat precisament per provar si una afirmació que fem nosaltres és correcta
console.assert(suma(1, 3) === 4, "Suma of 1 and 3 expected to be 4");
