// operador de reposo para extraer propiedades de un objeto y asignarlas a un 
// nuevo objeto

const PERSON = {
  name: 'Carlos',
  lastName: 'Gutiérrez',
  age: 35,
}

const { lastName, ...all } = PERSON
console.log(all)

// mergear array u objetos en unos solo o agregar elementos a otro objeto
const obj = {
  name: 'carlos',
  age: 35,
}

const objNew = {
  ...obj,
  contry: 'MX',
}

console.log(objNew)

// promise.finally
// para saber cuando ha terminado la promesa y ejecutar un callback

const worldFinally = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => { resolve('hello world with promise finally') }, 2000)
      : reject(new Error('error!'))
  })
}

worldFinally()
  .then(res => console.log(res))
  .catch(res => console.log(res))
  .finally(() => console.log('other function excuted at finally promise'))


// Obteniedo valores de grupos utilizando regex
// en este caso separo los grupos por los ()
// al final el método exec, devuelve un array
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)

