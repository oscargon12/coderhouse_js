const boton = document.querySelector('#btn');

// Event listener opcion 1

boton.addEventListener('click', function(){
    alert('Hiciste click');
});
/* boton.addEventListener('mouseenter', function(){
    alert('Hiciste click 2');
}); */

boton.addEventListener('click', functionClick);

function functionClick(){
    alert('Desde funcion externa')
}