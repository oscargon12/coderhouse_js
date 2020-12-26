
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
        
      	// Recorro cada array de categorías, e imprimo sus opciones en el select 
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

    // Apunto al combo de categorias y le genero una variable
    const cbxCategorias = document.querySelector('#cbxCategorias');

    // A esa variable le agrego el eventListener (e)Funcion manejadora
    cbxCategorias.addEventListener('change', (e) => {
      let cbxCategorias = document.querySelector('#cbxCategorias');
      let producto = cbxCategorias.options[cbxCategorias.selectedIndex].text;

      document.querySelector('#lblProducto').innerText = `De la categoría: ${producto}`;
      console.log (producto);

      localStorage.setItem('categoria', producto);
    });

    // 2. Obteniendo el texto del segundo select
    let ingreName;

    cbxProductos.addEventListener('change', pedirNombre);
    
    function pedirNombre (e){
      let cbxProductos = document.querySelector('#cbxProductos');
      ingreName = cbxProductos.options[cbxProductos.selectedIndex].text;

      document.querySelector('#lblIngrediente').innerText = `Registraste el alimento: ${ingreName}`;
      // imprimiendo el dato del usuario en el listado
      document.querySelector('#lbProducto').innerText = ingreName;
      console.log (ingreName);

      localStorage.setItem('alimento', ingreName);
    };

    // Ya que hacen lo mismo 👆, creo que puedo meterlas en una misma funcion
    // Los parametros serían id del combo, nombre de la funcion y de la variable

    // 3. obteniendo fecha
    const inputFecha = document.querySelector('#inputFecha');

    inputFecha.addEventListener('keyup', (e) => {
      let inputFecha = document.querySelector('#inputFecha');
      let fechaSel = inputFecha.value;

      document.querySelector('#lblFecha').innerText = `Que tiene fecha de vencimiento en:  ${fechaSel}`;
      // imprimiendo el dato del usuario en el listado
      document.querySelector('#lbFecha').innerText = fechaSel;
      console.log (fechaSel);

      localStorage.setItem('fecha', fechaSel);
    });

    
    // mostrando datos con botón guardar
    document.querySelector("#obtenerDatos").onclick = registroClick;

    function registroClick(e) {
    document.querySelector('#showHide').style.display = "block";
    e.preventDefault();
    }
  
    // mostrando datos con tecla enter
    document.querySelector('body').addEventListener("keyup", mostrarRegistro);
    
    function mostrarRegistro(e) {
    if (e.keyCode === 13) {
      document.querySelector('#showHide').style.display = "block";
      e.preventDefault();
      }
    }
    
  }

  obtenerDatos()
  
// Con los datos capturados, puedo almacenarlos en la "despensa"
// Datos quemados (test)
/* let categoria = 'lacteos';
let nombre = 'leche';
let vencimiento = '2021-12-22'; */

let brName = `producto prueba ${ingredientes_1[5]}`;

// Datos dinámicos
let categoria = 'lacteos';
let nombre = brName;
let vencimiento = '2020-12-26';

// Creando el objeto con función constructora
function IngredienteUsuario(categoria, nombre, vencimiento,) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.vencimiento = vencimiento;

}

//Se instancia el objeto
let ingrediente1 = new IngredienteUsuario(categoria, nombre, vencimiento);
console.log(ingrediente1)

function Ingrediente(categoria, nombre, vencimiento,) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.vencimiento = vencimiento;

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

// == Creando comidas dentro de las categorías ==
// Selecciono un elemento de la lista de alimentos
const elemento = document.querySelector('.list-group-item')
console.log(elemento.textContent);

//Defino al elemento padre de los alimentos
const padreLista = elemento.parentElement;
console.log(padreLista);

// Defino el nuevo elemento a crear
const elementoLista = document.createElement('li');
elementoLista.innerHTML = `
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    ${nombre}
  </label>
  <span class="badge badge-danger badge-pill">${vencimiento}</span>
`
elementoLista.classList.add('list-group-item')
elementoLista.classList.add('d-flex')
elementoLista.classList.add('justify-content-between')
elementoLista.classList.add('align-items-center')
elementoLista.classList.add('color800')
elementoLista.classList.add('border-0')

// Apunto donde va a ir el elemento
padreLista.appendChild(elementoLista)

console.log(elementoLista);


// Modificando estilos seún fecha
/* if (vencimiento <= 2020.12){
  console.log('Ya se pasó la fecha de consumo')
  alimentoFecha.className = 'bg-danger' 
}else {
  console.log('Puedes consumir el producto')
  alimentoFecha.className = 'bg-success' 
} */

// Para poder meter todo el li ver la línea 52 del workshop
