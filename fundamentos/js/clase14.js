function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () { }
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Person(name, lastName = 'Gutiérrez', tall = 1.76) {
  this.name = name
  this.lastName = lastName
  this.tall = tall
}

Person.prototype.gretting = function () {
  console.log(`Hola soy ${this.name} ${this.lastName}`)
}

Person.prototype.altura = function () {
  console.log(this, '<<<<<<<<<<<<<<<<<')
  if (this.tall >= 1.80) {
    console.log(`Eres alto porque mides ${this.tall}`)
  } else if (this.tall < 1.80 && this.tall > 1.65) {
    console.log(`Tienes buena altua, no eres muy alto ni muy bajito porque mide ${this.tall}`)
  } else {
    console.log(`Soy bajita porque mido ${this.tall}`)
  }
}

const carlos = new Person('Carlos')
// const saluda = carlos.gretting()
// const talla = carlos.altura()
// saluda
// talla

//Herencia prototipal
// Tengo que crear un nuevo objeto contructor
// Si voy a utlizar un método heredado y ocupa atributos, estos deben definirse
// en el nuevo constructor, para que las sobreescriba
function Desarrollador(nombre, apellido, tall) {
  this.nombre = nombre
  this.apellido = apellido
  this.tall = tall
}

heredaDe(Desarrollador, Person)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador.`)
}

const developer = new Desarrollador('Carlos', 'Dev', 1.76)
developer.saludar()
developer.altura()
/*
function Desarrollador(nombre, apellido, edad){
	this.claseBase(nombre, apellido, edad)
}

Desarrollador.prototype = Object.create(Persona.prototype) //Hereda los metodos
Desarrollador.prototype.claseBase = Persona //Hereda el constructor
Desarrollador.prototype.constructor = Desarrollador //Permite el uso de instanceof

Desarrollador.prototype.saludar = function (){ //Sobre escribe el metodo
	console.log("Hola soy un desarrollador")
	//opcionalmente
	Persona.prototype.saludar.call(this) //Hace uso del metodo base
}
*/