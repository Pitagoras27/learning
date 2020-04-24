var thing;

console.log(thing, "Se agrego al scope global dentro del objeto window")

thing = "Carlos"

console.log("la variable thing ha cambiado de tipo undefined a string", thing, "es de tipo", typeof (thing))

thing = 27

console.log("la variable thing ha vuelto a cambiar de tipo de string a number ", thing, "y es de tipo", typeof (thing))

console.log("Esto es una características de JS que se encuentra en su definición: JS es débilmente tipado")