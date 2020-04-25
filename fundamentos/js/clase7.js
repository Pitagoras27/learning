// condicionales
const PERSON = {
  ingenier: true,
  chef: true,
  singer: false,
  dj: false,
  guitarrist: true
}

const USER = {
  name: 'Ramses',
  apellido: 'Magno',
  edad: 20
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

console.log(`Carlos is: `)
printTrades(PERSON)