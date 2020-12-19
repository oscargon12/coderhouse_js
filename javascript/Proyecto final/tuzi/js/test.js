
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
let vencimiento = prompt('Ingresa la fecha de vencimiento (aaaa.mm)');

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


// ==== Ejercicio clase 8 ====

// == Modificando el nombre de una categoría de alimentos ==
// Selecciono un elemento de la lista de categorías 👇 esta es la clase del html
const categoriaItem = document.querySelector('.categoryItem')
console.log(categoriaItem.textContent);

//Defino al elemento padre de las categorias
const padreCateg = categoriaItem.parentElement;
console.log(padreCateg);

// Defino el nuevo elemento a crear
const elementoCateg = document.querySelector('button');
elementoCateg.textContent = categoria;
// la categoría es dinámica traída 👆 desde el prompt

// Apunto donde va a ir el elemento creado
padreCateg.appendChild(elementoCateg);
// Dentro del padre de las categorias
console.log(elementoCateg);


// == Creando comidas dentro de las categorías ==
// Selecciono un elemento de la lista de alimentos
const elemento = document.querySelector('.list-group-item')
console.log(elemento.textContent);

//Defino al elemento padre de los alimentos
const padreLista = elemento.parentElement;
console.log(padreLista);

// Defino el nuevo elemento a crear
const elementoLista = document.createElement('label');
elementoLista.textContent = nombre;

// Apunto donde va a ir el elemento
padreLista.appendChild(elementoLista)

// Defino las clases css de ese elemento nuevo
elementoLista.className = ('color800') 
padreLista.classList.add('nueva-clase')
elementoLista.style.marginRight = '1em'

console.log(elementoLista);

//Creando la fecha de vencimiento
const alimentoFecha = document.createElement('span');
alimentoFecha.textContent = vencimiento;

alimentoFecha.className = 'badge' 

// Apunto donde va a ir la fecha
padreLista.appendChild(alimentoFecha)

// Modificando estilos seún fecha
if (vencimiento <= 2020.12){
  console.log('Ya se pasó la fecha de consumo')
  alimentoFecha.className = 'bg-danger' 
}else {
  console.log('Puedes consumir el producto')
  alimentoFecha.className = 'bg-success' 
}

// Para poder meter todo el li ver la línea 52 del workshop