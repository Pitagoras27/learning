// callbacks
// EL asincronísmo consiste en como el motor de JS gestiona los tiempos,
// Las respuestas del servidor varía según muchos factores


const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'

const onPokeResponse = function (pokemon) {
  console.log(`Hola, mi pokemon sobrevalorado es ${pokemon.name}.`)
}

const getCharacter = id => {
  const sobrevaloradoUrl = `${API_URL}${POKEMON_URL.replace(':id', id)}`
  const opts = { crossDomain: true }
  $.get(sobrevaloradoUrl, opts, onPokeResponse)
}

// llamadas en paraleto
getCharacter(1)
getCharacter(2)
getCharacter(3)
getCharacter(5)
// Dado q una función que llama a otra es delegada por el event loop a la
// cola de tareas, esta va a ser resuelta una vez la pila de ejecución quede
// liberada
// cuando la función que hace la solicitud al servidor es liberara del callstack
// su callback relacionado es pasado de la cola de tareas a la pila de ejecición



// const API_BASE_URL = "https://rickandmortyapi.com/api";
// const PEOPLE = "character/:id";
// const API_CALL = `${API_BASE_URL}/${PEOPLE.replace(":id", 1)}`;
// console.log(API_CALL)

// const getData = async () => {
//   try {
//     const response = await fetch(API_CALL);
//     const data = await response.json();

//     console.log(`Oi aló!, yo me llamo ${data.name}`);
//   } catch (error) {
//     console.log("Fetch error: ", error);
//   }
// };

// getData();


// 