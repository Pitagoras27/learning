// POO with JS
// Clases
// Prototype de persona

function Person(name, lastName = 'Gutiérrez', tall = 1.76) {
  this.name = name
  this.lastName = lastName
  this.tall = tall
}

Person.prototype.gretting = function () {
  console.log(`Hola son ${this.name} ${this.lastName}`)
}

Person.prototype.altura = function () {
  if (this.tall >= 1.80) {
    console.log(`Eres alto porque mides ${this.tall}`)
  } else if (this.tall < 1.80 && this.tall > 1.65) {
    console.log(`Tienes buena altua, no eres muy alto ni muy bajito porque mide ${this.tall}`)
  } else {
    console.log(`Soy bajita porque mido ${this.tall}`)
  }
}

const carlos = new Person('Carlos')
const saluda = carlos.gretting()
const talla = carlos.altura()
saluda
talla

const magaly = new Person('Magaly', 'Gutiérrez', 1.60)
const magSaluda = magaly.gretting()
const magTalla = magaly.altura()

magSaluda
magTalla

// FALTA VER COMO SOLUCIONAR EL PROBLEMA DEL THIS EN LAS ARROW FUNCTION


