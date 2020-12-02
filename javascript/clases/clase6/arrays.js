// Arrays

//Sintaxis 1
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

// Sintaxis 2
let meses = new Array('enero', 'febrero');

console.log(dias);

const curso = {
    curso: 'javaScript',
    plataforma: 'coderHouse'
}
const cambalache = [13, 'Hola', true, {curso: 'javaScript',
plataforma: 'coderHouse'}];

// console.table(cambalache);

// Accediendo a elementos del array
console.log(cambalache[1])

// Por base 0 imprime 'Hola'


// Modificando propiedades del objeto dentro del array
console.log(cambalache[3].curso);

cambalache[3].curso = 'react';
console.log(cambalache[3].curso);


// === Agregar eliminar valores del array ===
//Agregando valores al array
meses[3] = 'abril';
// Lo agrega en la posición 4


// Agrega valor al último
meses.push('mayo');

// console.table(meses);
meses.push('junio');
// console.table(meses);

// Agregar valor al inicio
dias.unshift('Primer dia');
console.log(dias);

// Eliminar el ùltimo valor
dias.pop();

// Eliminar el primer valor
dias.shift();
console.log(dias);


// === Unir arrays com Spread operator ===
// Con el array original
meses = ['primer mes', ...meses];
//console.table(meses);

// Creando un nuevo arreglo
const nuevoMeses = [...meses, 'Ultimo mes'];
//console.table(nuevoMeses);


console.log(dias.length);

const tabla = [ [1,2,3], [4,5,6], [7,8,9] ]
console.log(tabla);

console.log(tabla[1][2]);
// esto imprime 6

// eliminando tablas
tabla[2].pop();
console.log(tabla);
// Elimina el 9


// Splice sacar porciones del array
const tabla2 = [ 1,2,3,4,5,6,7,8,9 ];
const porcion = tabla2.splice(2, 1);
// El primer argumento dice desde donde borra, el segundo hasta cuantos avanza
// Si el primer parametro es negativo arranca de atrás pa lante 
console.log(tabla2)

console.log(porcion);
// La variable porción se queda con los elementos eliminados


// Slice slice saca la porción, pero no elimina
const porcion = tabla2.slice(2, 5);
console.log(tabla2)