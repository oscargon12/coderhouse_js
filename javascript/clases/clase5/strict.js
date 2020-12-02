'use strict'

const producto = {
    nombre: 'Té hindú',
    color: 'Marrón'
}

// Congelando el objeto, no puedo modificar
// Object.freeze(producto);
console.log(Object.isFrozen(producto))

// Permite modificar pero no agregar
// Object.seal(producto);
console.log(Object.isSealed(producto))

const producto2 = {
   tipo: 'Artesanal',
   forma: 'prisma'
}

// Unir objetos spread operator  (Se puede agregar más propiedades)
const resultado = {
    ...producto, 
    ...producto2,
    anio: 2020,
}
console.log(resultado);


const keys = Object.keys(producto2);
console.log(keys);

const value = Object.value(producto2);
console.log(keys);
