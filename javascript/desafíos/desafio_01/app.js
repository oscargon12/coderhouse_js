// 1ro Solicitar un dato con prompt e imprimirlo en consola
let name = prompt('Para iniciar ingresa tu nombre');
console.log('Hola ' + name + ', vamos a jugar con las matemáticas');

// 2do Pedir un número mediante prompt, sumarlo a otro e imprimirlo en consola
let num = prompt('Ahora ingresa un número entre 1 y 9');
let num2 = 9;
let result = Number(num) + num2;

if (num <= 9) {
  console.log('Tu número sumado a 9 da como resultado ' + result + ' Si sumas los dos digitos del resultado, obtendrás de nuevo tu número');
} else {
  console.log('Para que el truco funcione, debes ingresar un número igual o menor a 9');
}
// Se que el if no iba en este ejercicio, pero justo hoy lo vi en clase

// 3ro Pedir un texto con prompt y concatenarlo junto a otro
let word = prompt('¿Qué te pareció este truco matemático?');

console.log('Las matemáticas son ' + word);