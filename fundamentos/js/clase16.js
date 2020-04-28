// Funciones como parámetros

class Person {
  constructor(name, lastName, tall) {
    this.name = name
    this.lastName = lastName
    this.tall = tall || 1.76
  }

  gretting() {
    const { name, lastName } = this
    console.log(`Hola soy ${name} ${lastName}`)
  }
}

class Developer extends Person {
  constructor(name, lastName) {
    super(name, lastName)
  }

  gretting(fn) {
    console.log(`Hola soy ${this.name} ${this.lastName} y soy desarrollador`)
    if (fn) {
      fn(this.name, this.lastName, true)
    }
  }
}

function replyGreeting(name, lastName, isDev) {
  console.log(`Buen día ${name} ${lastName}`)
  if (isDev) {
    console.log('Ah mira no sabía que eras desarrollador')
  }
}

const carlos = new Developer('Carls', 'Dev')
const paola = new Person('Pao', 'Regin')

carlos.gretting(replyGreeting)
paola.gretting()