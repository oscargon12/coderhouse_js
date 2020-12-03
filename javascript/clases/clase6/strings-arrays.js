// Recorrido de arreglos con ciclos

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

for (let i = 0; i < dias.length; i++){
    console.log(dias[i]);
}


dias.forEach(function (elem, index, array){
    console.log(`El día ${elem} es el ${index} de la semana`);
}
)


// Métodos (búsqueda) dentro del array

let resultado = dias.includes('martes', 'lunes');
console.log(resultado);

// Imprime true porque 'martes' si está dentro del array
// Solo consulta si está, no si está repetido


// Método some

// Sirve para filtros, indica si hay elementos que cumplan condiciones
let producto1 = {
    nombre: 'monitor',
    color: 'rojo',
}
let producto2 = {
    nombre: 'monitor',
    color: 'negro',
}
let producto3 = {
    nombre: 'monitor',
    color: 'gris',
}
let producto4 = {
    nombre: 'monitor',
    color: 'gris',
}

let carrito = [producto1, producto2, producto3];

let resultado2 = carrito.some( function(product){
    return product.color == 'rojo' && product.nombre == 'monitor'
}
)
console.log(resultado2)


// Método find
// Busca el primer elemento con esa condición
// Devuelve un array con esos elementos
let resultado3 = carrito.some( function(product){
    return product.color == 'rojo' && product.nombre == 'monitor'
}
)
console.log(resultado3)


// Método filter
// Busca TODOS los elementos con esa condición
let resultado4 = carrito.filter( function(product){
    return product.color == 'rojo' && product.nombre == 'monitor'
}
)
console.log(resultado4)


// Método Map
// Igual que el forEach pero crea un array adicional