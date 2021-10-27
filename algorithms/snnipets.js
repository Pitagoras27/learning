// allEqual
// allEqualBy
// Comprobar si todos los elementos del arreglo son iguales
const test1 = [1, 2, 3, 4, 5, 6, 7];
const test2 = [1, 1, 1, 1, 1, 1, 1];

const areEqual = (arr, fn) => arr.every(fn);
const res = areEqual(test1, (x) => x === test1[0]);
const res2 = areEqual(test2, (x) => x === test1[0]);
console.log(res);
console.log(res2);

// Generate Random number in range until 3
const decimalRan = () =>
  new Array(3).fill(1).map((item) => Math.floor(Math.random() * 2 + item));
const uniqueBy = (arr, cb) => {
  const [first] = arr;
  return arr.every((x) => x === first);
};
const result = uniqueBy(decimalRan());
console.log(result);

// allUnique
// Comprueba que todos los elementos del arreglo son unicos
const arrUniques = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
const isUniqueValues = (arr) => arr.length === new Set(arr).size;
console.log(isUniqueValues(arrUniques));

// allUniqueBy
// Comprueba si todos los elementos de un arreglo de numeros de punto flotante al redondear con Math.round son iguales

const decimal = [1.2, 1.5, 2.8];
const decimal2 = [1.1, 1.4, 2.3];

const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size;
console.log(allUniqueBy(decimal, Math.round));
console.log(allUniqueBy(decimal2, Math.round));

// and
// Comprueba si 2 elementos pasados por parametro son truetly
const isTruetly = (a, b) => a && b;
console.log(isTruetly(true, true));
console.log(isTruetly(true, false));
console.log(isTruetly(false, false));

// filterNonUnique
// Filtra los valores que no se encuentran repetidos en el array de entrada
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniques = (arr) =>
  [...new Set(arr)].filter(
    (item) => arr.indexOf(item) !== arr.lastIndexOf(item)
  );
console.log(uniques(arr));

// arithmeticProgression
// Genera un array de elementos cuyo valor sea generado por la multiplicación de un numero secuencial hasta un número limite
// Los valores de entrada deberán ser proporcionados a una función

/**
 * @param {number} num number to progression
 * @param {number} limit of elements of generate array
 * @returns {array}
 */
const arithmeticProgression = (num, limit) =>
  Array.from({ length: Math.ceil(limit / num) }, (_, i) => num * (i + 1));
console.log(arithmeticProgression(5, 25));

// average
// Calculates the average of two or more numbers.
// With reduce.

const arrAverage = [1, 2, 3, 4, 5, 6, 7, 8];
const average = (arr) => arr.reduce((acc, item) => item + acc, 0) / arr.length;
console.log(average(arrAverage));

// assertValidKeys

const obj = {
  name: "Carlos",
  occupation: "Developer",
};
const arr = ["name", "id"];
const arr2 = ["name", "occupation"];

/**
 * Comprueba si un objeto contiene todas las claves solicitadas
 * @param {object} objToSearch to search keys
 * @param {array} arrKeys to match in object
 * @returns {boolean}
 */
const assertValidKeys = (objToSearch, arrKeys) =>
  Object.keys(objToSearch).every((key) => arrKeys.includes(key));

console.log(assertValidKeys(obj, arr)); // false
console.log(assertValidKeys(obj, arr2)); // true

// filterNonUniqueBy
// Filtra los objetos del array cuyo ID interior se no esté duplicado
const arrFilterNonUniqueBy = [
  { id: 0, value: "a" },
  { id: 1, value: "b" },
  { id: 2, value: "c" },
  { id: 1, value: "d" },
  { id: 0, value: "e" },
];

const uniquesFilter = (arr, fn) =>
  arr.filter((a, i) => arr.every((b, j) => (i === j) === fn(a, b)));

console.log(
  "uniquesFilter --->",
  uniquesFilter(arrFilterNonUniqueBy, (x, y) => x.id === y.id)
);

// filterUniqueBy
// Filtra los elementos cuyo id esté duplicado
const arrFilterUniqueBy = [
  { id: 0, value: "a" },
  { id: 1, value: "b" },
  { id: 2, value: "c" },
  { id: 3, value: "d" },
  { id: 0, value: "e" },
];

const arrFilterUnique = (arr, fn) =>
  arr.filter((a, x) => arr.some((b, j) => (x !== j) === fn(a, b)));

console.log(
  "--->",
  arrFilterUnique(arrFilterUniqueBy, (x, y) => x.id === y.id)
);

// findFirstN
// Dado un arreglo de valores numéricos pasado a una función,
// genera un nuevo arreglo con la longitud indicada en el segundo parámetro
// Los valores devueltos deberán cumplir con según una función test

const arrFind = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const generateArray = (arr, fn, limit = 1) => {
  const newArr = [];
  for (let i in arr) {
    const el = arr[i];
    if (fn(el)) newArr.push(el);
    if (newArr.length === limit) return newArr;
  }
  return newArr;
};
const resGenerateArray = generateArray(arrFind, (x) => x % 2 === 0);
console.log("resGenerateArray->", resGenerateArray);

// findKey
// Dado un objeto con hasheado (identificador de un nodo en particular)
// Devuelve el `hash name` del primer objeto (find fn) que cumpla la evaluación de una función test.

const objHash = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};

const findKey = (obj, fn) => Object.keys(obj).find((item) => obj[item]);

const res = findKey(objHash, (x) => x["active"]);
console.log(res);

// findKeys
// Dado un objeto de datos pasado como entrada a una función
// Devuelve los elementos que cumplan con la condición de la función evaluadora

const ages = {
  Leo: 20,
  Zoey: 21,
  Jane: 20,
};

const findKeys = (obj, val) =>
  Object.keys(obj).filter((item) => obj[item] === val);
console.log("findKeys--->", findKeys(ages, 20));

// Encuentra el último elemento de una lista proporcionada a una función cuyo valor sea un número impar
// Proporciona la función de test como callback a la función que recive la lista

const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const findLastOddNumber = (list, fn) => list.reverse().find((item) => fn(item));
const result = findLastOddNumber(listNumbers, (num) => num % 2 === 1);
console.log(result);

// El mismo caso que en el ejemplo anterior.
// Pero en este caso devuelve el índice del último elemento de la lista proporcionada.

const arrNums = [33, 6, 2345, 5, 54, 6, 53, 12];
const findLastOddIndex = (arr, cb) =>
  arr
    .map((item, i) => [i, item])
    .reverse()
    .find(([_, value]) => cb(value))[0];

console.log(findLastOddIndex(arrNums, (num) => num % 2 === 1));
console.log(findLastOddIndex(arrNums, (num) => num === 6));

// Dada una función que recibe 3 argumentos generar un nuevo arreglo siguiendo los siguientes criterios
// El primer argumento corresponde a la lista de números
// El segundo deberá ser una función de test que evalue si pasa o no la comprobación interna
// El tercer es la longitud con la que deberá constar el nuevo arreglo

// La nueva lista de elemetos deberá contener los valores que pasen la comprobación pero deverán comenzar con el último de los valores de la primera lista que pase la evaluación

const numberList = [2, 43, 676, 87, 4, 3, 25, 67];
const newNumberList = (arr, cb, limit = 1) => {
  const newList = [];
  // Iterate list in reverse for generate new array list
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    const matcher = cb(element);
    if (matcher) newList.unshift(element);
    if (newList.length === limit) return newList;
  }
  return newList;
};
const result = newNumberList(numberList, (item) => item % 2 === 0, 3);
const result2 = newNumberList(numberList, (item) => item % 2 === 1, 4);
const result3 = newNumberList(numberList, (item) => item / 2 === 2);

console.log(
  `El resultado de result es %s; el de result2 es %s; y el de result3 es %s`,
  result,
  result2,
  result3
);

// Dado un arreglo pasado como parámetro a una función aplanarlo con diferentes niveles de profundidad indicando en un segundo parámetro

const arrNested = [1, [2, [3, [4, [5, [6]]]]], 7];
const flatten = (arr, depth = 0) => {
  return arr.reduce((accum, arrItem) => {
    if (depth === 0) return arr;
    return accum.concat(
      depth >= 1 && Array.isArray(arrItem)
        ? flatten(arrItem, depth - 1)
        : arrItem
    );
  }, []);
};
console.log(flatten(arrNested, 5));

// Resolve with bui flat method of array
const numbers = [1, 2, [3, 4, 5, [6, [7]]]];
const flatNumbers = numbers.flat(3);
console.log(flatNumbers);

// forEachRight
// Muestra los valores de un arreglo comenzando por el último

const ascendentArr = [1, 2, 3, 4, 5, 6];
const reverseArr = (arr, fn) => arr.reverse().forEach(fn);
reverseArr(ascendentArr, (x) => console.log(x));

// forOwn
// Muestra los valores de un objeto iterable, mediante un callback

const iterateObj = { name: "Carlos", occupation: "Developer" };
const showValsObj = (obj, fn) =>
  Object.entries(obj).forEach(([key, _]) => fn(obj[key]));
showValsObj(iterateObj, (val) => console.log(val));

// forOwnRight
// Same case but keys in revese order

const iterateObjR = { name: "Carlos", occupation: "Developer" };
const showValsReverse = (obj, cb) =>
  Object.keys(obj)
    .reverse()
    .forEach((val) => cb(val));
showValsReverse(iterateObjR, (val) => console.log(val));

// formToObject
// Transformación de un "arreglo" de valores de campos de formulario a un objeto enumerable. Claves nombre valor
// Lo interesante aqui es saber que objetos de tipo array del DOM pueden ser transformados a un array con propiedades y métodos del prototipo array con Array.from y el contructor new FormData
const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
formToObject(document.querySelector("#form"));

// MAS INFORMACIÓN SOBRE TRANSFORMACIÓN DE DATOS AQUI:
/********************************** */
// https://www.it-swarm-es.com/es/javascript/convertir-array-objeto/970373429/
/********************************** */
