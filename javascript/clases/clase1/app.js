// console.log('Hola a todos');

let nombre = 'Oscar';
// Variable 
// Le estoy asignando el nombre Oscar a la variable nombre


function miFuncion(){
    let nombre = 'Eduardo';
    console.log(nombre);
}

miFuncion();
console.log(nombre);


if (true){
    let nombre = "Marce"
    console.log('nombre');
}


// let me permite ver si la variable ya fue usada
// No me deja declarar una variable, imprime error

// const define una variable que se, que NO cambiara
// ejem: const PI = 3.14

const PI = 3.14;

/*if (true){
    const PI = '5';
    console.log(typeof PI);

    if (true){
        const PI = false;
        console.log(typeof PI);
    }
}

*/

// let resultado = PI ** 5;

// console.log(resultado);

// let numero = prompt('Ingresa un numero');

// console.log(Number(numero));
// Normalmente al escribir numeros en el prompt me los imprime como string
// el Number me lo pasa a entero

let name = prompt('Ingresa tu nombre');

alert('Tu nombre es ' + name);