// Objetos

// Un objeto permite guardar una colección de datos nombre valor.

var first = {
  name: 'Carlos',
  job: 'Web developer'
}

var second = {
  name: 'Maga',
  job: 'Designer'
}

const whoIs = ({ name }) => console.log(name)

whoIs(first)
whoIs(second)
