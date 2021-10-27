// Los siguientes ejemplos fueron extrídos de midudev en youtube con el título:
// TypeScript, tipos genéricos. ¡Mejora la reutilización de tu código!

/**
 * Los genéricos permiten comunicar al compilador de TS si una función, una clase o una interfaz
 * Puede invocarse pasando distintos tipos y no sólo uno. Funcionalmente es como usar `any` pero
 * omitiendo el SISTEMA DE COMPROBACIÓN DE TIPOS DE TS, que es una ventaja en tiempo de desarrollo
 *
 * Es importante saber manejar los Generéricos ya que permite un principio muy utilizado por los
 * desarrolladores: La reutilización de código.
 *
 * La codificación con tipos no se reduce a la definición, se tiene que indicar el tipo que se está
 * usando al momento de usar la implementación
 *
 *  */

// La función getArray es de tipo genérico (En la llamada se indica específicamente de que tipo se trata)
// Recibe un argumento de tipo genérico (También se especifíca el tipo en la llamada)
// Finalmente retorna un tipo genérico
function getArray<T>(item: T[]): T[] {
  return new Array<T>(); // <- Un array de tipo genérico. Es opcional indicarlo.
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
numberArray.push("This is not a number"); // Generates a compile time type check error

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
stringArray.push(30); // Generates a compile time type check error

// Se puede indicar a la función si va a recibir más de un tipo genérico
// En la lista de agumentos también se indica.
// Se ve que también devuelve 1 tipo genérico. En este caso el que se está utilizando como primer parámetro.
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

// Los genericos se asignan al momento de la invocación
let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");

// Al interactuar con los resultados se resuve ayuda del sistema de comprobación de tipos de TS
returnNumber = returnNumber * 100; // OK
returnString = returnString * 100; // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100;
