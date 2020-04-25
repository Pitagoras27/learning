// Comparaciones
x = '4'
y = 4

  (x == y) // true
  (x === y) // false

// Comparacion de objetos, 
// resultados distintos a las comparaciones de tipos de datos primitivos

var carlos = {
  name: 'Carlos',
}

var sameValue = {
  name: 'Carlos',
}

  // son 2 objetos q apuntan a 2 lugares distintos en memoria
  (carlos == sameValue) // false
  (carlos === sameValue) // false

// mismo valor (efecto colateral)
carlos = sameValue // true

sameValue.name = 'Francisco'

carlos.name // Francisco
sameValue.name // Francisco

// Crear otro objeto

var otherSameValue = { ...carlos }