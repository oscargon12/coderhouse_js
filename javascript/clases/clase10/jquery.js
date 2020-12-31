// Esperar a que cargue el DOM

// sintaxis deprecated

/* $(document).ready()function({
}); */

$(function(){
});

// Selectores
$('h2') // Sintaxis css
$('.clase') // Sintaxis css

$(':input') // Selecciono tds los inputs, textarea, selct y botones
$('input') // Selecciono tds los inputs, menos textarea, selct y botones

// Metodos
  

$('elemento').remove(); // Elimino un elemento

$('elementoPadre').appendTo('<codigo html>'); // Inserta cod HTML como ultimo hijo
$('elementoPadre').append('<codigo html>'); // Inserta cod HTML como ultimo hijo
$('elementoPadre').prepend('<codigo html>'); // Inserta cod HTML como primer hijo

$('elementoAInsertar').insertBefore('target'); // Inserta uno o varios elementos antes del target
$('elementoAInsertar').insertAfter('target'); // Inserta uno o varios elementos despues del target

$('elemento').addClass('clase1 clase2 claseN');
$('elemento').removeClass('clase1 clase2 claseN');

// Eventos addEventListener

//Varios eventos sobre un mismo elemento
$('elemento').on({
    click: function(){
    },
    
    dbclick: function(){
    },

});


// Un solor evento
$('elemento').on('click', function(){})

$('elemento').click(function () {})

// Efectos y animaciones
$('elemento').hide(); // == display: none;
$('elemento').show(); // == display: block u otros;
$('elemento').toogle(); // Muestro oculto un elemento  

$('elemento').fadeIn();
$('elemento').fadeOut();
$('elemento').fadeToogle();

$('elemento').slideIn();
$('elemento').slideOut();
$('elemento').slideToogle();


// Prop css
$('elemento').css('background-color', 'blue'); // Una prop

$('elemento').css({
    color: 'red',
    backgroundColor: 'green',
    'background-color': 'red',
    width: '400px',
})

