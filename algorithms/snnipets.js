// CSVToArray (transform map, slice, indexOf, split)
// Dado un string de valores separados por `,` (Formato CSV de las hojas de cálculo) retorna un arreglo de 2 dimensiones cuyo cada elemento
// sea el conjunto de elementos por fila. (Los elementos por fila se encuentran separados de otro elemento por un salto de línea `\n`)
// Debera contar con un argumento opcional que indique se se debe omit la primera fila (La que contiene los nombres de los campos)
const strInput1 = "a,b\nc,d";
const strInput2 = "a;b\nc;d";
const strInput3 = "col1,col2\na,b\nc,d";

/**
 * Transform format CSV in array bidimensional
 * @param { string } strInput format to transform
 * @param { string } delimiter default and optional string to split
 * @param { boolean } omitFirstRow optional to omits first row
 * @returns { array }
 */
const CSVToArray = (strInput, delimiter = ",", omitFirstRow = false) =>
  strInput
    // indexOf no lee como indice un valor de escape (`\`) por eso el índice es 3 y no 4
    .slice(omitFirstRow ? strInput.indexOf("\n") + 1 : 0)
    .split("\n")
    .map(val => val.split(delimiter))

console.log(CSVToArray(strInput1))
console.log(CSVToArray(strInput2, ";"))
console.log(CSVToArray(strInput3, undefined, true))

// CSVToJSON (transform, indexOf, reduce, slice, split, map) HARD More study
// Dado un string de datos separados por coma (CSV) que además incluye saltos de línea (\n) genera un arreglo donde cada fila tenga los datos descritos en un objeto
// cada nombre de campo deverá ser la clave del valor por fila, ejemplo:
// INPUT (CSV) -> 'col1,col2\na,b\nc,d'
// OUTPUT (Array JSON) -> [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

const csv1 = 'col1,col2\na,b\nc,d';
const csv2 = 'col1;col2\na;b\nc;d';

const CSVToJSON = (strCsv, delimiter = ",") => {
  // Get titles fields of all registry to set name of key of each row
  // Split delimiter because...
  const titles = strCsv.slice(0, strCsv.indexOf("\n")).split(delimiter);
  // Split whitout titles
  return strCsv
    .slice(strCsv.indexOf("\n") + 1)
    .split("\n")
    .map( v => {
      // array Values to assign in redice with index iteration
      const values = v.split(delimiter)
      // Iterate over titles array because prop key set with value of column
      return titles.reduce((obj, title, index) => {
        obj[title] = values[index]
        return acc
      }, {})
    })
}

const result = CSVToJSON(csv1);
console.log(result);

// HSBToRGB

// HSLToRGB

// JSONToFile (Node)
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));

// writes the object to 'testJsonFile.json'
JSONToFile({ test: 'is passed' }, 'testJsonFile');

// JSONtoCSV

// RGBToHSB

// RGBToHSL

// RGBToHex

// URLJoin (regex)

// UUIDGeneratorBrowser (Cryptografy)
// TODO review
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'

// UUIDGeneratorNode (Node)
// TODO review
const crypto = require('crypto');

const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
UUIDGeneratorNode();

// accumulate (reduce, slice, `cast utility transform type data`)
// Dado un array de números, devolver el mismo número con la suma del item anterior, ejemplo: [1,2,3,4] => [1,3,6,10]
// La lista de argumentos recibida no tiene límite
// Create an array of partial sums
const arr = [1,2,3,4]
// slice returns last item of array
// the type convetions of JS set one element at string [2] therefore cast with `+`
const accumulate = (...arrInput) => arrInput.reduce((acc, num) => ([...acc, num + +acc.slice(-1)]), [])

console.log(accumulate(1,2,3,4))
console.log(accumulate(...arr))

// addClass (DOM)
const addClass = (target, nameClass) => target.classList.add(nameClass);
addClass(document.querySelector("#my-id"), "active");

// addDaysToDate (Object Date)

// addEventListenerAll (DOM Events)

// addMinutesToDate (Object Date)

// addMultipleEvents (DOM Events)

// addStyles (DOM)
// The style property is neccesary to works properly
const addStyles = (target, styleList) => Object.assign(target?.style, styleList);
const element = document.querySelector("#my-id-html");
// Style attribute properties should be in camel case
addStyles(element, { fontSize: "2rem", fontWeight: 900 })

// addWeekDays (Object Date)

// all (every)
// Comprueba que todos los elementos del arreglo son de tipo truetly
/**
 * @param { array } arr to validate if is type true
 * @param { function } fn predicative function
 * @returns { Boolean }
 */
const all = (arr, fn = Boolean) => arr.every(fn)
const result = all([1,2,"Same",true,[],{}])
const result2 = all([-1,-2,-3-4], x => x > 0 )
console.log(result)
console.log(result2)

// allEqual
// Checks if all elements in an array are equal.
const test1 = [1, 2, 3, 4, 5, 6, 7];
const test2 = [1, 1, 1, 1, 1, 1, 1];

const allEqual = (arr) => arr.every(x => x === arr[0])
const res = allEqual([1,2,1,1,1]);
const res2 = allEqual([1,1,1,1,1]);
console.log(res)
console.log(res2)

// allEqualBy (every, Math.round)
/**
 * Checks if all elements in an array are equal, based on the provided `mapping` function in this case round of object Math
 * @param { array} arr array to test
 * @param { function } fn predicative function
 * @returns { boolean }
 */
const allEqualBy = (arr, fn) => {
  const firstCheck = fn(arr[0]);
  return arr.every(x => fn(x) === firstCheck)
}
const res = allEqualBy([2.2, 2.65, 1.5], Math.round);
const res2 = allEqualBy([3.5, 3.65, 4.1], Math.round);

console.log(res)
console.log(res2)

// allUnique
// Comprueba que todos los elementos del arreglo son unicos
const arrUniques = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
const isUniqueValues = (arr) => arr.length === new Set(arr).size;
console.log(isUniqueValues(arrUniques));

// allUnique (Set)
// Checks if all elements in an array are unique.
const allUnique = arr => arr.length === new Set(arr).size
console.log(allUnique([1,2,3,4,5]), "<---1")
console.log(allUnique([1,2,2,3,4,4,4,5]), "<---2")

// allUniqueBy (Set, Math.round)
// Comprueba si todos los elementos de un arreglo de numeros de punto flotante al redondear con Math.round son iguales

const decimal = [1.2, 1.5, 2.8];
const decimal2 = [1.1, 1.4, 2.3];

const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size;
console.log(allUniqueBy(decimal, Math.round));
console.log(allUniqueBy(decimal2, Math.round));

// and ( && operator)
// Comprueba si 2 elementos pasados por parametro son truetly
const and = (a, b) => a && b;
console.log(and(true, true));
console.log(and(true, false));
console.log(and(false, false));

// any (some)
// Checks if the provided predicate function returns true for at least one (para al menos uno) element in a collection.
const any = (arr, fn = Boolean) => arr.some(fn)
console.log(any([1,2,1,1,2], x => x >= 3))
console.log(any([false,null,undefined,0,NaN, 2]))

// aperture (slice, map, transform)
// Creates an array of n-tuples of consecutive elements.

// approximatelyEqual (Math.abs, Math.PI)
// Checks if two numbers are approximately equal to each other (iguales entre si).

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

// arrayToCSV (map, replace)

// arrayToHTMLList (DOM)

// ary (Math.max, slice, clousure, map)

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

// atob (node)
const atob = str => Buffer.from(str, 'base64').toString('binary');
atob('Zm9vYmFy'); // 'foobar'

// attempt (instanceOf, new Error, try catch)
// Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.

// average
// Calculates the average of two or more numbers.
// With reduce.
const arrAverage = [1, 2, 3, 4, 5, 6, 7, 8];
const average = (arr) => arr.reduce((acc, item) => item + acc, 0) / arr.length;
console.log(average(arrAverage))

// averageBy (map, reduce, predicative function)

// bifurcate
// Divide los valores de un arreglo en 2 grupos según el valor booleano de un tercer grupo
// De los valores de entrada: ['beep', 'boop', 'foo', 'bar'], [true, true, false, true] devolver [ ['beep', 'boop', 'bar'], ['foo'] ]
/**
 * @param { array } inputArr array to filter
 * @param { array } filterArr array validator
 * @returns { array } bidimentional array
 */
const bifurcate = (inputArr, filterArr) => inputArr.reduce((acc, item, index) => (acc[filterArr[index] ? 0 : 1].push(item), acc), [[],[]])
const result = bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
console.log('result->', result);

// bifurcateBy
// Divide los valores de un arreglo en 2 grupos según la evaluación de una función de predicado
/**
 * @param { array } inputArr to split
 * @param { function } fn predicative function to validate
 * @returns { array }
 */
const bifurcateBy = (inputArr, fn) => inputArr.reduce((acc, curr) => ( acc[fn(curr) ? 0 : 1].push(curr), acc), [[],[]]);
const predicative = (val) => val[0] === 'b'
const result = bifurcateBy(['beep', 'boop', 'foo', 'bar'], predicative)
console.log(result);

// binary (this more abstract, NEEDS STUDY)
// Devuelve un nuevo array con el valor numérico más alto entre item actual de la iteracion y su índice actual.
const binary = fn => (current, index) => fn(current, index);
const clousureResult = [2,1,0].map(binary(Math.max));
console.log(clousureResult);

// binarySearch

// bind
// Create a function that return clousure with a specific context to bind your arguments
const bind = (fn, context, ...restArgs) => (...args) => fn.apply(context, [...restArgs, ...args]);
const objContext = {
  name: "Carlos",
  jobTitle: "Web Developer"
}
function greeting(greet, puntuaction) {
  console.log(`${greet} ${this.name} you work from ${this.jobTitle}${puntuaction}`);
}
const makeGreeting = bind(greeting, objContext);
console.log(makeGreeting("Hola", "!"));

// bindAll (DOM)

// bindKey
// Create a function that return clousure with a specific context to bind your arguments, but the context function to a apply is given to method of literal object
const bindKey = (nameFn, context, ...aditionalArgs) => (...args) => context[nameFn].apply(context, [...aditionalArgs, ...args]);
const objContext = {
  name: "Francisco",
  jobTitle: "Web Developer",
  greet: function(greet, puntuaction) {
    console.log(`${greet} ${this.name} you work from ${this.jobTitle} ${puntuaction}`);
  }
}
const makeGreeting = bindKey('greet', objContext);
console.log(makeGreeting("Hi", "!"))

// binomialCoefficient

// both
// Check if both of the given functions (argument list) return true for a given clousure with set of arguments
const both = (fn1, fn2) => (...args) => fn1(...args) && fn2(...args);
const isEven = x => x % 2 === 0
const isPositive = y => y > 0
const result = both(isEven, isPositive);
console.log(result(2)) // true
console.log(result(1)) // false

// bottomVisible

// btoa (NODE)
// Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.
const btoa = str => Buffer.from(str, 'binary').toString('base64');
btoa('foobar'); // 'Zm9vYmFy'

// biteSize
// Return size the string in bytes
const biteSize = str => new Blob([str]).size;
console.log(biteSize("😎"));
console.log(biteSize("Hello world!"));

// bubbleSort
const bubbleSort = arr => {
  const l = arr.length;
  for (let i = 0; i < l; i++ ) {
    console.log('_-----------------------------------', i)
    for (let j = 0; j < l - 1 - i; j++ ) {
      console.log(arr[j], 'arr[j]')
      // Si el elemento anterior es mayor al posterior, ordena.
      /* if ( arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      } */
    }
  }

  return arr;
};

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = bubbleSort(arr);
result;

// * bucketSort

// * call (PROMISES)

// * capitalize
// Capitalize the first letter of a string
// Pass flag that allow apply the rule or ignore, if is ignore return the rest characters without modifications, otherwise apply toLowerCase

// Argument list filter with rest operator
/**
 *
 * @param { array } filter `first` letter of all elementos of rest
 * @param { boolean } flag control of transform
 * @returns { string } capitalize first letter
 */
const capitalize = ([first, ...rest], flag = false) => {
  const firstUpperCase = first.toUpperCase()
  return flag ? firstUpperCase + rest.join("").toLowerCase() : firstUpperCase + rest.join("")
}

console.log(capitalize("fooBar"))
console.log(capitalize("fooBar", true))

// * capitalizeEveryWord
// Capitalizes the first letter of every word in a string
/**
 * @param { string } str to transform first letter of every word
 * @returns string transform
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase())
console.log(capitalizeEveryWord("hello word!"));

// * cartesianProduct (TRANSFORM)
// Calculate the cartesian product of two arrays
// The first and the second element of the first array should contains every elements of the second array
const cartesianProduct = (firstArr, secondArr) => firstArr.reduce((accum, x) => ([...accum, ...secondArr.map(y => [x, y])]), []);
const xArray = ["a", "y"];
const yArray = [1, 2];
console.log(cartesianProduct(xArray, yArray))

// * castArray
// Casts the provided value as the argument an array if it's not one
const castArray = element => Array.isArray(element) ? element : [element];
console.log(castArray([1,2,3,4]));
console.log(castArray("String everywere"))

// * celsiusToFahrenheit
// Converts Celsius to Fahrenheit
// Formula 1.8 * `Degrees` + 32
const celsiusToFahrenheit = degrees => 1.8 * degrees + 32
console.log(celsiusToFahrenheit(33))

// * chainAsync (Asincronía MORE STYDY)
// Chains asynchronous functions
// Recorre un conjunto de funciones que contienen eventos asincrónicos, llamando a continuación cuando se completa cada evento asincrónico.
const chainAsync = arrFns => {
  let count = 0;
  const last = arrFns[arrFns.length - 1];
  const next = () => {
    const fn = arrFns[count++];
    fn === last ? fn() : fn(next)
  }
  next();
}
const result = chainAsync([
  next => {
    console.log("0 seconds");
    setTimeout(next, 1000);
  },
  next => {
    console.log("1 seconds");
    setTimeout(next, 1000);
  },
  () => {
    console.log("2 seconds");
  },
])

// * checkProp (CLOUSURE STUDY. don't undestand (!!) <- operator)
// Creates a function that will invoke a predicate function for the specified property on a given object.
// The given object pass as argument in cluosure

// The (!!) operator is for not get undefined result. Best false or true
const checkProp = (fn, prop) => (obj) => {
  return !!fn(obj[prop]);
}
const predicative = x => x === 4;
const hasLength4 = checkProp(predicative, "length");
const firstHasLength4 = hasLength4([1,2,3,4]); // true
const secondHasLength4 = hasLength4([]); // false
console.log(firstHasLength4)
console.log(secondHasLength4)

const hasActiveSession = (x = {}) => {
  return x.active
}
const session = { user: {} };
const activeSession = checkProp(hasActiveSession, 'user');
const resultIsActive = activeSession(session);
// Before logged
console.log(resultIsActive);
session.user.active = true;
// After logger properly
console.log(activeSession(session))

// Object and Object Set not length property, unlike array
const haveLengthProp = l => !(l === undefined);
const verifyPropLength = checkProp(haveLengthProp, 'length');
const givenArray = verifyPropLength([]); // true
const givenObject = verifyPropLength({}); // false
const givenSet = verifyPropLength(new Set([1,2,3,4,5])) // false
console.log(givenArray)
console.log(givenObject)
console.log(givenSet)

// * chunk
// Transforma un array en fragmentos de array más pequeños con un tamaño específico
// Use Array.from() to create a new array that fits (ajuste) the number of chunks that will be produced
// Use slice to create each element of the new array with the size indicates
// If the original array can't be split evenly (uniformemente), the final chunk will contain the remaining elements.
/**
 * Chunks an array into smaller array pf specified size.
 * @param {array} arrInput to transform,
 * @param {number} size chunk small array
 */

const chunk = (arrInput, size) =>
  Array.from(
    { length: arrInput.length / size},
    (item, index) => arrInput.slice(index * size, index * size + size)
  )
console.log(chunk([1,2,3,4,5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1,2,3,4,5], 3)); // [ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(chunk([1,2,3,4,5], 4)); // [ [ 1, 2, 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 4))

// * chunkIntoN
// Chunks an array into `n` (Is the second argument) smaller arrays.
// Use slice method for chunks into smaller arrays
// The division is proporcional
/**
 * Chunks an array into smaller array pf specified size.
 * @param {array} arr to transform,
 * @param {number} n number of chunks small arrays
 */
const chunkIntoN = (arr, n) => {
  // This abastract to get the length of array
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}
console.log(chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunkIntoN([1, 2, 3, 4, 5, 6, 7], 5)); //

// * chunkify

// * cloneRegExp

// * coalesce
// Returns the first defined, non-null argument.
const coalesce = (...args) => args.find(v => ![null, undefined].includes(v));
console.log(coalesce(null, undefined, '', NaN, 'Waldo'));

// * coalesceFactory
const coalenceFactory = fnPredicative => (...args) => args.find(fnPredicative);
const excludesFalsyValues = coalenceFactory(v => ![null, undefined, "", 0, NaN].includes(v));
const result = excludesFalsyValues(null, undefined, "", 0, NaN, undefined, null, "Web Developer");
console.log(result);

// * collectInto (BIND Study at read)
const collectInto = (fns) => (...args) => fns(args);
const pAll = collectInto(Promise.all.bind(Promise));
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise(resolve => setTimeout(resolve, 1000, 3));
pAll(p1,p2,p3).then(console.log)

// Mil veces más legible!!
const moreLegible = Promise.all([p1,p2,p3]).then(res => console.log(res));

// * colorize

// * combine (MORE STUDY REDUCE transform)
// Combine two arrays of object (arguments), using the specified key to match objects
const arr1 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Maria' }
];
const arr2 = [
  { id: 1, age: 28 },
  { id: 3, age: 26 },
  { age: 3}
];

const combine = (arr1, arr2, key) => {
  return Object.values([...arr1, ...arr2].reduce((acc, val) => {
    if(val[key]) {
      acc[val[key]] = acc[val[key]] ? {...acc[val[key]], ...val} : { ...val }
    }
    return acc
  }, {}))
}

console.log(combine(arr1, arr2, "id"))

// * compact
// Removes falsy values from an array.
const arr = [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]
const compact = arrFilter => arrFilter.filter(Boolean);
console.log(compact(arr));

// * compactObject (transform)

// * compactWhitespace
// Same regular expresion /\s+/g
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum');

// complement (CLOUSURE)
const complement = fns => (...args) => !fns(...args)
const isOdd = x => x % 2 === 0;
const r = complement(isOdd)
const r2 = complement(isOdd)
console.log(r(3)) // true
console.log(r2(2)) // false

// * compose (curring, clousure, reduce)

// * composeRight (curring, clousure)

// * containsWhitespace (regex test)
const containsWhitespace = (str) => /\s+/g.test(str);
const res = containsWhitespace("Lorem Ipsum"); // true
const res2 = containsWhitespace("Lorem"); // false
console.log(res);
console.log(res2);

// * converge (reduce, clousure, apply)

// * copySign (Math.sign)
// Comprueba el signo de 2 valores pasado por argumento 1 y argumento 2
// Si ambos son positivos devuelve el primer argumento
// Si ambos son negativos devuelve el primer argumento
// Si al menos uno de ambos argumentos es negativo, devuelve el primer argumento con signo negativo
// 2, 3 | 2, -3 | -2, 3 | -2, -3

const copySign = (a, b) => Math.sign(a) === Math.sign(b) ? a : -a;
const res1 = copySign(2, 3) // 2
const res2 = copySign(2, -3) // -2
const res3 = copySign(-2, 3) // 2
const res4 = copySign(-2, -3) // -2
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

// * copyToClipboard (DOM)

// * countBy (map reduce)
// Dado un array como primer argumento, transforma un nuevo arreglo segun la función de predicado (En este caso una del objeto Math para redondear hacia abajo).
// En el caso de no existir una función de predicado, genera un arreglo con la longitud de los items mediante la propiedad length
// En el tercer caso pasar un array de objetos devolver un arreglo de números
// Teniendo ese nuevo arreglo que la función devuelva un objeto cuyo nombres de propiedad sean los valores de la tranformación del primer arreglo y el valor de esta clave la suma de las claves que se repiten

const countBy = (arrInput, fns) => arrInput.map(typeof fns === "function" ? fns : val => val[fns]).reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

const case1 = countBy([3.4, 5.7, 3.8], Math.floor);
const case2 = countBy(["Carlos", "Sandra", "Adriana"], "length");
const case3 = countBy([{count: 2}, {count: 3}, {count: 6}], x => x.count);

console.log(case1);
console.log(case2);
console.log(case3);

// * countOccurrences (reduce)
// Counts the occurrences of a value in an array.
const countOccurrences = (arr, ocurrence) => arr.reduce((acc, item) => acc = item === ocurrence ? acc + 1: acc, 0)
const arrInput = [1,1,2,1,2,3]
console.log(countOccurrences(arrInput, 1))

// * countSubstrings (Procedural)
// Dado un string como argumento encuentra el número de coincidencias según el segundo argumento
const str = "tiktok tok tok tik tok tik";
const search = "tik";

const str2 = "tutut tut tut";
const search2 = "tut"

const countSubstrings = (arr, search) => {
  let count = 0;
  let i = 0;
  while(true) {
    let coincidence = arr.indexOf(search, i);
    // Mientras existan coincidencias
    if(coincidence !== -1) {
      [count, i] = [count + 1, coincidence + 1]
    } else {
      // return in loop is also the return of the function
      return count;
    }
  }
}

console.log(countSubstrings(str, search))
console.log(countSubstrings(str2, search2))

// * countWeekDaysBetween (Object Date)

// * counter (DOM)

// * createDirIfNotExists (node)
// Creates a directory, if it does not exist.
// ! Excecute with node CMD
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
// creates the directory 'test', if it doesn't exist
createDirIfNotExists('test');

// * createElement (DOM, innerHTML, firstElementChild, createElement)
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className);

// * createEventHub (DOM, suscribe, observers)

// * currentURL (DOM, window)
const currentURL = () => window.location.href;
currentURL(); // 'https://www.google.com/'

// * curry (recursion, bind)

// * cycleGenerator (Generator)
// Creates a generator, looping over the given array indefinitely.






// filterNonUniqueBy
// Filtra los objetos del array cuyo ID interior se no esté duplicado
const  arrFilterNonUniqueBy = [
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


// filterNonUnique
// Filtra los valores que no se encuentran repetidos en el array de entrada
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniques = (arr) =>
  [...new Set(arr)].filter(
    (item) => arr.indexOf(item) !== arr.lastIndexOf(item)
  );
console.log(uniques(arr));


// MAS INFORMACIÓN SOBRE TRANSFORMACIÓN DE DATOS AQUI:
/********************************** */
// https://www.it-swarm-es.com/es/javascript/convertir-array-objeto/970373429/
/********************************** */


// decimalRan
// Generate Random number in range until 3
const decimalRan = () =>
  new Array(3).fill(1).map((item) => Math.floor(Math.random() * 2 + item));
const uniqueBy = (arr, cb) => {
  const [first] = arr;
  return arr.every((x) => x === first);
};
const result = uniqueBy(decimalRan());
console.log(result);