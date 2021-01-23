// Defino las opciones de ingredientes para cada categoría con arrays
let ingredientes_1 = ['-', 'Avena', 'Crema de leche', 'Kumis', 'Leche', 'Leche condensada', 'Arequipe', 'Yogurt', 'Queso']
let ingredientes_2 = ['-', 'Carne de res', 'Pollo', 'Carne de cerdo', 'Pescado', 'Pescado robalo']
let ingredientes_3 = ['-', 'Arroz', 'Lentejas', 'Fríjoles', 'Alverja seca', 'Garbanzos', 'Caraotas']
let ingredientes_4 = ['-', 'Jamón', 'Jamón de pavo', 'Jamón de cerdo', 'Salchichas', 'Salchichón']
let ingredientes_5 = ['-', 'Atún', 'Salchcichas', 'Fríjoles enlatados', 'Maíz', 'Duraznos', 'Liches', 'Piña']
let ingredientes_6 = ['-', 'Manzanas', 'Uvas', 'Peras', 'Naranjas', 'Sandía', 'Duraznos', 'Plátanos', 'Papaya']
let ingredientes_7 = ['-', 'Alverja', 'Zanahoria', 'Tomate', 'Cebolla larga', 'Cebolla cabezona', 'Pimentón', 'Brocoli']
let ingredientes_8 = ['-', 'Azucar', 'Sal', 'Salsa de tomate', 'Mayonesa', 'Mostaza', 'Vinagreta']


document.addEventListener('DOMContentLoaded', function () {

	/* ==== Leyendo un archivo estatico ==== */
	$.ajax({
		url: 'data/data.json',
		success: function (data, status, xhr) {
			console.log(xhr)
			console.log(status)
            console.log(data)

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of data){
                res.innerHTML += `
                <div class="card mb-3">
                <div class="card-header text-color-app ">
                <small> Tipo de comida: <b> ${item.tipo_comida} </b> </small>
                </div>
                <div class="card-body">
                  <h5 class="card-title text-secondary">${item.receta_nombre}</h5>
                  <p class="card-text text-color-app mb-1">INGREDIENTES</p>
                  <p class="card-text color800">${item.ingredientes}</p>
                </div>
              </div>
                `
            }

		},
		error: function (xhr, status, errorThrown) {
			console.log(xhr)
			console.log(status)
			console.log(errorThrown)

		}
	})

})
