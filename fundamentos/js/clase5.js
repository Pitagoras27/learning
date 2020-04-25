// Objetos

// Un objeto permite guardar una colección de datos nombre valor.

var first = {
  name: 'Carlos',
  job: 'Web developer',
  age: 34
}

var second = {
  name: 'Maga',
  job: 'Designer',
  age: 21
}

const whoIs = ({ name }) => console.log(name)

whoIs(first)
whoIs(second)

// creando un nuevo objeto para no modificar sus valores cuando se pase por 
// referencia

const cumpleanos = person => {
  return {
    ...person,
    age: person.age + 1
  }
}

console.log(first)
cumpleanos(console.log(first))
console.log(first)
cumpleanos(console.log(first))
console.log(first)