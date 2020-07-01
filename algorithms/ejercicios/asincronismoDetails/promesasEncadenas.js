const { resolve } = require("path");

const primeraPromesa = new Promise((resolve, reject) => {
  resolve('Primera promesa resuelta!');
})

const segundaPromesa = new Promise((resolve, reject) => {
  resolve('Segunda promesa resuelta');
})

const terceraPromesa = new Promise((resolve, reject) => {
  resolve('tercera promesa resuelta!');
})

primeraPromesa.then(response => {
  console.log('valor de la primera promesa', response);
  return segundaPromesa
})
  .then(response => {
    console.log('valore de la segunda promesa', response);
    return terceraPromesa
  })
  .then(response => {
    console.log('Valor de la tercera promesa', response)
  })
  .catch(error => console.log('mensaje de error->',error))