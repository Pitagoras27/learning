const something = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Primer mensaje de promesa")
            }, 2000)
        } else {
            const error = new Error('Wooops')
            return reject(error)
        }
    })
}


const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(true)
            }, 2000)
        } else {
            const error = new Error('Wooops')
            return reject(error)
        }
    })
}

Promise
    .all([something(), somethingWillHappen()])
    .then((resArr) => console.log('Veo un arreglo de promesas->', resArr))
    .catch(error => console.log(error))