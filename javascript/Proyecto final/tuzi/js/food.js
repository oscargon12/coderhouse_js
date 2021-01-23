// === Guardando alimentos en despensa ===

  let categoria = localStorage.Categoria;
  let alimento = localStorage.nombre;
  let vencimiento = localStorage.fecha;

  //parseo la fecha de vencimiento del producto
  let vencimientoParseado = Date.parse(vencimiento);
  console.log(`El alimento ${alimento} de la categoría ${categoria}, vence el ${vencimiento}`);
console.log(`Este es el vencimiento parseado: ${vencimientoParseado}`)

// Traigo la fecha actual
let today = new Date();
let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, '0'); //enero es 0!
let dd = String(today.getDate()).padStart(2, '0');

today = mm + '/' + dd + '/' + yyyy;
today = `${yyyy}-${dd}-${mm}`;
console.log(`La fecha de hoy es ${today}`);

//Parseando la fecha para compararlas
let fechaParseada = Date.now(today);
console.log(`Esta es la fecha parseada: ${fechaParseada}`)


// ====== Trayendo datos ======

// Agrego un nuevo ingrediente

function IngredienteUsuario(categoria, nombre, vencimiento,) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.vencimiento = vencimiento;
  }
  
  //Se instancia el objeto
  let ingrediente1 = new IngredienteUsuario(categoria, alimento, vencimiento);
  console.log(ingrediente1)

const productos = [ingrediente1];

productos.push({categoria: categoria,
nombre: alimento,
vencimiento: vencimiento});

console.table(productos);

// == Creando comidas dentro de las categorías ==
// Selecciono un elemento de la lista de alimentos
const elemento = document.querySelector('.list-group-item')

//Defino al elemento padre de los alimentos
const padreLista = elemento.parentElement;
console.log(padreLista);

// Defino el nuevo elemento a crear como item de la lista
const elementoLista = document.createElement('li');

// Si el localstorage está vacío debe indicar que no hay nada
if (localStorage.getItem("Categoria") === null && localStorage.getItem("nombre") === null && localStorage.getItem("fecha") === null) {
    elementoLista.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
    No hay alimentos en esta categoría
    </label>
    <span class="badge badge-secondary badge-pill"> - </span>
    `
    console.log('No hay alimentos en esta categoría')

    // Si hay algo en storage ingreso el alimento
  } else{
    elementoLista.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
  }

elementoLista.classList.add('list-group-item')
elementoLista.classList.add('d-flex')
elementoLista.classList.add('justify-content-between')
elementoLista.classList.add('align-items-center')
elementoLista.classList.add('color800')
elementoLista.classList.add('border-0')

// Apunto donde va a ir el elemento
padreLista.appendChild(elementoLista)

console.log(elementoLista);

  // Si la fecha está pasada el badge se pone en rojo
  if(vencimientoParseado<fechaParseada){
    console.log('Oh no, el alimento está vencido');
    document.querySelector('#due-date').classList.add('badge-danger');

  // Si está buena se pone verde
  }else{
      console.log('Pueses disfrutar tu alimento');
      document.querySelector('#due-date').classList.add('badge-success');
}