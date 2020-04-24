// Utilizando metodos para las cadenas
var name = "Carlos"
var lastName = "gutiérrez"

var nameMinuscula = name.toLowerCase()
var lastMayuscula = lastName.toUpperCase()
var onlyFirstCharUpper = lastName.charAt(0).toUpperCase() + lastName.slice(1)
var nameLength = name.length
var intepolationEs6 = `${name} ${onlyFirstCharUpper}`
var cutStr = name.substr(1, 2)
var lastCharName = name.slice(name.length - 1)