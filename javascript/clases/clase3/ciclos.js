// ======== CICLOS ======== //

// Ciclo FOR
for (let i = 0; i < 10 ; i++){
    console.log(`El valor de "i" es ${i}` );
}

console.log('Después del for')


for (let i = 0; i <= 10 ; i++){
    if (i == 5) {
        continue;
        // Este continue se salta el 5
    }
    console.log(`El valor de "i" es ${i}` );

    if (i == 8){
        break;
    }
}

console.log('Después del 2do for')


// Ciclo WHILE

let i = 1;

while(i < 10) {
    console.log(`El valor de "i" es ${i}` );
    i++;
}
// Con el while permite hacer condiciones de muchos tipos, no solo numéricos
// En este ciclo while no funciona el continue, el break si

// do{
//     console.log(`El valor de "i" es ${i}` );
//     i++
// } while(i < 10) 

console.log('Después del while')


// Ciclo Switch

let num = 30
switch (num){
    case 1 :
        console.log(`La variable num 1`);
        break;
    case 2 :
        console.log(`La variable num 2`);
        break;
    case 3 :
        console.log(`La variable num 3`);
        break;
    case 4 :
        console.log(`La variable num 4`);
        break;
    case 5 :
        console.log(`La variable num 5`);
        break;
    case 5 :
        console.log(`La variable num 1`);
        break;
    default:
        console.log('la variable no es ni 1,2,3,4 o 5')
}