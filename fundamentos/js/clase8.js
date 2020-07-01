// ciclo for
const person = {
  name: 'carlos',
  lastName: 'Gutiérrez',
  weight: 84,
  age: 32
}

console.log(`Al inicio del año ${person.name} pesaba ${person.weight}`)

const INCREMENTO_PESO = 0.2

const gainWeight = person => person.weight += INCREMENTO_PESO
const loseWeight = person => person.weight -= INCREMENTO_PESO

for (let i = 1; i <= 365; i++) {
  let aleatorie = Math.random()
  if (aleatorie < 0.25) {
    gainWeight(person)
  } else if (aleatorie < 0.50) {
    loseWeight(person)
  }
}

const TOTAL = person.weight.toFixed(2)
const { name } = person

console.log("finish ejecution program!")
console.log(`Al final del año ${name} pesó ${TOTAL}`)

// Other Exmple
debugger;

const solucion = {
  hidroxilos: 7,
  hidrogenion: 7,
  pH: 'Neutro'
}

const AUMENTO_IONICO = 1
// console.log(`Inicialmente el pH de esta solución es ${solucion.pH}`);

//Se crean las funciones de varaición de iones para la solución.
const añadirHidrogenion = variacion => variacion.hidrogenion += AUMENTO_IONICO
const añadirHidroxilo = variacion => variacion.hidroxilos -= AUMENTO_IONICO


for (var i = 1; i <= 14; i++) {
  var random = Math.random()
  if (random < 0.25) {
    //Se añaden hidrogeniones
    añadirHidrogenion(solucion)

  } else if (random < 0.5) {
    // Se añaden hidroxilos
    añadirHidroxilo(solucion)
  }

}

if (solucion.hidroxilos < solucion.hidrogenion) {
  solucion.pH = "Ácida"
} else {
  solucion.pH = "Básica"
}

// console.log(`Al pasar de los días, las medidciones de pH para iones [OH-] fue de${solucion.hidroxilos}  y de [H+] fue de${solucion.hidrogenion},  el pH de esta solución ahora es: ${solucion.pH}`);
