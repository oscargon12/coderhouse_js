// let nombreProducto = 'Teclado RGB';
// let precioProducto = 12000;
// let nombreProducto = 'TKL';
// let anchoProducto = 25;
// let largoProducto = 12;

// El objeto es una estructura para modelar
// Objeto literal
const producto1 = {
    nombre: 'Teclado RGB',
    precio: 12000,
    tipo: 'TLK',
    ancho: 25,
    largo: 12,

    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
    // El this me apunta a el nombre dentro del objeto
}

let nombre = producto1.nombre;
console.log(nombre);

let precio = producto1['Precio'];
console.log(precio);

const producto2 = {
    nombre: 'Monitor',
    precio: 52000,
    tipo: 'IPS',
    ancho: 35,
    largo: 20
}

// Destructuring
const {nombre, precio} = producto1;

console.log(nombre);
console.log(precio);


// Funcion constructora de objeto
function Producto(nombre, precio, img){
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;

    this.mostrarInfo = function (){
        console.log(`Èl producto ${this.nombre} tiene un precio`)
    }
}

