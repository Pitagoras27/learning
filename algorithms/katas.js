// Ejercicios ALGOORITMIA midudev
// Generar un arreglo de 6 numeros random.
// Los números no deben ser repetidos y deben formar parte de un rango numerico

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateLimitArray = (length) => {
  let control = 0;
  const arrResult = [];
  while (control < length) {
    const number = generateRandomNumber(5, 12);
    if (!arrResult.includes(number)) {
      arrResult[arrResult.length] = number;
      control += 1;
    }
  }
  return arrResult;
};

const result = generateLimitArray(6);
console.log(result);
