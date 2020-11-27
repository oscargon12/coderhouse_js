

function pedirIngrediente() {
  let ingrediente = prompt('Ingresa el nuevo ingrediente');
  let fecha = prompt('Ingresa la fecha de vencimiento');
  let hora = prompt('Elije una hora del día');

  if (hora == 1) {
    tipoComida = 'desayuno';
  } else if (hora == 2) {
    tipoComida = 'almuerzo';
  } else if (hora == 3) {
    tipoComida = 'postre';
  } else if (hora == 4) {
    tipoComida = 'comida';
  } else {
    tipoComida = 'mecato';
  }

  alert(`${ingrediente} se va a vencer en ${fecha} quieres preparar ${tipoComida}`);
}

pedirIngrediente()
