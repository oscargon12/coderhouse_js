// Defino las opciones de ingredientes para cada categoría con arrays
let ingredientes_1 = ['-', 'Arequipe', 'Avena', 'Crema de leche', 'Kumis', 'Leche', 'Leche condensada', 'Mantequilla', 'Queso', 'Yogurt']
let ingredientes_2 = ['-', 'Carne de cerdo', 'Carne de res', 'Pescado', 'Pescado robalo', 'Pollo']
let ingredientes_3 = ['-', 'Alverja seca', 'Arroz', 'Caraotas', 'Fríjoles', 'Garbanzos', 'Lentejas']
let ingredientes_4 = ['-', 'Jamón', 'Jamón de cerdo', 'Jamón de pavo', 'Salchichas', 'Salchichón']
let ingredientes_5 = ['-', 'Atún', 'Duraznos', 'Fríjoles enlatados', 'Liches', ' Maíz', 'Piña', 'Salchichas']
let ingredientes_6 = ['-', 'Duraznos', 'Manzanas', 'Papaya', 'Mangos', 'Naranjas', 'Peras', 'Plátanos', 'Uvas', 'Sandía']
let ingredientes_7 = ['-', 'Alverja', 'Brocoli',  'Zanahoria', 'Cebolla cabezona', 'Cebolla larga', 'Papas', 'Pimentón', 'Tomate']
let ingredientes_8 = ['-', 'Aceite', 'Azucar', 'Harina', 'Huevos', 'Mayonesa', 'Mostaza', 'Sal', 'Salsa de tomate', 'Vinagreta']


document.addEventListener('DOMContentLoaded', function () {

  /* ==== Leyendo un archivo estatico ==== */
  let alimento = localStorage.nombre;
  console.log(alimento);

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
                <div class="card-body d-block d-md-flex justify-content-between">
                  <div>
                    <h5 class="card-title text-secondary">${item.receta_nombre}</h5>
                    <p class="card-text text-color-app mb-1">INGREDIENTES</p>
                    <p class="card-text color800" id="ingredientes">${item.ingredientes}</p>
                  </div>
                  <div>
                    <button type="button" class="btn bg-color-app border-0 text-white" id="create-btn">
                      <a href="${item.receta}" target="new" class="recipe-btn"><small> Crear receta </small></a>  
                    </button>
                  </div>
                </div>
              </div>
              `
            }
            
            //console.log(data[6].ingredientes[3])
            console.log(data[5])
            console.log(data[5].ingredientes)

		},
		error: function (xhr, status, errorThrown) {
			console.log(xhr)
			console.log(status)
			console.log(errorThrown)

    }
    
  })

})

