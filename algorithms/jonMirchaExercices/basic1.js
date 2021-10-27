// Programa una función que cuente el número de caracteres de una cadena de texto. Ejem: miFuncion("Hola Mundo") // 10

const countCharacters = (data) => {
  if (
    (Array.isArray(data) && data !== null) ||
    typeof data === "object" ||
    typeof data === "boolean" ||
    typeof data === "undefined" ||
    typeof data === "number"
  ) {
    return "No ingresaste una cadena de texto";
  }
  return data.length;
};

// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const cutCharacters = (text, cutText) => {
  if (
    typeof text === "string" &&
    typeof cutText === "number" &&
    text.length >= cutText
  ) {
    return text.substring(0, cutText);
  } else {
    return "No ingresaste una cadena de texto o no indicaste el número de caracteres a recortar";
  }
};

// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const charactersToArray = (string, separator = " ") => {
  if (typeof string === "string") {
    return string.split(separator);
  } else {
    return "No ingresaste una cadena de texto";
  }
};

// Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeatText = (text, repeat) => {
  if (typeof text === "string") {
    const arr = new Array(repeat);
    return arr.fill().map((_) => text);
  } else {
    return "No ingresaste una cadena de texto";
  }
};

// Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//  Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// var data = [
//     [2011, 127072.7, 51584],
//     [2012, 125920.3, 59974],
//     [2013, 129305.4, 15468],
//     [2014, 135364, 84554],
//     [2015, 136757, 98754],
//     [2016, 155653.5, 155548],
//     [2017, 164130.5, 284848],
//   ],
//   [first, second] = data.reduce(
//     (r, [k, ...a]) => {
//       a.forEach((v, i) => r[i].push([k, v]));
//       return r;
//     },
//     Array.from(
//       { length: Array.isArray(data[0]) ? data[0].length - 1 : 0 },
//       () => []
//     )
//   );

// console.log(first);
// console.log(second);
