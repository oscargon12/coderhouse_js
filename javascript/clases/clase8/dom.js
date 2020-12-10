// DOM

/* document.body
// Me devuelve el body

document.head
// Me devuelve el head

document.all
// Me devuelve toda la info del html


document.all[2]
//Accedo a una parte específica del html */

//Accediendo por id
// Esto es un método
const titulo = document.getElementById('encabezado');
console.log(titulo);
console.log(titulo.textContent);
console.log(titulo.innerHTML);

// Accediendo por clase
const div = document.getElementsByClassName('contenido');
console.log(div);

const tags = document.getElementsByTagName('div');


// Metodos nuevos
const elemento = document.querySelector('#encabezado')
console.log(elemento);

const elemento2 = document.querySelectorAll('.contenido')
console.log(elemento2);

const encabezado = document.querySelector('h1');

encabezado.style.color = 'red';
encabezado.style.backgroundColor = '#e6e6e6';


// traversing
const divPadre = encabezado.parentElement;
/* divPadre.style.backgroundColor = 'blue';
console.log(divPadre);
console.log(encabezado.parentNode); */

//Seleccionando hijos
const elementos = document.querySelectorAll('div');

const nodos1 = elementos[0].childNodes;


//Crear cosas
const parrafo = document.createElement('p');

parrafo.textContent = 'Nuevo parrafo';

// divPadre.appendChild(parrafo)
// El appedChild inserta cosas de primeras

divPadre.insertBefore(parrafo, encabezado)

console.log(parrafo);



