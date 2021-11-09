// * addEventListenerAll (DOM Events)

// * addMultipleEvents (DOM Events)

// * addClass (DOM)
const addClass = (target, nameClass) => target.classList.add(nameClass);
addClass(document.querySelector("#my-id"), "active");

// * addStyles (DOM)
// The style property is neccesary to works properly
const addStyles = (target, styleList) => Object.assign(target?.style, styleList);
const element = document.querySelector("#my-id-html");
// Style attribute properties should be in camel case
addStyles(element, { fontSize: "2rem", fontWeight: 900 })

// * arrayToHTMLList (DOM)
const arrayToHTMLList = (elements, target ) => {
  document.querySelector(target).innerHTML = elements
      .map(item => `<li>${item}</li>`)
      .join("")
}

arrayToHTMLList(["item 1", "item 2", "item 3"], "#myListID")

// * attempt (DOM, instanceOf, new Error, try catch)
// Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
// (Intenta invocar una función con los argumentos proporcionados, devolviendo el resultado o el objeto de error detectado.)
const attempt = (fn, ...args) => {
  try {
    return fn(...args)
  } catch (error) {
    return error instanceof Error ? error : new Error(error)
  }
}

let allElements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, ":D")

if(allElements instanceof Error) allElements = [];
console.log(allElements)

// * bindAll (DOM)

// * bottomVisible (DOM, documentElement.clientHeihgt, window)
// Comprueba si el scroll del navegador se encuentra totalmente al final de la página

// documentElement
// documentElement.clientHeight
// window.scrollY
// documentElement.scrollHeight
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);
bottomVisible();

// * copyToClipboard (DOM)

// * counter (DOM)

// * createElement (DOM, innerHTML, firstElementChild, createElement)
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className);

// * createEventHub (DOM, suscribe, observers)

// * currentURL (DOM, window)
const currentURL = () => window.location.href;
currentURL(); // 'https://www.google.com/'

// * formToObject (DOM Array.from, new Form, reduce)
// Transformación de un "arreglo" de valores de campos de formulario a un objeto enumerable. Claves nombre valor
// Lo interesante aqui es saber que objetos de tipo array del DOM pueden ser transformados a un array con propiedades y métodos del prototipo array con Array.from y el contructor new FormData
const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
formToObject(document.querySelector("#form"));