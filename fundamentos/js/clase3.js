// Operaciones comunes

var edad = 27
edad += 1 // es buna practica reducir las lineas de código

// decimales
var winePrice = 200.3
winePrice *= 3 // 600.9000000000001 JS no es preciso con el manejo de decimales

console.log(winePrice.toFixed(3)) // string
console.log(parseFloat(winePrice)) // number

var newWinePrice = 200.3

// con el módulo Math y su metodo round lo resolvemos Math.round()
var total = newWinePrice * 100 * 3 / 100 // formula

var pizza = 8
var persona = 2
var cantidaPorcionesPersona = pizza / persona 