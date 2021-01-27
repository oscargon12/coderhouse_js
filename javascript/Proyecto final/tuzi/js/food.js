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


let categoriaModal = localStorage.getItem('Categoria');
console.log(categoriaModal);

// Creando un switch case para guardar cada alimento dentro de su categoría
// Buscar una manera más elegante de hacer esto, por ahora se implementa así
switch (categoriaModal) {

  // Case 1 lacteos
	case categoriaModal = 'Lacteos':
    console.log(`Hay un alimento guardado en lacteos`);
    
    // Selecciono un elemento de la lista de alimentos
    const elemento = document.querySelector('.list-group-item')
    //Defino al elemento padre de los alimentos
    const padreLista = elemento.parentElement;
    console.log(padreLista);

    // Defino el nuevo elemento a crear como item de la lista
    const elementoLista = document.createElement('li');
    document.querySelector('.hide-add1').style.display = "none";

    elementoLista.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista.classList.add('list-group-item')
    elementoLista.classList.add('d-flex')
    elementoLista.classList.add('justify-content-between')
    elementoLista.classList.add('align-items-center')
    elementoLista.classList.add('color800')
    elementoLista.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista.appendChild(elementoLista)

		break;
  
  // Case 2 carnes
	case categoriaModal = 'Carnes':
    console.log(`Hay un alimento guardado en Carnes`);
    
    const elemento2 = document.querySelector('.list-group-item2')
    const padreLista2 = elemento2.parentElement;
    const elementoLista2 = document.createElement('li');
    document.querySelector('.hide-add2').style.display = "none";

    elementoLista2.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista2.classList.add('list-group-item')
    elementoLista2.classList.add('d-flex')
    elementoLista2.classList.add('justify-content-between')
    elementoLista2.classList.add('align-items-center')
    elementoLista2.classList.add('color800')
    elementoLista2.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista2.appendChild(elementoLista2)
		break;
  
  // Case 3 cereales
	case categoriaModal = 'Cereales':
    console.log(`Hay un alimento guardado en Cereales`);
    
    const elemento3 = document.querySelector('.list-group-item3')
    const padreLista3 = elemento3.parentElement;
    const elementoLista3 = document.createElement('li');
    document.querySelector('.hide-add3').style.display = "none";

    elementoLista3.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista3.classList.add('list-group-item')
    elementoLista3.classList.add('d-flex')
    elementoLista3.classList.add('justify-content-between')
    elementoLista3.classList.add('align-items-center')
    elementoLista3.classList.add('color800')
    elementoLista3.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista3.appendChild(elementoLista3)
		break;
  
  // Case 4 embutidos
	case categoriaModal = 'Embutidos':
    console.log(`Hay un alimento guardado en Embutidos`);
    
    const elemento4 = document.querySelector('.list-group-item4')
    const padreLista4 = elemento4.parentElement;
    const elementoLista4 = document.createElement('li');
    document.querySelector('.hide-add4').style.display = "none";

    elementoLista4.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista4.classList.add('list-group-item')
    elementoLista4.classList.add('d-flex')
    elementoLista4.classList.add('justify-content-between')
    elementoLista4.classList.add('align-items-center')
    elementoLista4.classList.add('color800')
    elementoLista4.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista4.appendChild(elementoLista4)
		break;
  
  // Case 5 enlatados
	case categoriaModal = 'Enlatados':
    console.log(`Hay un alimento guardado en Enlatados`);
    
    const elemento5 = document.querySelector('.list-group-item5')
    const padreLista5 = elemento5.parentElement;
    console.log(`Hola esta es una primera prueba deeee ${padreLista5}`);
    const elementoLista5 = document.createElement('li');
    document.querySelector('.hide-add5').style.display = "none";

    elementoLista5.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista5.classList.add('list-group-item')
    elementoLista5.classList.add('d-flex')
    elementoLista5.classList.add('justify-content-between')
    elementoLista5.classList.add('align-items-center')
    elementoLista5.classList.add('color800')
    elementoLista5.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista5.appendChild(elementoLista5)

		break;
  
  // Case 6 frutas
	case categoriaModal = 'Frutas':
    console.log(`Hay un alimento guardado en frutas`);

    const elemento6 = document.querySelector('.list-group-item6')
    const padreLista6 = elemento6.parentElement;
    console.log(`Hola esta es una primera prueba deeee ${padreLista6}`);
    const elementoLista6 = document.createElement('li');
    document.querySelector('.hide-add6').style.display = "none";

    elementoLista6.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista6.classList.add('list-group-item')
    elementoLista6.classList.add('d-flex')
    elementoLista6.classList.add('justify-content-between')
    elementoLista6.classList.add('align-items-center')
    elementoLista6.classList.add('color800')
    elementoLista6.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista6.appendChild(elementoLista6)
    
		break;
  
  // Case 7 verduras
	case categoriaModal = 'Verduras':
    console.log(`Hay un alimento guardado en Verduras`);
    
    const elemento7 = document.querySelector('.list-group-item7')
    const padreLista7 = elemento7.parentElement;
    console.log(`Hola esta es una primera prueba deeee ${padreLista7}`);
    const elementoLista7 = document.createElement('li');
    document.querySelector('.hide-add7').style.display = "none";

    elementoLista7.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista7.classList.add('list-group-item')
    elementoLista7.classList.add('d-flex')
    elementoLista7.classList.add('justify-content-between')
    elementoLista7.classList.add('align-items-center')
    elementoLista7.classList.add('color800')
    elementoLista7.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista7.appendChild(elementoLista7)
		break;
  
  // Case 8 adiciones
	case categoriaModal = 'Adiciones':
    console.log(`Hay un alimento guardado en Adiciones`);
    
    const elemento8 = document.querySelector('.list-group-item8')
    const padreLista8 = elemento8.parentElement;
    console.log(`Hola esta es una primera prueba deeee ${padreLista8}`);
    const elementoLista8 = document.createElement('li');
    document.querySelector('.hide-add8').style.display = "none";

    elementoLista8.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
    elementoLista8.classList.add('list-group-item')
    elementoLista8.classList.add('d-flex')
    elementoLista8.classList.add('justify-content-between')
    elementoLista8.classList.add('align-items-center')
    elementoLista8.classList.add('color800')
    elementoLista8.classList.add('border-0')

    // Apunto donde va a ir el elemento
    padreLista8.appendChild(elementoLista8)

		break;
  
  // Case default
	default:
		console.log("No hay nada guardado");
		break;
}
// End test case

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
  } /* else{
    elementoLista.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${alimento}
    </label>
    <span class="badge badge-pill" id="due-date">${vencimiento}</span>
    `
  } */

  // Le doy estilos de bootstrap con el classList.add


/* // Apunto donde va a ir el elemento
padreLista.appendChild(elementoLista) */

//console.log(elementoLista);

  // Si la fecha está pasada el badge se pone en rojo
  if(vencimientoParseado<fechaParseada){
    console.log('Oh no, el alimento está vencido');
    document.querySelector('#due-date').classList.add('badge-danger');

  // Si está buena se pone verde
  }else{
      console.log('El alimento no ha caducado, puedes disfrutarlo');
      document.querySelector('#due-date').classList.add('badge-success');
}