// arrays
// colecciones de datos primitivos y objetos
// filtrado con filter

var gregorio = {
  name: 'Gregorio',
  lastName: 'Vides',
  height: 1.86
}

var marc = {
  name: 'Marc',
  lastName: 'Pellus',
  height: 1.50
}

var boga = {
  name: 'Ricardo',
  lastName: 'Diaz Gonzalez',
  height: 1.82
}

var peoples = [gregorio, marc, boga];

const isTall = person => person.height >= 1.80
const isShort = person => person.height <= 1.60

const heightPeople = peoples.filter(isShort);
// console.log(heightPeople)

// map para modificar un array, siempre devuelve  un nuevo array pero
// como se trata de un array de objetos y se están pasando por referencia quedan modificados

// const toCms = person => {
//   person.height = person.height * 100;
//   return person
// }

// const peoplesCms = peoples.map(toCms);
// console.log(peoplesCms)

// Object with new property 
// La manera funcional de evitar la mutabilidad

const newProp = person => ({
  ...person,
  altura: person.height * 100
})

const newToCms = peoples.map(newProp)

// console.log(newToCms)


// Reduce
const persona1 = {
  nombre: "Manuel",
  apellido: "R",
  altura: 1.76,
  cantidadDeLibros: 91
}
const persona2 = {
  nombre: "Mama",
  apellido: "G",
  altura: 1.66,
  cantidadDeLibros: 80
}
const persona3 = {
  nombre: "Rosalinda",
  apellido: "B",
  altura: 1.66,
  cantidadDeLibros: 150
}
const persona4 = {
  nombre: "mariana",
  apellido: "R",
  altura: 1.86,
  cantidadDeLibros: 100
}

const arrayTo = [persona1, persona2, persona3, persona4]
let acum = 0

// Resolve with imperative mode
for (let i = 0; i < arrayTo.length; i++) {
  acum += arrayTo[i].cantidadDeLibros
}

// console.log(`En total todas las personas tienen ${acum}`)

// Resolve with declarative mode
// envoviendo la logica entre paréntesi y separando cada sentencia con como
// la función retornará la sentencia más próxima al cierre de paréntesis

const sumTotal = (total, curr) => (total += curr.cantidadDeLibros, total)

const reducer = arrayTo.reduce(sumTotal, 0)

console.log(reducer, 'with reducer')