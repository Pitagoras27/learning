// Promesas
const API_URL = 'https://swapi.dev/api/'
const CHARACTER_URL = 'people/:id'
const OPTIONS = { crossDomain: true }

const swResponse = person => console.log(`The character of star wars is ${person.name}.`)

const failErr = id => console.log(`No se pudo obtener el id del personaje ${id}`)

const getCharacter = id => {
  return new Promise((resolve, reject) => {
    const character = `${API_URL}${CHARACTER_URL.replace(':id', id)}`

    $
      .get(character, OPTIONS, data => {
        resolve(data)
      })
      .fail(id => reject(id))
  })
}

// Resolve promise
getCharacter(1)
  .then(swResponse)
  .catch(failErr)
