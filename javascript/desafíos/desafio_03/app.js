// Entradas: -
// Salidas: Números de días pares / Alerta con con mensaje en día 7

// Parte 1: Crear lista de días (con array), recorrerla e indicar los días pares

let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

for (let i = 0; i < dias.length; i++) {

  // Parte 2: Si el dia es el número 7, imprimir un alert
  // Debo imprimirla antes para que el /continue/ de la primera parte no lo oculte
  if (i === 6) {
    console.log(dias[i]);
    alert(dias[i] + ' es el último día de la semana, mañana hay que madrugar');
    continue
  }

  // Uso 👇 el residuo para saber si son pares
  if (i % 2 !== 0) {
    // 👆 invierto la condición ya que el 0 es par, pero el lunes es el primer día

    console.log(dias[i] + ': es un día par');
    continue
    // Con el continue evito que vuelva a imprimir el día par
  }

  console.log(dias[i])
  // 👆 Imprimo todos los días por default
}