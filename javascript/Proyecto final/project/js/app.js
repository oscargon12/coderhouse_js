

// function pedirIngrediente() {
//   // let ingrediente = prompt('Ingresa el nuevo ingrediente');
//   // let fecha = prompt('Ingresa la fecha de vencimiento');
//   // let hora = prompt('Elije una hora del día');

//   if (hora == 1) {
//     tipoComida = 'desayuno';
//   } else if (hora == 2) {
//     tipoComida = 'almuerzo';
//   } else if (hora == 3) {
//     tipoComida = 'postre';
//   } else if (hora == 4) {
//     tipoComida = 'comida';
//   } else {
//     tipoComida = 'mecato';
//   }

//   alert(`${ingrediente} se va a vencer en ${fecha} quieres preparar ${tipoComida}`);
// }

// pedirIngrediente()


// Crear al menos un objeto para controlar el funcionamiento de tu simulador
// Incorporarle sus propiedades y su constructor.
// Invocar a ese objeto en algún momento donde el usuario realice alguna acción

function Producto(categoria, nombre, vencimiento) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.vencimiento = vencimiento;


  this.mostrarInfo = function () {
    console.log(`Èl producto ${this.nombre} vence el ${vencimiento}`)
  }
}

//Mi proyecto requiere pedir datos al usuario
let categoria = prompt('Ingresa la categoria del producto');
let nombre = prompt('Ingresa el nombre del producto');
let vencimiento = prompt('Ingresa la fecha de vencimiento');

//Se instancia el objeto
let ingrediente1 = new Producto(categoria, nombre, vencimiento);
console.log(ingrediente1)
