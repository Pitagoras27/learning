// callbacks

const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'

const sobrevaloradoUrl = `${API_URL}${POKEMON_URL.replace(':id', 1)}`
const opts = { crossDomain: true }
// en algunos momentos es necesario pasar 
// esta cabecera

const onPokeResponse = function (pokemon) {
  console.log(`Hola, mi pokemon sobrevalorado es ${pokemon.name}.`)
}

$.get(sobrevaloradoUrl, {}, onPokeResponse)

