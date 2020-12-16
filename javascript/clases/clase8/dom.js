// DOM

/* Cada etiqueta html y cada uno de sus atributos representan un nodo 
Para acceder a cualquier nodo:
document = todo nuestro html
*/

/* document.body
// Me devuelve el body

document.head
// Me devuelve el head

document.all
// Me devuelve toda la info del html

document.all[2]
//Accedo a una parte específica del html

document.URL
Me devuelve la dirección de mi documento
*/

// Acceder a nodos específicos
//Accediendo por id
// Esto es un método
const titulo = document.getElementById('encabezado');
// El getElementById es un método
// los elementos html se modelan como objetos
console.log(titulo); //Esto imprime el tag y su contenido
console.log(titulo.textContent); // Esto imprime solo el contenido
console.log(titulo.innerHTML);

// Accediendo por clase
const div = document.getElementsByClassName('contenido');
// este método dice elementS, porq puede recibir más de un elemento
console.log(div); // Esto me imprime un html collection

div[0].classList // Con sintaxis de punto puedo acceder a los elementos del array 
//DOMTokenList ["contenido", value: "contenido"]

const tags = document.getElementsByTagName('div');


// === Metodos nuevos ===
const elemento = document.querySelector('#encabezado')
/* Para seleccionar id o clases con querySelector
 uso sintaxis de css (.class #id) */
 //El querySelector llama al primer elemento con esa clase
console.log(elemento);

const elemento2 = document.querySelectorAll('.contenido p')
console.log(elemento2);


// Acá llamo al h1
const encabezado = document.querySelector('h1');

// Y con esto puedo modificar los estilos
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



