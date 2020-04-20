const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const api = 'https://rickandmortyapi.com/api/character/';

const fetchData = url => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url, true)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                xhttp.status === 200
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url))
            }
        })
        xhttp.send()
    })
}

fetchData(api)
    .then(results => {
        console.log(results)
        return fetchData(`${api}${[results.results[0].id]}`)
    })
    .then(origin => {
        console.log(origin)
        return fetchData(`${origin.origin.url}`)
    })
    .then(dimension => {
        console.log(dimension.
const api = 'https://rickandmortyapi.com/api/character/';

        const fetchData = url => {
            return new Promise((resolve, reject) => {
                const xhttp = new XMLHttpRequest()
                xhttp.open('GET', url, true)
                xhttp.onreadystatechange = (() => {
                    if (xhttp.readyState === 4) {
                        xhttp.status === 200
                            ? resolve(JSON.parse(xhttp.responseText))
                            : reject(new Error('Error', url))
                    }
                })
                xhttp.send()
            })
        }

        fetchData(api)
            .then(data => {
                console.log(data)
                return fetchData(`${api}${[results.results[0].id]}`)
            })
            .then(data => {
                console.log(data)
                return fetchData(`${api}${origin.origin.url}`)
            })
            .then(data => {
                console.log(data.dimension)
            })
            .catch(e => console.log(e))
    })
    .catch(e => console.log(e))