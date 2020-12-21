
// Proyecto: SPA de dos fases
// Entrada: El usuario registra alimentos y su fecha de vencimiento
// Salida: La app alerta alimentos a vencer y genera recetas con estos productos

// == Recogiendo datos de alimentos ==

//Construyo un array llamando los arrays de ingredientes, para agruparlos e invocar el grupo más fácil
  let ingredientesTodos = [
    [],
    ingredientes_1,
    ingredientes_2,
    ingredientes_3,
    ingredientes_4,
    ingredientes_5,
    ingredientes_6,
    ingredientes_7,
    ingredientes_8,
  ];

  // == Funcion para que los ingredientes respondan a la categoría ==
  function cambia_categoria(){ 
   	//tomo el valor (selectedIndex) del select de la categoria elegida, que está dentro de foodSelect
   	let categoria = document.foodSelect.categoria[document.foodSelect.categoria.selectedIndex].value 
   	// Consulto si la categoria tiene un valor, osea != del value 0
   	if (categoria != 0) { 
      	// Si categoria está definida, entonces coloco las opciones, que están dentro de esta
      	// Selecciono el array de la categoria seleccionada
        mis_ingredientes = ingredientesTodos[categoria]
        
      	// calculo el numero de ingredientes 
        num_ingredientes = mis_ingredientes.length 
        
      	// Marco el número de ingredientes en las opciones del select para que se impriman en el html
        document.foodSelect.ingrediente.length = num_ingredientes 
        
      	// En cada categoria del array, imprimo sus opciones en el select 
      	for(i=0;i<num_ingredientes;i++){ 
         	document.foodSelect.ingrediente.options[i].value=mis_ingredientes[i] // cambio el valor del value
           document.foodSelect.ingrediente.options[i].text=mis_ingredientes[i] // cambio el valor del texto
        }	
    }
   	//marco como seleccionada la opción primera de categoria 
   	document.foodSelect.ingrediente.options[0].selected = true 
    }

    // == Obteniendo datos del formulario ==

    function obtenerDatos(){

    // 1. Obteniendo el texto del primer select
    const cbxCategorias = document.querySelector('#cbxCategorias');

    cbxCategorias.addEventListener('change', (e) => {
      let cbxCategorias = document.querySelector('#cbxCategorias');
      let producto = cbxCategorias.options[cbxCategorias.selectedIndex].text;

      document.querySelector('#lblProducto').innerText = `Vas a registrar la categoría ${producto}`;
      console.log (producto);
    });

    // 2. Obteniendo el texto del segundo select
    const cbxProductos = document.querySelector('#cbxProductos');

    cbxProductos.addEventListener('change', (e) => {
      let cbxProductos = document.querySelector('#cbxProductos');
      let ingreName = cbxProductos.options[cbxProductos.selectedIndex].text;

      document.querySelector('#lblIngrediente').innerText = `Vas a registrar el alimento ${ingreName}`;
      console.log (ingreName);
    });

    // Ya que hacen lo mismo 👆, creo que puedo meterlas en una misma funcion
    // Los parametros serían id nombre de la funcion y de la variable

    // 3. obteniendo fecha
    const inputFecha = document.querySelector('#inputFecha');

    inputFecha.addEventListener('change', (e) => {
      let inputFecha = document.querySelector('#inputFecha');
      let fechaSel = inputFecha.value;

      document.querySelector('#lblFecha').innerText = `Seleccionaste la fecha ${fechaSel}`;
      console.log (fechaSel);

    });

    }

    obtenerDatos()
    

//EL proyecto requiere pedir datos de entrada al usuario
let categoria = 'hola';
let nombre = 'Queso';
let vencimiento = document.getElementById('inputDate').value;

// Crendo el objeto con función constructora
function IngredienteUsuario(categoria, nombre, vencimiento,) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.vencimiento = vencimiento;

  this.mostrarInfo = function () {
    console.log(`El producto ${this.nombre} vence el ${this.vencimiento}`);
  };
}

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