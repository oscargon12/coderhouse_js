function prepEstofado (){
    
let ingredientes1 = ['arroz', 'papas', 'pollo'];
let ingredientes2 = ['yuca', 'maiz', 'platano'];

estofado = [...ingredientes1, ...ingredientes2, 'aguacate'];
console.log (estofado);
}

prepEstofado();


/* Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

let prom = [8, 2, 5], promedio = 0
prom.forEach(function (numero){
    promedio += numero / prom.length;
});
console.log(promedio);