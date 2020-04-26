// EStructura ciclica do while
let veces = 0;

let llueve = () => Math.random() < 0.25

do {
  veces += 1
} while (!llueve());

const QUANTITY = veces === 1 ? 'vez' : 'veces'

console.log(`Fui a ver si llovía ${veces} ${QUANTITY}`)