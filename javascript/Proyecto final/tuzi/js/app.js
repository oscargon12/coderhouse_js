
// El proyecto tiene dos fases:
// Entrada: El usuario registra alimentos y su fecha de vencimiento
// Salida: La app alerta alimentos a vencer y genera recetas con estos productos

// === Ejercicio 04 ===
// Incorporar al menos un prompt para pedir un dato 
// mostrarlo mediante alert, realizando alguna operación.
// Utilizar funciones para realizar esas operaciones

/* function pedirIngrediente() {
  let ingrediente = prompt('Ingresa el nuevo ingrediente');
  let fecha = prompt('Ingresa la fecha de vencimiento');
  let hora = prompt('Elije una hora del día');

  if (hora == 1) {
    tipoComida = 'desayuno';
  } else if (hora == 2) {
    tipoComida = 'almuerzo';
  } else if (hora == 3) {
    tipoComida = 'postre';
  } else if (hora == 4) {
    tipoComida = 'comida';
  } else {
    tipoComida = 'mecato';
  }

  alert(`${ingrediente} se va a vencer en ${fecha} quieres preparar ${tipoComida}`);
}

pedirIngrediente()
 */


// === Ejercicio 05 ===

// Crear al menos un objeto
// Incorporarle sus propiedades y su constructor
// Invocar a ese objeto en algún momento donde el usuario realice alguna acción

function Ingrediente(categoria, nombre, vencimiento,) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.vencimiento = vencimiento;

  this.mostrarInfo = function () {
    console.log(`El producto ${this.nombre} vence el ${this.vencimiento}`);
  };
}

/* //EL proyecto requiere pedir datos de entrada al usuario
let categoria = prompt('Ingresa la categoria del producto');
let nombre = prompt('Ingresa el nombre del producto');
let vencimiento = prompt('Ingresa la fecha de vencimiento');

//Se instancia el objeto
let ingrediente1 = new Ingrediente(categoria, nombre, vencimiento);
console.log(ingrediente1) */


// Constructora 2
function Receta(nombre, ingredientes, preparacion,) {
  this.nombre = nombre;
  this.ingredientes = ingredientes;
  this.preparacion = preparacion;

  this.mostrarReceta = function () {
    console.log(`Con los ingredientes ${this.ingredientes} preparaste la receta ${this.nombre}`);
  };
}

let receta2 = {
  nombreReceta: 'lasagna',
  ingre: ['pasta', 'bolognesa'],
  prepara: 'horno',
}

console.log(receta2);