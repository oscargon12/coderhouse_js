// ======== FUNCIONES ======== //

// function sumar(){
//     let a = 10;
//     let b = 15;
//     let suma = a + b;
//     // Forma concatenacion 1
//     // console.log('El resultado de la suma es ', c)

//     // Forma concatenacion 2
//     // console.log('El resultado de la suma es ' + c)

//     // Forma concatenacion 3
//     console.log(`El resultado de la suma es ${suma}`)
// }

// // Para invocar la funcion
// sumar();



// Forma 2 de crear funciones function expression

// const restar = function() {
//     let a = 25;
//     let b = 13;
//     let resta = a - b;
//     console.log(`El resultado de la suma es ${resta}`)
// }

// restar()

// Forma 2.5 de crear funciones


// Esta forma no permite llamar funciones antes de crearlas con function si
const restar = () => {
    let a = 30;
    let b = 13;
    let resta = a - b;
    console.log(`El resultado de la suma es ${resta}`)
}

restar()


sumar(1, 3);
// Así si se usan las fucniones
// Ese 10 se usa para darle un valor por defecto al parámetro, por si no se lo doy. Si ambos llevan, se pone normal, si solo uno, debe ir al final
function sumar(a, b = 10) {
    let suma = a + b;

    console.log(`El resultado de la suma es ${suma}`)
}


function sumar2(a, b) {
    let suma = a + b;

    return suma;
}
// El return me devuelve el código para poder usar la funcion dentro de una variable

// El return es el cierre de la funcion, hasta aquí va todo
let resultSuma = sumar2(12, 7);
console.log(`El resultado de la suma es ${resultSuma}`)



// Arrow funtion (return implícito)
const restar2 = (a,b) => a-b;
// Esta es la sintaxis, mucho más corta, e implicitamente está el return

let resta = restar2(10,5);
console.log(`El resultado de la resta es ${resta}`)