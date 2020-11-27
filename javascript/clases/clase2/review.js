let condicion1 = false;
let condicion2 = false;

if (condicion1){
    console.log('Ocurrió la condicion 1')
} else if (condicion2){
    console.log('Ocurrió la condicion 2')
} else {
    console.log('No ocurre nada')
}

// ============================= //

let stockVacunas = 5000;

let retira = Number(prompt('¿Cuantas vacunas retiras?'));

if (retira > stockVacunas){
    alert('No hay suficiente stock')
} else if (retira < stockVacunas){
    stockVacunas -= retira;
    // Esto es igual a  stockVacunas = stockVacunas - retira
    alert( 'Usted retira ' + retira + ' y quedan ' + stockVacunas)
}


// ============================= //


let edad = parseInt(prompt('Cual es tu edad?'));

if (edad < 12){
    console.log('Eres muy joven');
}


// ============================= //


let num1 = 5;
let num2 = 8;

if (num1 > num2){
    console.log('num1 no es mayor que num2');
}

if (num1 > 0){
    console.log('Esto si se cumple');
}


// ============================= //


let num1 = 5;
let num2 = 8;

if ((num1 > num2) || num2 == 8){
    console.log('Acertaste');
}




