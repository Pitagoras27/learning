// INcorporaciones ES8
// Object.entries 
// A cada uno de los elementos de un objeto lo convierte en un array

const data = {
  frontend: 'Carlos',
  backend: 'Azula',
  designer: 'Magaly'
}

const ENTRIES = Object.entries(data)
console.log(ENTRIES)

// Object.values() 
// REcibe un objeto enumerable y devuelve un array con sus valores

// Observar que también se ha incorporado la funcionalidad de trailing comas
// que permite agregar una coma en la lista de nombres valor del objeto
const pets = {
  perro: 'furulais',
  gato: 'panter',
  lemur: 'escorpio',
}

const VALUES_ARR = Object.values(pets)
console.log(VALUES_ARR)

// padStart y padEnd
// El método padStart() rellena la cadena actual con una cadena dada 
// (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. 
// El relleno es aplicado desde el inicio (izquierda) de la cadena actual.

const startUp = 'umbrella'
const padInicio = startUp.padStart(11, 'hi-')
const padFull = startUp.padEnd(20, '-corporation')
console.log(padFull)

// Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => { resolve('hello world!') }, 2000)
      : reject(new Error('error'))
  })
}

// const helloAsync = async () => {
//   const greeting = await helloWorld()
//   console.log(greeting)
// }

// con manejo de errores envolver siempre un try catch 
const anotherFunction = async () => {
  try {
    const HELLO = await helloWorld()
    console.log(HELLO)
  } catch (error) {
    const ERROR = await helloWorld()
    console.log(ERROR)
  }
}

anotherFunction()