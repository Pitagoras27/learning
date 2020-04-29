// resolviendo promesas de forma paralela con promise.all()

// Promesas
const API_URL = 'https://swapi.dev/api/'
const CHARACTER_URL = 'people/:id'
const OPTIONS = { crossDomain: true }

const swResponse = person => person.forEach(item => console.log(`The character of star wars is ${item.name}.`))

const failErr = id => console.log(`No se pudo obtener el id del personaje ${id}`)

const getCharacter = id => {
  return new Promise((resolve, reject) => {
    const character = `${API_URL}${CHARACTER_URL.replace(':id', id)}`

    $
      .get(character, OPTIONS, data => {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

const IDS = [1, 2, 3, 5, 8, 13, 21]
const CHARACTER = IDS.map(id => getCharacter(id))

Promise.all(CHARACTER)
  .then(swResponse)
  .catch(failErr)

// // Resolve promise
// getCharacter(1)
//   .then(character1 => {
//     swResponse(character1)
//     return getCharacter(2)
//   })
//   .then(character2 => {
//     swResponse(character2)
//     return getCharacter(3)
//   })
//   .then(character3 => {
//     swResponse(character3)
//     return getCharacter(5)
//   })
//   .then(character5 => {
//     swResponse(character5)
//     return getCharacter(8)
//   })
//   .then(character8 => {
//     swResponse(character8)
//     return getCharacter(13)
//   })
//   .then(character13 => {
//     swResponse(character13)
//     return getCharacter(21)
//   })
//   .then(character2 => {
//     swResponse(character2)
//   })
//   .catch(failErr)
