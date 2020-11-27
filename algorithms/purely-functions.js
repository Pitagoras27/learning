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
const indexedId = pets.reduce(withID, {});
console.log(indexedId);

// Convertir un array anidado en un array plano. Funciona para todo niveles de produndidad más extendidos.

const nestedArray = [3, [5,8], 7, [8]];

const concatArray = (accum, item) => accum.concat(item);
const arrayFlat = nestedArray.reduce(concatArray,[]);
console.log(arrayFlat);
