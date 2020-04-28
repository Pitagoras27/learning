// Manejo de Callback para obtener la respuesta del servidor como lo vamos
// solicitando. El problema es que es q se tiene que anidad la llamada del 
// calbback en otra llamada y así sucesivamente, Generando el antipatrón de 
// diseño callback hell

// Las llamadas ya no son en paralelo ahora son secueciales

const API_URL = 'https://swapi.dev/api/'
const CHARACTER_URL = 'people/:id'

const swResponse = person => {
  console.log(`The character of star wars is ${person.name}.`)
}

const getCharacter = (id, callback) => {
  const character = `${API_URL}${CHARACTER_URL.replace(':id', id)}`
  const opts = { crossDomain: true }
  $.get(character, opts, function (res) {
    swResponse(res)
    if (callback) {
      callback()
    }
  })
}

// llamadas en secuenciales
// antipatron callback hell
getCharacter(1, function () {
  getCharacter(2, function () {
    getCharacter(3, function () {
      getCharacter(5, function () {
        getCharacter(8)
      })
    })
  })
})