// funciones sirven para reutilizar código

function printAge(name, age = 15) {
  console.log(`${name} tiene ${age}`)
}

var girl = 'Maga'
// printAge('Carlos', 30)
// printAge(girl)


// Alcance de las funciones
var name = 'Carlos'

// Si una variable no está definida en el cuerpo de una función ésta pertenece 
// al ámbito en donde este declarada
// Al modificar el valor de esta variable está ocasionado un efecto colateral
function upperCase() {
  name = name.toUpperCase()
  console.log(name)
}

upperCase()

var secondName = 'Francisco'
// La manera de evitar estos efectos colaterales es necesario pasar el valor por
// parámetro

// la variable n, pertenece al ámbito local de la función
function upperCaseFunctional(n) {
  n = n.toUpperCase()
  console.log(n)
}

upperCaseFunctional(secondName)
console.log(secondName)