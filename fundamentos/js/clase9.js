// rstructura do while. Se va a repetir cierta cantidad de veces hasta que una confición se deje de cumplir
// Se quiere saber que cantidad de días pasaron hasta que una persona cumplió la meta de bajar 3 kilos

const person = {
  name: 'Carlos',
  lastName: 'Gutiérrez',
  peso: 84,
  edad: 35,
}

const META = person.peso - 3
const INCREMENT_PESO = 0.2

let dias = 1

const adelgazo = person => (person.peso -= INCREMENT_PESO)
const incremento = person => (person.peso += INCREMENT_PESO)
const ejercicio = () => Math.random() < 0.30
const comioMas = () => Math.random() < 0.20

while (person.peso > META) {
  if (ejercicio()) {
    adelgazo(person)
  }
  if (comioMas()) {
    incremento(person)
  }
  dias += 1
}


console.log(`Pasaron ${dias} hasta que ${person.name} adelgazó 3kg `)
