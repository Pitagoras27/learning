const fetchData = require('./fetchData')

const API = 'https://rickandmortyapi.com/api/character/';

// Promesas concatenadas
fetchData(API)
    .then(data => fetchData(`${API}${data.results[0].id}`))
    .then(character => fetchData(character.origin.url))
    .then(dimension => console.log(dimension.dimension))
    .catch(e => { console.log(e) })

