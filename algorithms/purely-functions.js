// Map. devuelve un nuevo arreglo. Pero hay que tener especial atención cuando se trababaje con arrays de objetos ya que estos son modificados por referencia y si no se devuelve un nuevo objeto modificado se estará mutando el objeto original.

const products = [
  {id: '1', area: 'Show shop', product: 'shoes', price: 2000},
  {id: '2', name: 'Electronic', product: 'mobil', price: 5000},
  {id: '3', name: 'Toy Store', product: 'Puzzle', price: 600}
];

const offer = products.map(product => {
  if(product.price < 1000) return product;
  let newPrice = product.price * 0.9;
  return {...product, price: newPrice};
});

console.log(offer);

// Si quiero obtener unicamente un valor puedo utilizar la destructuración para acceder a él

const idProduct = user.map(({ id }) => id);
console.log(idProduct);

// Filter
// Para obtener los productos a los que aplican un descuento
  const conditionalFunction = item => item.price > 1000;
  const expensive = products.filter(conditionalFunction);
  console.log(expensive);

// Para filtrar los más barátos
const cheap = product => !conditionalFunction(product);
const others = products.filter(cheap);
console.log(others);

// Reduce
// Este método puede utilizarse para hacer la misma funcionalidad que nos brindan otros métodos como map o filter.
// Ejemplo de un calcular el doble de un conjunto de números de un array usando reduce

const numeros = [19, 21, 24, 65, 45];

// Aunque en este ejemplo el acumulador es un array vacío puede ocurrir que sea un conjunto de datos previamente establecido. Por esta razón evitamos mutarlo
const getDoubles = (acumulador, currentNumber) => [...acumulador, currentNumber * 2]

const doubles = numeros.reduce(getDoubles, []);
console.log('numeros-->', numeros);

// En caso de tener un array de objetos que no se encuentre indexado podemos hacer la implentación mediante reduce. Así en caso de requerir acceder a un elemento particular lo podemos lograr mediante el nombre de indice que ya gracias a esto conocemos.

const pets = [
  {id: '1', name: 'Trigo', edad: 6, tipo: 'Gato'},
  {id: '2', name: 'Panter', edad: 5, tipo: 'Gato'},
  {id: '3', name: 'Ratiux', edad: 3, tipo: 'Gato'},
  {id: '4', name: 'Osa', edad: 8, tipo: 'Perro'}
];

const withID = (accum, current) => ({...accum, [current.id]: current})
const withIDOther = (accum, current) => (accum[current['id']] = current, accum);
const indexedId = pets.reduce(withID, {});
const alternateIndexedId = pets.reduce(withIDOther, {});

console.log(indexedId);
console.log(alternateIndexedId);

// Convertir un array anidado en un array plano. Funciona para todo niveles de produndidad más extendidos.

const nestedArray = [3, [5,8], 7, [8]];
// alternative whitout reduce ->
// [].concat(...nestedArray)
// nestedArray.flat();

const concatArray = (accum, item) => accum.concat(item);
const arrayFlat = nestedArray.reduce(concatArray,[]);
console.log(arrayFlat);

// Siempre hay que fijarse en que retornamos. Ya en más de una ocasión puede ser un elemento que no se del tipo en el que fue declarado el acumulador

const arrFoods = [
  {principal: 'arepa', postre: 'fresas con crema'},
  {principal: 'torta de milanesa', postre: 'pastel'},
  {principal: 'filete de pescado', postre: 'gelatina'},
  {principal: 'carne', postre: 'galletas'},
  {principal: 'arepa', postre: 'pay de queso'},
];

// En este caso es necesario retornar el estado del contador en caso de no cumplir la condición. Si no lo hicese, retornaria undefined y este valor no es operable con la suma que espera realizar. Por lo que obtendriamos un NaN
const result = arrFoods.reduce((counter, food) => {
  if(food.principal === 'arepa')
      return counter += 1;
  else
      return counter
}, 0);

// Reduce realizando varias operaciones
const users = [
  {
      firstName: 'Bob',
      lastName: 'Doe',
      age: 37,
  }, {
      firstName: 'Rita',
      lastName: 'Smith',
      age: 21,
  }, {
      firstName: 'Rick',
      lastName: 'Fish',
      age: 28,
  }, {
      firstName: 'Betty',
      lastName: 'Bird',
      age: 44,
  }, {
      firstName: 'Joe',
      lastName: 'Grover',
      age: 22,
  }, {
      firstName: 'Jill',
      lastName: 'Pill',
      age: 19,
  }, {
      firstName: 'Sam',
      lastName: 'Smith',
      age: 22,
  }
];

// Obtener un array de todos los nombres completos de todos los usuarios pero que unicamente estén en sus 20s y si su nombre completo tiene de 10 caracteres en adelante

const fullName = user => `${user.firstName} ${user.lastName}`;
const onlyTwenty = user => (user.age >= 20 || user.age < 30);
const tenCharacters = user => (user.length >= 10);

// Utilizando la combinación de varios métodos funcionales
const combineMethods = users.filter(onlyTwenty).map(fullName).filter(tenCharacters);
console.log(combineMethods);

// Unicamente con reduce
const result = users.reduce((accum, user) => {
  const completeName = fullName(user);
  if(onlyTwenty(user) && tenCharacters(completeName)){
    accum.push(completeName)
  }
  return accum;
}, []);

console.log(result);

// Una forma para obtener el valor más alto con reduce
const numbers = [23,56,12,85,78,13,22,97];
const biggest = numbers.reduce((a,b) => a > b ? a : b);
console.log(biggest);

// Un ejemplo más para obtener la puntuación más alta respecto de un valor inicial (que funcionará como límite) y la puntuación más baja que también funcionará como límite.

const scores = [90, 30, 20, 75, 85, 95, 0, 55, 60, 40];

const resultScores = scores.reduce(
  (acc, item) =>
    [Math.min(acc[0], item), Math.max(acc[1], item)]
  ,[100, 0]
);

console.log(resultScores);
