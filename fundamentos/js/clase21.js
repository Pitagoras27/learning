// resolviendo promesas con async await y promise.all()
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

const getAllCharacters = async () => {
  const IDS = [1, 2, 3, 5, 8, 13, 21]
  const CHARACTER = IDS.map(id => getCharacter(id))
  try {
    const DATA = await Promise.all(CHARACTER)
    swResponse(DATA)
  } catch (e) {
    failErr(e)
  }
}

getAllCharacters()
