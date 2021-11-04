// Call, Apply y Bind
// Estos métodos sirven para enlazar el contexto a una objeto de tipo función o a un objeto literal
// La importancia radica en que puede establecer un objeto this distinto. Con apply, por ejemplo puedo escribir un metodo en un objeto y heredarlo a otro, sin necesidad de reescribir el método en el objeto que hereda

// Construyendo un objeto con una función constructora

function Gretting(greet) {
  this.name = "Carlos";
  this.printGreet = function (greet) {
    return `${this.name}`;
  };
}

// Same implementation but using arrow function as method
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet("Fluffy");
// El método getName está implementado con un arrow function y el this al que se quiere accesar efectivamente existe dentro de la función a la que pertenece por lo que la variable name se establece en el objeto contexto al que el mismo método.
console.log(cat.getName());

const gretting = new Gretting();
const bindNewName = gretting.printGreet.bind({ name: "Francisco" });
console.log(bindNewName());
// console.log(gretting.printGreet("Hi!"));

const object = {
  message: "Hello, World!",
};
function logMessage() {
  console.log(this.message); // "Hello, World!"
}
// Bind literal object to the logMessage function
logMessage.bind(object)();

// * Objeto literal
const person = {
  name: "Carlos",
  lastName: "Gutierrez",
  ocupattion: "Developer",
  description: function () {
    return `${this.name} ${this.lastName} ${this.ocupattion}`;
  },
};

const personDescription = person.description;
// bind es un clousure, por lo que hay que llamarla. En este caso la variable donde se asignó
const bindData = personDescription.bind(person);
console.log(personDescription());
console.log(bindData());

// ? Si asigno el método description del objeto person a una variable pierdo la referencia a this, por lo que es necesario bindearlo

const otherPerson = {
  description: person.description,
};

// Lost reference
const getDescriptionOther = otherPerson.description;
// Is necessary binder object data
const bindDescriptionOther = getDescriptionOther.bind(person);
console.log(bindDescriptionOther());

// * Con el método call también es posible crear atajos sintácticos o alias de funciones nativas Ejemplo:
let max = Function.prototype.call.bind(Math.max);
console.log(max(1, 2, 3, 4, 5, 6));

// * Además de pasar el contexto a la función que así lo requiera, por la perdida de su contexto
// * es posible sobreescribir el contexto con valores distintos o personalizados.

const strHelper = {
  separator: "-",
  printStr: function (...str) {
    return `${str.join(this.separator)}`;
  },
};

const newSeparator = {
  separator: "_",
};

const strHelperBind = strHelper.printStr.bind(strHelper);
// Context override
const strHelperBindNewS = strHelper.printStr.bind(newSeparator);
console.log(
  "with strHelper: %s ; with override context: %s",
  strHelperBind("la", "donna", "e", "mobile"),
  strHelperBindNewS("la", "donna", "e", "mobile")
);

// * Como se puede observar el uso de bind denota su característica multifasética por lo que es posible
// * deducir su uso a un desarrollador experimentado. Siendo así puede ser posible encontrarse con códigos como
// * el siguiente:

// Generalmente implementamos una función anonima para ejecutar como callback en un manejador de eventos

const idTarget = document.getElementId("idTarget");
let count = 0;

// Tipical Event Handler
idTarget.addEventListerner("click", function () {
  console.info("click:", (count += 1));
}); // 1, 2, 3, 4...

// With bind function set other context, although the functionality is the same
const logger = {
  count: 0,
  hasCounter: function () {
    console.info((count += 1));
  },
};

// This is more consists
idTarget.addEventListerner("click", logger.hasCounter.bind(logger)); // 1, 2, 3, 4...

// Es posible envíar parámetros desde la creación de una función ligada con bind
const obj = {
  fullname: function (name, lastname) {
    return `Your name is ${name} ${lastname}`;
  },
};

const fullname = obj.fullname;
// Although it in not necessary use bind
// First argument can be null or this and works fine
const bindfullname = fullname.bind(null, "Carlos", "Gutiérrez");
console.log(bindfullname());

//////////////////////////////////////////////////////////////////////////////

let length = 4;
function cb() {
  console.log(this.length);
}

const literalObj = {
  length: 5,
  printLogLength: function (callback) {
    callback();
  },
};

// Don't works properlu with RunCode extension, test in browser
// Al momento de llamar cb this hace referencia al ámbito global, mismo ámbito en el que fue construído
literalObj.printLogLength(cb); // Print 4

////////////////////////////////////////////////////////////////////////////////
// complicated to understand
var length = 4;
function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method(cb) {
    cb(); // 4
    // * Dado que el callback se está ejecutando mediante arguments, length está haciendo referencia a la propiedad `length` de arguments
    arguments[0](); // 3
  },
};

object.method(callback, 1, 2);

// Funciones parciales
// Anteriormente a spreed operator la manera de listar argumentos no implementados pero enviados desde la llamada se utilizaba arguments.
// Para transformar la lista de argumentos en un array, podemos utilizar call en el prototipo Array del método slice. Lo que permitirá transformar
// la lista de argumentos en un arreglo nativo. Ejemplo:

function listArgs() {
  const toArray = Array.prototype.slice.call(arguments)
  console.log(toArray);
}

listArgs("Carlos", true, ["Developer", "Design"]);

///////////////////////////////////////////

function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Crea una función la cual muestre un argumento oculto, sine necesidad de pasarlo explicitamente
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]