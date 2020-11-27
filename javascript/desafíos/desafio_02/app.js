// Parte 1. Pedir un número, si es mayor a 1000 mostrar un alerta

let num1 = Number(prompt('Para iniciar ¿Cuantos USD crees que cuesta el dron DJI Mavic Pro?'));

if (num1 >= 1000) {
  alert('Yeahhh, :( pero no me alcanza')
} else {
  console.log('Muy barato');
}


// Parte 2. Pedir un texto, si es igual a 'Hola' mostrar en consola

let word = prompt('¿Cómo saludas a las personas?');

if (word === 'Hola') {
  console.log('Muy bien, así se hace')
} else if (word === 'hola') {
  console.log('Recuerda iniciar con mayúscula')
} else {
  console.log('Bueno, lo importante es saludar')
}


// Parte 3. Pedir un número, si está entre 10 y 50, mostrar un alerta

let num2 = Number(prompt('Invitas a alguien a cenar, ¿cuantos USD gastas en la cena?'));

if (num2 >= 10 && num2 <= 50) {
  alert('Felicitaciones, vas a quedar bien')
} else if (num2 > 50) {
  console.log('Wow, que pudiente')
} else {
  console.log('Que tacaño!')
}