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

const failErr = () => console.log(`No se pudo obtener el id del personaje ${id}`)

const getCharacter = (id, callback) => {
  const character = `${API_URL}${CHARACTER_URL.replace(':id', id)}`
  const opts = { crossDomain: true }
  $.get(character, opts, callback).fail(() => failErr)
}

// llamadas en secuenciales
// antipatron callback hell
getCharacter(1, res => {
  swResponse(res)
  getCharacter(2, res => {
    swResponse(res)
    getCharacter(3, res => {
      swResponse(res)
      getCharacter(5, res => {
        swResponse(res)
        getCharacter(8, res => {
          swResponse(res)
          getCharacter(13, res => {
            swResponse(res)
            getCharacter(21, res => {
              swResponse(res)
              getCharacter(34, res => {
                swResponse(res)
              })
            })
          })
        })
      })
    })
  })
})

// Gestión de errores con callbacks con fail de jquery