// OBJETOS

// Objeto literal

let persona = {
    nombre: "Oscar",
    altura: 1.65,
    peso: 75,

    //Mètodos en literal
    saludar: function(){

    }
}

console.log(persona);

persona.nombre = "Oscar"
// Cambia una propiedad existente

persona.apellido = "Gonzalez"
// Crea una nueva

delete cliente1.nombre;
// Borrar una propiedad


// Funcion constructora de objeto
function Cliente(nombre, altura, peso){
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;

    //Mètodos en constructora
    this.saludar = function (){
        console.log(`Hola, mi nombre es ${this.nombre}`);
    };
    // También recibe arrow functions

    // Se llama así cliente1.saludar()
    // imprime esto: Hola, mi nombre es Marce

}

let cliente1 = new Cliente("Marce", 1.65, 65);
// Esto es instanciar
let cliente2 = new Cliente("Oscar", 1.65, 60);

console.log(cliente1.altura)
console.log(cliente2["peso"])


// Con palabra reservada new

let objetoNew = new Object()
objetoNew.nombre = "Eduardo";
objetoNew.altura = 1.65;
objetoNew.peso = 60;


// Puedo crear variables con alguna propiedad del objeto adentro
n = "nombre"
// Pero solo puedo llamarlas  con []
persona[n]
// imprime  "Oscar"


// Uso de sintaxis objeto [propiedad]
function accederPropiedad(atr){
    console.log("La propiedad es " + cliente1[atr])
}
// es un hilo que hay que seguir
accederPropiedad("peso")



// Destructuring: Extraer propiedades
// const nombre = cliente1.nombre;
// const altura = cliente1.altura;

function imprimirPropiedades(objeto){

    const {nombre,altura } = objeto
    console.log(`Extraemos ${nombre} y ${altura} del objeto`)
}

imprimirPropiedades(cliente1)
imprimirPropiedades(cliente2)
imprimirPropiedades(objetoNew)