// condicionales
const PERSON = {
  ingenier: true,
  chef: true,
  singer: false,
  dj: false,
  guitarrist: true
}

// trades oficios
function printTrades(peope) {
  if (peope.ingenier) {
    console.log('ingenier')
  }
  if (peope.chef) {
    console.log('chef')
  }
  if (peope.singer) {
    console.log('singer')
  }
  if (peope.dj) {
    console.log('dj')
  }
  if (peope.guitarrist) {
    console.log('guitarrist')
  }
}

printTrades(PERSON)

const USER = {
  name: 'Ramses',
  lastName: 'Magno',
  age: 20
}

const IS_MAYOR = 18

const isAdult = ({ age }) => age > IS_MAYOR

const printMessage = (user) => {
  const { name } = user
  if (isAdult(user)) {
    console.log(`${name} es mayor de edad`)
  } else {
    console.log(`Acceso denegado`)
  }
}

printMessage(USER)