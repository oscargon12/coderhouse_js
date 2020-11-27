/*
function saludar(nombre = 'Sin nombre'){

}

let num = Number(prompt('Ingresa un numero'));

function alCuadrado(x){
    console.log(`${x} elevado al cuadrado es ${x ** 2}`)
    // Ese ${x ** 2} es para elevar a 2da potencia
}

alCuadrado (num)



let numero1 = Number(prompt('Ingresa un numero'));
let numero2 = Number(prompt('Ingresa un numero'));
sumar (numero1, numero2);

alert

*/

// var nombre = 'Cristian'

// function saludar () {
//     var numbre = 'Luis'
//     console.log(nombre);
// }

// saludar();
// console.log(nombre);

let numero1 = Number(prompt('Ingresa un numero'));
let numero2 = Number(prompt('Ingresa otro numero'));

let promedio = prom(numero1, numero2);

console.log ('El promedio de ${numero1} y ${numero2} es igual a ${promedio}')

function prom (a,b) {
    let promediar = (a + b)/2;
    console.log(promediar);
    return promediar;
}