// {Ambito léxico}}
let scope = "I am global"
const functionScopes = () => {
    let scope = "I am a local"
    function internalFn() {
        console.log(scope)
    }
    console.log(internalFn())
}

// diferrence var and let 
var a = "x"
{
    var x = "y"
    console.log(x)
}
console.log(x)

//forno debemos utilizar var sino let
const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}
anotherFunction()

//para const y let solo se puede acceder a su valor en el scope de bloque
const fruits = () => {
    if (true) {
        var fruits1 = "Apple"
        let fruits2 = "Bnanana"
        const fruits3 = "Kiwe"
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}

// clousures
// recuerda el ámbito en el cual ha sido creado

/*
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins
    console.log("Moneybox: $" + saveCoins)
}

moneyBox(5) // 5
moneyBox(2) // 6
*/

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = coins => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    };
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); //20

const llevaLaCuenta = () => {
    const cuenta = 0;
    const aumentarcuenta = (numero) => {
        cuenta += numero
        return console.log(cuenta);
    }
    return aumentarcuenta
}

let llevameLaCuenta = llevaLaCuenta()

llevameLaCuenta(3) // 3
llevameLaCuenta(4) // 7
llevameLaCuenta(5) // 12

const buildSum = (n) => {
    function sum(a, b = 0) {
        return a + b
    }
    return sum(n + n);
}

buildSum(2) // 4

// other example
const buildCount = i => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(1);

myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);

myOtherCount(); // 10
myOtherCount(); // 11

//Variable privadas con clousures
const person = () => {
    var saveName = "Name";

    const getName = () => {
        return saveName;
    }

    const setName = (name) => {
        saveName = name;
    }

    return {
        getName,
        setName
    }
}

let newPerson = person();
console.log(newPerson.getName());
newPerson.setName('paola');
console.log(newPerson.getName());

// intentando ingresar a saveName 
console.log('aaa ', newPerson.saveName);
console.log('bbbb ', person().saveName);

//other example
const perro = (nombre, raza) => {
    let _nombre = nombre;
    let _raza = raza;

    return {
        obtNombre: () => _nombre,
        obtRaza: () => _raza,
        asignarNombre: (nuevoNombre) => _nombre = nuevoNombre,
        asignarRaza: (nuevaRaza) => _raza = nuevaRaza
    }
}

const firulais = perro('Firulais', 'Sabueso');
const poppy = perro('Poppy', 'Labrador');

console.log(firulais._nombre);//undefined
console.log(firulais.obtNombre());//firulais
console.log(firulais._raza);//undefined
console.log(firulais.obtRaza());//Sabueso
console.log(poppy.obtNombre());//Poppy
console.log(poppy.obtRaza());//Labrador>
console.log(poppy.asignarNombre("Buldog"))
console.log(poppy.obtNombre())

// Hoisting: lelevamiento de las declaraciones 
//Solo en declaraciones, no en inicializaciones

a = 2;
var a;
console.log(a) //Resultado: 2

console.log(b);
var b = 2; // Resultado: undefined


nameOfDog('Doge') //Resultado: Doge

function nameOfDog(name) {
    console.log(name)
}