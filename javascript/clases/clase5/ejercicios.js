//Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.


/*    function obtenerDescuento(precio, descuento){

    if (typeof precio !== 'number' || typeof descuento !== 'number'){
        return console.log(`${precio} y ${descuento} Deben ser números`);
    }
    let precioFinal = precio - (precio * descuento / 100);

    if (precio > 0){
        return console.log(`El precio final es ${precioFinal} $`)
    }else {
        return console.log(`El precio no puede ser 0`)
    }
}

//obtenerDescuento(100,50)
obtenerDescuento(0, 40)
*/

    

// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 

// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function diferenciaAnios(anioBase){
        
    let actual = 2020;

    if (typeof anioBase !== 'number' || typeof actual !== 'number'){
        console.log(`${anioBase} y ${actual} Deben ser números`);
    }
    let diferencia= actual - anioBase;

    if (anioBase > 0){
        console.log(`La diferencia es ${diferencia} años`)
    }else {
        return console.log(`El año no puede ser 0`)
    }
        
}

diferenciaAnios(1984)