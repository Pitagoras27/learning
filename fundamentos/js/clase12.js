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

// map para modificar un array
// como se trata de objetos y se están pasando por referencia quedan modificados

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

console.log(newToCms)
