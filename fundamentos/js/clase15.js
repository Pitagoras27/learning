// Herencia con POO 
// clases
// OOP


class Person {
  constructor(name, lastName, tall) {
    this.name = name
    this.lastName = lastName
    this.tall = tall || 1.76
  }

  gretting() {
    console.log(`Hola soy ${this.name} ${this.lastName}`)
  }

  altura() {
    if (this.tall >= 1.80) {
      console.log(`Eres alto porque mides ${this.tall}`)
    } else if (this.tall < 1.80 && this.tall > 1.65) {
      console.log(`Tienes buena altua, no eres muy alto ni muy bajito porque mide ${this.tall}`)
    } else {
      console.log(`Soy bajito porque mido ${this.tall}`)
    }
  }
}

class Desarrollador extends Person {
  constructor(name, lastName, tall) {
    super(name, lastName, tall)
  }
}

const charles = new Person('Carlos', 'Gutierrez')
const greetingChar = charles.gretting()
const chalesGreet = charles.altura()
greetingChar
chalesGreet

const developer = new Desarrollador('Carls', 'Dev', 1.61)
const greetDev = developer.gretting()
const isTalls = developer.altura()
greetDev
isTalls