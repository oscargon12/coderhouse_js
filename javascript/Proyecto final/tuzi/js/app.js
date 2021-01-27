
// Proyecto: SPA de dos fases
// Entrada: El usuario registra alimentos y su fecha de vencimiento
// Salida: La app alerta alimentos a vencer y genera recetas con estos productos

  // Microinteracciones con jQuery, mostrando el botón de guardar hasta completar los campos
$ (function()
{
  // Modo eventos semántico
  /* $('#hide_alert').click(function (){
    $(this).hide()
  }) */

  // Modo eventos múltiples
  $(window).on('load', function(){
    $('#btnOk').hide()
    $('#testGrid').hide()
  })

  $('#foodDate').on('click', function (){
    $('#btnOk').show()
    //$('#testGrid').show()
  })

  //mostrando botón guardar con click en fecha
  $('#btnOk').on('click', function (){
    $('#testGrid').show()
  })

  // ...con tecla enter
  $("body").on("keydown", "input.search", function (e) {
    if(e.keyCode == 13) {
      $('#testGrid').show()
    }
  });
  
})

// ================ Recogiendo datos de alimentos ================

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

// Simulador de registros
// En este array se guardan los registros que ingrese

let categoriaStorage = localStorage.Categoria;
  let alimentoStorage = localStorage.nombre;
  let vencimientoStorage = localStorage.fecha;

let tabla = [
  { categoria:'Agrega una categoría', producto: 'Agrega un producto', vencimiento: 'Agrega una fecha' },
  //{ categoria:categoriaStorage, producto: alimentoStorage, vencimiento: vencimientoStorage },
];


window.onload = cargarEventos;

//Eventos para los botones
function cargarEventos(e){
  // Evento submit para guardar datos
  document.querySelector('#foodForm').addEventListener('submit', nuevoAlimento, false);
  document.querySelector('#actualizar-tabla').addEventListener('click', actualizarTabla, false);
}

function actualizarTabla(){
  let cuerpoTabla = document.querySelector('#alimentos-tabla');
  let tablaLlena = '';

  for( let i = 0; i < tabla.length; i++){
    tablaLlena += `<tr class="text-secondary"><td class="text-14"> ${tabla[i].categoria} </td><td class="text-14"> ${tabla[i].producto} </td><td class="text-14" id="due-date"> ${tabla[i].vencimiento} </td></tr>`;
    //El [i] dentro de cada recorrido del ciclo se refiere a cada posición del array tabla
    // Cuando [i] valga cero, se muestra el primer alimento registrado  y así sucesivamente
  }

  cuerpoTabla.innerHTML = tablaLlena;

}

// Agregando un nuevo alimento evitando la recarga con el event.prevent
// Al meter 1 y 2 en esta función se van a actualizar automaticamente
function nuevoAlimento(event){
  event.preventDefault();

  // 1 Capturando datos para guardarlos
     // Apunto al combo de categorias y le genero una variable
     const cbxCategorias = document.querySelector('#cbxCategorias');

     // == Recogiendo los datos traidos del form ==
  // A esa variable le agrego el eventListener (e)Funcion manejadora
  let categoriaFormulario = cbxCategorias.options[cbxCategorias.selectedIndex].text;
  let productoFormulario = document.querySelector('#cbxProductos').value;
  let vencimientoFormulario = document.querySelector('#inputFecha').value;

  // Enviando datos al storage
  localStorage.setItem('Categoria', categoriaFormulario);
  localStorage.setItem('nombre', productoFormulario);
  localStorage.setItem('fecha', vencimientoFormulario);

  // Haciendo push de objetos en la tabla de nuevos alimentos
  let nuevoAlimento = { categoria: categoriaFormulario, producto: productoFormulario, vencimiento: vencimientoFormulario };
  tabla.push(nuevoAlimento);

  // 2 Usando los datos capturados para enviarlos al dom
  document.querySelector('#lblProducto').innerText = `De la categoría: ${categoriaFormulario}`;
  document.querySelector('#lblIngrediente').innerText = `Registraste el alimento: ${productoFormulario}`;
  document.querySelector('#lblFecha').innerText = `Que tiene fecha de vencimiento en: ${vencimientoFormulario}`;

  console.log(categoriaFormulario, productoFormulario, vencimientoFormulario)

  let vencimientoParseado = Date.parse(vencimientoFormulario);

  // ===== identificando fecha actual =====
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //enero es 0!
  let dd = String(today.getDate()).padStart(2, '0');

  today = mm + '/' + dd + '/' + yyyy;
  today = `${yyyy}-${dd}-${mm}`;
  console.log(`La fecha de hoy es ${today}`);

  /* let dateTest = new Date(2020,11,25);
  console.log(dateTest)
  let testParseado = Date.parse(dateTest);
  console.log(`el test dice ${testParseado}`); */

  //Parseando la fecha para compararlas
  let fechaParseada = Date.now(today);

  console.log(`Fecha actual parseada: ${fechaParseada}`)
  console.log(`Vencimiento parseado: ${vencimientoParseado}`)

  const warningTitle = document.querySelector('.alert-heading');
  //console.log(warningTitle);

  const warningCard = document.querySelector('#showHide');
  //console.log(warningCard);

// Cambiando color y titulo de alertas según vencimiento
  if(vencimientoParseado<fechaParseada){
    console.log('Oh no, ya venció el alimento');
    document.querySelector('#showHide').style.display = "block";
    warningCard.classList.remove('alert-success');
    warningCard.classList.add('alert-danger');
    document.querySelector('.alert-heading').textContent = `El alimento está vencido`
    document.querySelector('#food-advice').textContent = `Te sugerimos no usar el producto`
  } else {
    console.log('Puedes comer el alimento');
    document.querySelector('.alert-heading').textContent = `¡Alimento registrado correctamente!`
    document.querySelector('#food-advice').textContent = `Ahora podrás usarlo en una receta`
    warningCard.classList.add('alert-success');
    warningCard.classList.remove('alert-danger');
    document.querySelector('#showHide').style.display = "block";
  }

}
// termina la captura de datos


// =============== Pintando el alert con los datos del form ===============
document.querySelector('body').addEventListener("keyup", mostrarRegistro);

// Con tecla enter
function mostrarRegistro(e) {
  if (e.keyCode === 13) {
    document.querySelector('#showHide').style.display = "block";
    document.querySelector('#advertising').style.display = "none";
    e.preventDefault();
    }
  }

  // = Ocultando aviso de bar code =
document.querySelector('#btnOk').addEventListener("click", ocultarAviso);


function ocultarAviso(){
  document.querySelector('#obtenerDatos').textContent = `Guardar otro`;
  document.querySelector('#advertising').style.display = "none";
}
