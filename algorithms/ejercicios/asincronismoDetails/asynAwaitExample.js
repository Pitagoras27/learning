const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = require('./fetchData')

const API = 'https://rickandmortyapi.com/api/character/'

const results = async url => {
    try {
        const data = await fetchData(url)
        const characterId = await fetchData(`${url}${data.results[0].id}`)
        const dimension = await fetchData(characterId.origin.url)
        console.log(dimension.dimension)

    } catch (e) {
        const error = new Error(e, url)
        console.log(error)
    }
}

results(API)