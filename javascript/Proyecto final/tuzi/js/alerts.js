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


const dueAlert = document.querySelector('#due-alert');
const alertTitle = document.querySelector('#alert-title');
const alertContent = document.querySelector('#alert-content');
const alertFooter = document.querySelector('#alert-footer');
const alertBtn = document.querySelector('#alert-btn');

  // Si la fecha está pasada el badge se pone en rojo
  if(vencimientoParseado<fechaParseada){
    console.log('Oh no, el alimento está vencido');

    dueAlert.classList.add('alert-danger');
    alertTitle.textContent = `El alimento está vencido`
    alertContent.textContent = `Tu alimento ${alimento} registrado el ${today} venció el ${vencimiento}`
    alertBtn.style.display = "none";

  // Si está buena se pone verde
  }else{
      console.log('Puedes disfrutar tu alimento');

      dueAlert.classList.add('alert-success');
    alertTitle.textContent = `¡Tienes tiempo!`
    alertContent.textContent = `Tu alimento ${alimento} registrado el ${today} vence el ${vencimiento}`
    alertBtn.style.display = "block";
    alertFooter.style.display = "none";
    alertBtn.classList.add('btn-success');
}