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

// Procedural
/**
 * Return max product between 2 numbers of an array. Iterate over the array and multiply the current item by adjacent next
 * @param { array } inputArr elements collection
 * @return { number } the max product of operation
 */
const maxProduct = inputArr => {
  let nextResult = 0;
  let firstMultiply = inputArr[0] * inputArr[1];
  for (i = 1; i < inputArr.length; i++) {
    nextResult = inputArr[i] * inputArr[i + 1];
    if (firstMultiply < nextResult) {
      firstMultiply = nextResult;
    }
  }
  return firstMultiply;
}

const elementsNumber = [3, 6,-2,-5, 7, 3];
console.log(maxProduct(elementsNumber));

// Declarative
const elementsNumber = [3, 6, -2, -5, 7, 7, 6, 3];

const maxProductReduce = arrInput => {
  return arrInput.reduce((acc, curr, index) => {
    const nextProduct = curr * arrInput[index + 1]
    if (isNaN(nextProduct)) return acc;
    acc = nextProduct > acc ? nextProduct : acc;
    return acc
  }, null);
}
console.log(maxProductReduce(elementsNumber));

/**
 * Sort array and fill empty spaces than not show progressive secuence.
 * @param { array } arrInput unordered list and secuence uncompleted
 * @return { array } array sort and transform
*/
const uncompletedList = [5, 2, 3, 9, 8];
const orderFillList = arrInput => {
  const min = Math.min(...arrInput);
  const max = Math.max(...arrInput);
  const copyArr = arrInput.slice(0);
  copyArr.sort((a,b) => a-b)
  const result = []
  for(let i = min; i < max; i++) {
    if (!arrInput.includes(i)) {
      result.push(i)
    } else {
      result.push(i)
    }
  }
  return result;
}
console.log(orderFillList(uncompletedList));

// Retorna la suma de elementos faltantes para que un array de numero sea secuencial, sin huecos
/**
 * @param { array } arrInput unordered list and empty spaces for show complete secuence between min val and max val
 * @returns { number } return number of empty spaces
 */
// Fórmula MaxNum - MinNum + 1 - arrInput
const uncompletedList = [5, 2, 3, 9, 8];
const orderFillList = arrInput => Math.max(...arrInput) - Math.min(...arrInput) + 1 - arrInput.length;
console.log(orderFillList(uncompletedList));