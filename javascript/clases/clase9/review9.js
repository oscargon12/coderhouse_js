// Repaso eventos

// Hay event listener Los que escuchan los eventos
// y Handeler los manejadores

// Sintaxis 1
/* document.querySelector('#btn').addEventListener('click', function(){
    this.innerHTML = 'Hola'
}) */

// Sointaxis 2
/* document.querySelector('#btn').addEventListener('click', saluda)

function saluda(){
    this.innerHTML = 'Hoal'
    alert('Cómo estás');
} */

// Enviar cosas al DOM con eventos perfecto para el proyecto
/* 
document.querySelector('#btn').addEventListener('click', saluda);

function saluda(){
 
    document.querySelector('#saludo').textContent = 'Holeeee';
} */


// Capturar las teclas oprimidas
document.querySelector('body').addEventListener('keyup', cambiarFondo);

function cambiarFondo(e){
    if (e.keyCode === 82){
        document.querySelector("body").style.backgroundColor = "red";
    } else if (e.keyCode === 65){
        document.querySelector("body").style.backgroundColor = "blue";
    }
}