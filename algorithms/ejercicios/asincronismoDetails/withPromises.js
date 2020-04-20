const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const api = 'https://rickandmortyapi.com/api/character/';

const fetchData = url_request => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_request)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_request))
            }
        })
        xhttp.send()
    })
}


fetchData(API)
    .then(data => fetchData(`${API}${data.results[0].id}`))
    .then(character => fetchData(character.origin.url))
    .then(dimension => console.log(dimension.dimension))
    .catch(e => { console.log(e) })