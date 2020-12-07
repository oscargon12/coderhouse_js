
// Proyecto: SPA de dos fases
// Entrada: El usuario registra alimentos y su fecha de vencimiento
// Salida: La app alerta alimentos a vencer y genera recetas con estos productos

// === Ejercicio 04 ===
// Incorporar al menos un prompt para pedir un dato 
// mostrarlo mediante alert, realizando alguna operación.
// Utilizar funciones para realizar esas operaciones

/* function pedirIngrediente() {
  let ingrediente = prompt('Ingresa el nuevo ingrediente');
  let fecha = prompt('Ingresa la fecha de vencimiento');
  let hora = prompt('Del 1 al 4 elije una hora del día');

// Esto me puede servir para la generación de recetas

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

// creo uno fijo para pruebas y uno que pide datos al usuario

function IngredienteUsuario(categoria, nombre, vencimiento,) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.vencimiento = vencimiento;

  this.mostrarInfo = function () {
    console.log(`El producto ${this.nombre} vence el ${this.vencimiento}`);
  };
}

//EL proyecto requiere pedir datos de entrada al usuario
let categoria = prompt('Ingresa la categoria del alimento a registrar (Ejem: lacteos, enlatados)');
let nombre = prompt('Ingresa el nombre del alimento a registrar');
let vencimiento = prompt('Ingresa la fecha de vencimiento');

//Se instancia el objeto
let ingrediente1 = new IngredienteUsuario(categoria, nombre, vencimiento);
console.log(ingrediente1)

function Ingrediente(categoria, nombre, vencimiento,) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.vencimiento = vencimiento;

  this.mostrarInfo = function () {
    console.log(`El producto ${this.nombre} vence el ${this.vencimiento}`);
  };
}
// Instanciando...
let ingrediente2 = new Ingrediente('Lacteos', 'Leche', '08-12-2020');
console.log (ingrediente2);

// Arreglo con mis productos (lo que llamo al objeto es la instancia)
const productos = [ingrediente1, ingrediente2];

// Agrego un nuevo ingrediente
productos.push({categoria: "Cereales",
nombre: 'arroz',
vencimiento: '15-01-2020',});

console.table(productos);


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
  nombreReceta: 'Arroz de leche',
  ingre: ['Arroz', 'leche', 'Leche condensada', 'Uvas pasas', 'canela'],
  prepara: 'estufa',
}

console.log(receta2);