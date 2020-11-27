// Variables

let vari1 = 'Soy una variable';

let vari2;

vari2 = 15;

vari1 = 'Ahora tengo otro valor';

const constante = 'Soy una constante'


// ================================================================== //

// Control de flujo

let condicion = true;

if (condicion) {
    console.log('Verdadera');
}

let resultado = 30;

if (resultado > 10 ){
    console.log('Resultado es mayor que 10');
} else if (resultado < 10){
    console.log('Resultado NO es mayor que 10');
} else {
    console.log('Resultado es igual a 10');
}


let tipoString = 'Hola';

let numInt = 15;
let numFloat = 15.22222;

let tipoBool1 = true;
let tipoBool2 = false;


// Esto me servirá para probar el tipo de variable
// Puedo poner lo que sea y esto me la evalua
let comparacion = 3;

console.log('==Variable original==')
console.log(typeof comparacion)
console.log(comparacion)

let comparacionBool = Boolean(comparacion);

console.log('=Variable parseada=')
console.log(typeof comparacionBool)
console.log(comparacionBool)

console.log('==Resultado del if==')
if (comparacion){
    console.log('Comparacion verdadera');
} else {
    console.log('Comparacion FALSA');
}