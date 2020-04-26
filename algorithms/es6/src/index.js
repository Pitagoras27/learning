// // Template strings y parámetros por defecto ES6
// function newFunction(name, age, country) {
//   var name = name || 'oscar';
//   var age = age || 32;
//   var country = country || 'CO';
//   console.log(name, age, country);
// }

// //es6
// function newFunction2(name = 'oscar', age = 32, country = 'CO') {
//   console.log(name, age, country);
//   debugger;
// }

// newFunction();
// newFunction2('Alexander', 26, 'CO');

// let hello = 'Hello';
// let world = 'World';
// console.log(hello + '  ' + world);
// console.log(`${hello} ${world}x`);



// LET y CONST, Multilínea, Spread Operator y Desestructuración

/**
 * Multiline
 */
let lorem =
  'Mollit ea veniam ad magna. Voluptate qui commodo do commodo elit officia. \n' +
  'Sit quis mollit esse quis reprehenderit labore esse nisi.';
console.log('Before ES6 -> ', lorem);

// es6
// Alternative text lorem ipsum https://slipsum.com/
let loremES6 = `My money's in that office, right? If she start giving me some bullshit about it ain't there,
and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot
that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when 
I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there,
 you the first motherfucker to get shot. You understand? `;
console.log(`After ES6 -> ${loremES6}`);

/**
 * Destructuring
 */
let person = {
  name: 'Oscar',
  age: '32',
  country: 'MX'
};
console.log('Before ES6 -> ', person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(`After ES6 -> ${name}${age}${country}`);

/**
 * Spread Operator
 */
let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Valeria', 'Yeasica', 'Camila'];
let education = ['David', 'Oscar', 'Julián', 'Ricardo', 'Valeria', 'Yeasica', 'Camila'];
console.log('Before ES6 -> ', education);

let educationES6 = ['David', ...team1, ...team2];
console.log(`After ES6 -> ${educationES6}`);

/**
 * Var, Let and Const
 */

{
  var
}

{
  var globalVar = 'Global Var';
  let globalLet = 'Global Let';
  const globalConst = 'Global Const';
  console.log(`globalLet -> ${globalLet}`);
  console.log(`globalConst -> ${globalConst}`);
}
console.log(`globalVar -> ${globalVar}`);

////////////////////////////////////////////////////////
// clase arrow funtions promesas y parámetros en objetos

let name = 'john';
let age = 32;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2)

const names = [
  { name: 'john', age: 32 },
  { name: 'yesica', age: 27 }
]
let listOfNames = names.map(function (item) {
  console.log(item.name);
})

// es6
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => { }
const listOfNames4 = name => { }
const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('se resolvio');
    } else {
      reject('no se resolvio')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => (console.log(error)));

////////////////////////////////////////////////

//Clases son una forma de manejar herencias dentro de JS y manejar POO.
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    returnthis.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//Import y export, para trabajar con módulos. Permite trabajar de manera modular diferentes lógicas.

import { hello } from './module';
hello();




//GENERATORS
//Una funcion generadora puede ser detenida en medio de su ejecución y posteriormente retormarla desde el punto en que se detuvo
//También permiten devolver diferentes resultados, podemos obtener secuencias de resultados en vez de uno solo
//son declaradas mediante un * después de la palabra clave function
//devuelven un objeto sobre el que podemos invocar el método next()
//cada que invocamos next se genera un nuevo objeto con la estructura (value: Any, done: true|false)
//La propiedad value es el valor devuelto por la función, mientras que done indica si la función ha dado por concluida su ejecución
//yield es la forma de devolver valores dentro de una funcion generadora, de modo que al devolver un valor, la ejecución para hasta que next se vuelva a llamar

function* helloWorld() {
  if (true) {
    yield 'Hello, '
  }
  if (true) {
    yield 'World'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)