const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const paddockType = [
  { id: 1, name: "PALTOS", totalArea: 0 },
  { id: 2, name: "AVELLANOS", totalArea: 0 },
  { id: 3, name: "CEREZAS", totalArea: 0 },
  { id: 4, name: "NOGALES", totalArea: 0 },
];

/************************ */
// Dado un arreglo de parcelas con informacion genérica obtener el tipo de parcela de acuerdo al ID proporcionado
// y calcular el area total de metros disponible y agregarlo de forma descendente a la propiedad totalArea en el
// nuevo arreglo de objetos.

// Itera en la longitud total de elementos de paddocs y suma el area a la propiedad totalArea
const totalAreaOfPaddock = () => {
  paddocks.forEach((paddock) => {
    const paddockId = paddock.paddockTypeId;
    const paddockTypeFind = paddockType.find(
      (paddock) => paddock.id === paddockId
    );

    paddockTypeFind.totalArea += paddock.area;
  });
};

// Ordena de forma descendente
const decendentPaddock = () =>
  paddockType.sort((a, b) => b.totalArea - a.totalArea);

totalAreaOfPaddock();
decendentPaddock();

// Devuelve un nuevo arreglo
paddockType.map((paddock) => paddock.name);

/////////////////////////////////// Other Alternative More modern
const sumPaddockArea = {};

const paddocSumArea = paddocks.forEach((paddock) => {
  const { paddockTypeId, area } = paddock;
  sumPaddockArea[paddockTypeId] ??= 0;
  sumPaddockArea[paddockTypeId] += area;
});

const result = paddockType
  .map((pt) => ({
    ...pt,
    sumArea: sumPaddockArea[pt.id],
  }))
  .sort((a, b) => b.sumArea - a.sumArea)
  .map((item) => item.name);

/////////////////////////////////// Other Alternative with reduce, not than efficient

const paddockResult = paddockType
  .map((pt) => {
    const result = paddocks
      .filter((item) => item.paddockTypeId === pt.id)
      .reduce((acc, item) => acc + item.area, 0);
    return {
      name: pt.name,
      sumArea: result,
    };
  })
  .sort((a, b) => b.sumArea - a.sumArea)
  .map((item) => item.name);

paddockResult;

/************************ */
// Dado un arreglo de números como entrada a una función devuelve un nuevo arreglo unicamente con los valores que tienen par

const arr = [2, 2, 4, 3, 5, 6, 6, 7, 8, 9, 9];
const uniqueVals = (arr) => {
  const obj = {};
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      newArr.push(arr[i]);
      delete obj[i];
    } else {
      obj[arr[i]] = 0;
    }
  }
  console.log(newArr, "<-<-");
};
uniqueVals(arr);

/*
Dado un string como entrada de una función, obtener los valores separados por un salto de linea (\n) 2 palabras
Y mostrar los valores para los indices de tipo PAR incluye el 0.
En la misma línea, separado por un espacio mostrar ahora los valores para los indices de tipo impar.
En un nuevo salto de linea, mostrar la siguiente palabra (siguiendo la misma lógica de agrupar las letras con índices pares
  y separada por un espacio las letras con íncides impares (input)

Ejemplo
input:
"2
Hacker -> \n
Rank -> \n
"

Output
Hce akr
Rn ak
*/

const input = `2
Hacker
Rank`;

const newWords = (s) => {
  const strOnly = s.split("\n").slice(1);
  strOnly.forEach((word) => {
    let pair = "";
    let odd = "";
    for (let i = 0; i < word.length; i++) {
      i % 2 ? (odd += word[i]) : (pair += word[i]);
    }
    console.log(pair, odd);
  });
};

newWords(input);

/**
 * Dado un string de valores separados por un salto en línea identificar los siguientes elementos: el valor anterior al primer salto de línea se corresponde con la cantidad de elementos correspondientes al directorio telefónico ( nombre - telefono). Este último conjunto de valores deberás utilizarlo para mapeear los nombres coincidentes con los amigos mostrados fuera de esta estructura.
 * Por cada consulta de nombre coincidente imprimir por consola el siguiente string: `name`=`number`}; por cada consulta no coincidente loguear:
 * `Not found.`
 *
 * Input:
 *  3
    sam 99912222
    tom 11122222
    harry 12299933
    sam
    edward
    harry

    Output:
    sam=99912222
 */

const str = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

const processData = (str) => {
  // Transform string with break line to array
  const copyInput = str.split("\n").slice(0);
  // Obtain the length of the book directory
  const lengthBook = copyInput.splice(0, 1);
  // Array frien to search
  const friendsArr = copyInput.splice(lengthBook);

  // Imperative mode
  const phoneBookArr = [];
  for (let i = 0; i < lengthBook; i++) {
    phoneBookArr.push(copyInput[i].split(" "));
  }

  // Better declarative mode
  const bookPhone = copyInput.map((entry) => entry.split(" "));
  const mapPhoneBook = new Map(bookPhone);

  friendsArr.forEach((nameFriend) => {
    if (mapPhoneBook.has(nameFriend)) {
      console.log(`${nameFriend}=${mapPhoneBook.get(nameFriend)}`);
    } else {
      console.log("Not Found.");
    }
  });
};

// Imperative mode
// function processData(input) {
//     input = input.trim().split("\n");
//     var phoneBook = {};
//     // Add entries
//     for (var i = 0; i <= input[0]; i++) {
//         let line = input[i].trim().split(" ");
//         phoneBook[line[0]] = line[1];
//     }
//     // Search
//     for (; i < input.length; i++) {
//         console.log(
//             (phoneBook[input[i]] !== undefined)
//             ? input[i] + "=" + result
//             : "Not found"
//         );
//     }
// }

processData(str);

/**
 * conversiones de base numerica
 * Dado un valor de entrada de tipo numérico a una función transformar a base numérica binaria
 * Del resultado devuelve la longitud de máxima de valores `1` que sean consecutivos, ejemplo:
 * de decimal 1911 a Binario 11101110111 // 3
 * de decimal 65535 a Binario 1111111111111111 // 16
 * de decimal 524283 a Binario 1111111111111111011 // 16
 */
let case1 = 1911;
let case2 = 65535;
let case3 = 524283;
let case4 = 5;
let case5 = 439;
let case6 = 951;
let case7 = 262141;
let case8 = 524275;
let case9 = 6;
function main(n) {
  const arrOnlyOnes = n
    .toString(2)
    .split(/0+/)
    .map((item) => item.length);
  const lengthMaxOnes = Math.max(...arrOnlyOnes);
  console.log(lengthMaxOnes);
}
main(case3);

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  console.log(arr.join(" "));
}
/* Dado un array de enteros con un valor desordenado ordenar el arreglo de mayor a menor
 * El arreglo es proporcionado como entrada a una función y solo uno de sus valores se encuentra desordenado
 * Criterios:
 * Se sabe que el último elemento del array es el que se encuentra desordenado
 */

let case1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
let case1Length = 10;
let case2 = [2, 4, 6, 8, 3];
let case2Length = 5;
let case3 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
let case3Length = 14;
let case4 = [
  2, 4, 8, 12, 15, 19, 21, 24, 26, 29, 30, 32, 35, 36, 41, 44, 49, 52, 57, 58,
  59, 64, 65, 68, 73, 77, 80, 82, 85, 88, 93, 97, 101, 105, 108, 111, 115, 118,
  122, 127, 130, 131, 132, 134, 135, 136, 138, 141, 144, 146, 151, 153, 158,
  160, 165, 169, 171, 176, 179, 184, 187, 190, 194, 197, 200, 205, 210, 215,
  217, 222, 225, 230, 231, 236, 239, 243, 244, 246, 248, 253, 254, 256, 258,
  262, 263, 267, 272, 274, 277, 280, 284, 285, 289, 291, 295, 297, 301, 305,
  310, 312, 279,
];
let case4Length = 101;

function processData(arr, n) {
  // Get last element of array
  const lastElement = arr[n - 1];

  // Iterates with array
  // The control variable `i` set value with length of array minor 2
  // The iterates of last element to first element
  for (let i = n - 2; i >= 0; i--) {
    // Just until current element be menor that lastElement, asign your value and break iteration
    if (arr[i] < lastElement) {
      arr[i + 1] = lastElement;
      console.log(...arr);
      break;
    } else {
      // Otherwise assign current value to arr that index is
      arr[i + 1] = arr[i];
      console.log(...arr);
      // For case that insert element in the index 0
      if (i === 0) {
        arr[i + 1] = lastElement;
        console.log(...arr);
      }
    }
  }
}

processData(case1, case1Length);

/**
 * Otro algoritmo de inserción y ordenamiento
 * Dado un string de números separado por un espacio, convierte en un arreglo de números
 * Muestra en cada iteración el ordenamiento
 */

let case1 = "1 4 3 5 6 2";
let length1 = 6;
let case2 = "9 8 6 7 3 5 4 1 2";
let length2 = 9;
let case3 =
  "406 157 415 318 472 46 252 187 364 481 450 90 390 35 452 74 196 312 142 160 143 220 483 392 443 488 79 234 68 150 356 496 69 88 177 12 288 120 222 270 441 422 103 321 65 316 448 331 117 183 184 128 323 141 467 31 172 48 95 359 239 209 398 99 440 171 86 233 293 162 121 61 317 52 54 273 30 226 421 64 204 444 418 275 263 108 10 149 497 20 97 136 139 200 266 238 493 22 17 39";
let length3 = 100;
let case4 =
  "1 2 7 9 13 14 19 20 23 29 33 24 36 37 42 45 48 53 55 60 64 65 67 68 71 72 76 79 82 85 87 91 96 100 101 105 109 111 115 119 121 126 128 133 134 139 141 145 150 154 156 158 159 164 168 171 173 177 178 180 184 188 172 190 193 196 198 201 206 207 212 215 220 225 227 229 230 234 237 239 244 248 251 252 253 254 256 257 262 264 267 270 273 278 282 287 292 293 296 301 302 303 304 309 311 312 313 314 317 321 326 330 335 337 339 343 346 349 354 359 364 368 374 377 378 381 382 370 383 387 392 395 396 397 398 400 404 406 410 411 413 414 415 416 418 419 424 427 430 432 433 435 440 443 448 452 453 458 460 465 467 468 470 471 473 478 480 482 484 487 490 492 494 496 499 502 504 507 509 512 517 518 520 525 527 531 535 536 541 543 546 551 554 558 562 563 567 570 573 575 578 583 584 589 590 595 597 601 605 607 608 610 613 618 621 622 624 629 634 642 643 647 650 652 655 657 661 664 668 673 677 681 683 688 690 691 694 696 699 704 706 711 714 716 718 720 723 724 725 728 732 733 734 737 740 744 746 750 755 756 637 758 762 765 768 769 772 775 777 779 782 784 787 788 790 795 798 800 802 806 810 811 814 816 819 822 823 828 832 835 836 840 843 845 848 852 856 859 862 866 867 869 873 878 881 883 885 888 892 896 901 905 910 912 917 918 922 924 926 929 932 933 936 941 943 948 953 957 960 963 967 972 975 977 980 984 988 991 995 997 1001 1003 1007 1012 1017 1018 1020 1022 1027 1032 1036 1040 1043 1044 1048 1049 1051 1055 1056 1058 1063 1067 1072 1073 1076 1077 1080 1083 1084 1087 1090 1093 1097 1100 1102 1103 1106 1109 1112 1117 1120 1121 1122 1125 1127 1131 1132 1136 1140 1143 1147 1150 1152 1154 1158 1161 1164 1167 1171 1174 1175 1180 1183 1190 1192 1194 1197 1200 1187 1205 1208 1211 1214 1218 1223 1224 1226 1228 1230 1231 1236 1237 1241 1244 1247 1248 1253 1256 1259 1264 1266 1275 1277 1282 1283 1286 1287 1288 1293 1295 1297 1299 1300 1305 1307 1311 1315 1317 1321 1326 1327 1330 1332 1334 1335 1336 1341 1346 1347 1351 1356 1361 1271 1365 1370 1374 1376 1377 1378 1379 1382 1385 1390 1395 1400 1404 1408 1409 1412 1415 1420 1423 1424 1428 1429 1430 1431 1433 1436 1440 1443 1446 1448 1453 1455 1457 1460 1463 1466 1467";
let length4 = 500;
let case5 = "8 7 6 5 4 3 2 1";
let length5 = 8;

function proccessData(n, arr) {
  // Itero desde el indice 1, para tener acceso a su valor y poderlo comparar en una nueva iteración anidada
  const arrNumbers = arr.split(" ").map(Number);
  for (let i = 1; i < n; i++) {
    // Dado que el indice de i es 1 y este incrementa en cada iteración, debo decrementar j en 1 para acceder a los
    // elementos restantes del arreglo
    for (let j = i; j > 0; j--) {
      // Como ya accedo a los elementos del arreglo y puedo compararlo con el elemento del indice anterior compruebo
      // Si el elemento menos 1 de la iteración anidada actual es menor al elemento de la iteración actual, accedo para modificar el arreglo
      if (arrNumbers[j] < arrNumbers[j - 1]) {
        // Aplico destructuración de arreglos
        // Recorro el elemento de la derecha a izquierda ya que es inferior al actual
        [arrNumbers[j], arrNumbers[j - 1]] = [arrNumbers[j - 1], arrNumbers[j]];
      }
    }
    // Imprimo el ordenamiento en cada iteración.
    // Imprime los elementos del arreglo por cada iteración a partir del indice 1
    // Si el arreglo tiene 6 elemento imprimirá 6 veces dado que la iteración comienza en 1
    console.log(arrNumbers.join(" "));
  }
}

proccessData(length2, case2);

/**
 * Lista enlazada
 * Una lista enlazada es una estructura de datos lineal constituída por una secuencia de NODOS en donde se guardan campos
 * de datos Arbitrarios y una referencia al siguiente nodo
 *
 * */

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = function (head, data) {
    console.log(data, "<---data");
    let newNode = new Node(data);
    // if (head != null ) {

    // }
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      console.log(start.data + " ");
      start = start.next;
    }
  };
}
function main() {
  const T = [2, 3, 4, 1];
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T.length; i++) {
    var data = T[i];
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}

main();

// const multiDimentional = [
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0 ],
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 2, 4, 4, 0 ],
//   [ 0, 0, 0, 2, 0, 0 ],
//   [ 0, 0, 1, 2, 4, 0 ]
// ]

// Dada una tabla con una coleccion de nombres y emails. Imprime en orden alfabético la lista de personas que cuyo email termine en @gmail.com
// Constraints
// La longitud de cada nombre no deberá sobrepasar los 20 caracteres
// La longitud de cada uno de los emails no deberá sobrepasar los 50 caracteres

// Sample Input
const names = ["riya", "julia", "julia", "julia", "samantha", "tanya"];
const emails = [
  "riya@gmail.com",
  "julia@julia.me",
  "sjulia@gmail.com",
  "julia@gmail.com",
  "samantha@gmail.com",
  "tanya@gmail.com",
];

const tableEmails = [
  {
    name: "riya",
    email: "riya@gmail.com",
  },
  {
    name: "julia",
    email: "julia@julia.me",
  },
  {
    name: "julia",
    email: "sjulia@gmail.com",
  },
  {
    name: "julia",
    email: "julia@gmail.com",
  },
  {
    name: "samanta",
    email: "samantha@gmail.com",
  },
  {
    name: "tanya",
    email: "tanya@gmail.com",
  },
];

const tableEmails2 = [
  {
    name: "riya",
    email: "riya@gmail.com",
  },
  {
    name: "julia",
    email: "julia@julia.me",
  },
  {
    name: "julia",
    email: "sjulia@gmail.com",
  },
  {
    name: "julia",
    email: "julia@gmail.com",
  },
  {
    name: "samantha",
    email: "samantha@gmail.com",
  },
  {
    name: "tanya",
    email: "tanya@gmail.com",
  },
  {
    name: "riya",
    email: "ariya@gmail.com",
  },
  {
    name: "julia",
    email: "bjulia@julia.me",
  },
  {
    name: "julia",
    email: "csjulia@gmail.com",
  },
  {
    name: "julia",
    email: "djulia@gmail.com",
  },
  {
    name: "samantha",
    email: "esamantha@gmail.com",
  },
  {
    name: "tanya",
    email: "ftanya@gmail.com",
  },
  {
    name: "riya",
    email: "riya@live.com",
  },
  {
    name: "julia",
    email: "julia@live.com",
  },
  {
    name: "julia",
    email: "sjulia@live.com",
  },
  {
    name: "julia",
    email: "julia@live.com",
  },
  {
    name: "samantha",
    email: "samantha@live.com",
  },
  {
    name: "tanya",
    email: "tanya@live.com",
  },
  {
    name: "riya",
    email: "ariya@live.com",
  },
  {
    name: "julia",
    email: "bjulia@live.com",
  },
  {
    name: "julia",
    email: "csjulia@live.com",
  },
  {
    name: "julia",
    email: "djulia@live.com",
  },
  {
    name: "samantha",
    email: "esamantha@live.com",
  },
  {
    name: "tanya",
    email: "ftanya@live.com",
  },
  {
    name: "riya",
    email: "gmail@riya.com",
  },
  {
    name: "priya",
    email: "priya@gmail.com",
  },
  {
    name: "preeti",
    email: "preeti@gmail.com",
  },
  {
    name: "alice",
    email: "alice@alicegmail.com",
  },
  {
    name: "alice",
    email: "alice@gmail.com",
  },
  {
    name: "alice",
    email: "gmail.alice@gmail.com",
  },
];

const filterTable = tableEmails2
  .filter(({ name, email }) => {
    // email.search(/@gmail.com$/) > 0 // Not Optimal
    // email.endsWith("@gmail.com") // Not Optimal
    return (
      /^[a-z]{1,20}$/.test(name) && /^([a-z\.]+@gmail\.com){1,50}$/.test(email)
    );
  })
  .map((name) => name.name)
  .sort()
  .forEach((item) => console.log(item));

// Condicionales anidados
// Una librería local necesita calcular la multa para los usuarios que no entreguen los libros en los siguientes tiempos específicados:
// Si el libro se devuelve en la fecha prevista de devolución o antes, no se cobrará ninguna multa.
// Si el libro se devuelve después del día de devolución esperado, pero aún dentro del mismo mes y año, la MULTA ES DE 15 Hackos por cada día de retraso
// Si el libro se devuelve después del mes de devolución esperado pero aún dentro del mismo año la MULTA ES DE 5OO Hackos por cada mes de retraso
// Si el libro se devuelve después del año calendario en el que se esperaba, la MULTA ES DE 10000 Hackos.

const actual = "9 6 2015";
const due = "6 6 2015";
// 45
const actual2 = "2 6 2014";
const due2 = "5 7 2014";
// 0 ** Error en test
const actual3 = "8 4 12";
const due3 = "1 1 1";
// 10000 ** Error en test
const actual4 = "31 8 2004";
const due4 = "20 1 2004";
// 3500
const actual5 = "31 12 2009";
const due5 = "1 1 2010";
// 0
const actual6 = "1 1 2010";
const due6 = "31 12 2009";
// 10000
const actual7 = "1 1 1";
const due7 = "8 8 8";
// 0
const actual8 = "23 12 1234";
const due8 = "19 9 2468";
// 0
const actual9 = "24 12 1898";
const due9 = "18 9 1898";
// 1500
const actual10 = "24 10 1776";
const due10 = "10 10 1776";
// 210
/**
 * Devuelve la deuda calculada según la fecha de vencimiento
 * @param {string} actual current time
 * @param {string} due date due
 */
function processData(actual, due) {
  const [actualDay, actualMount, actualYear] = actual.split(" ");
  const [dueDay, dueMount, dueYear] = due.split(" ");

  // calculations
  const yearFinal = 10000 * (actualYear - dueYear);
  const mountFinal = 500 * (actualMount - dueMount);
  const dayFinal = 15 * (actualDay - dueDay);

  // Validations starts with years
  // If tjere is no debt per year
  if (yearFinal === 0) {
    // Not debt per mount
    if (mountFinal === 0) {
      // return debt per day
      return dayFinal > 0 ? dayFinal : 0;
    } else {
      return mountFinal > 0 ? mountFinal : 0;
    }
  }
  // Else not necesary
  return yearFinal > 0 ? 10000 : 0;
}

const result = processData(actual3, due3);
console.log(result);
