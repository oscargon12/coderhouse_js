/* Listeners para el cambio en la URL */
document.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);

const HomeComponent = {
	render: () => {
		return `
    <section class="container-fluid">
    <div class="row mt-0 mt-md-5">
      <div class="col-12 col-md-3 ml-4 mt-2 d-none d-md-block ">
        <img src="./assets/img/bg-food2.png" alt="food background" class="w-100">
      </div>
      <div class="col-12 col-md-8 mt-1 mt-md-5 text-dark">
        <h1 class="text-center text-color-app pt-5 d-block d-md-none"><i class="fas fa-pizza-slice"></i></h1>
        <h1 >Bienvenido a Tuzi</h1>
        <p>¡Aprovecha la comida! Inicia registrando un alimento, o revisa tus alimentos próximos a vencer, y genera una receta espectacular </p>
      </div>
    </div>
  </section>

  <section class="container-fluid mt-5">
    <form name="foodSelect" id="foodForm">
      <div class="form-row">
        <div class="col-12">
          <div class="row mb-0 mb-sm-3">
            <!-- Tipo de producto -->
            <div class="col-12 col-md-3 text-color-app mt-2 text-left text-md-right">
              <i class="fas fa-apple-alt"></i> Tipo de alimento
            </div>
            <div class="col-12 col-md-8">
              <div class="form-group">
                <!-- <label for="exampleFormControlSelect1" class="mb-0"><small> Tipo de comida</small></label> -->
                <select class="form-control" id="cbxCategorias" name=categoria onchange="cambia_categoria()">
                  <option value="0" selected> Selecciona una opción</option>
                  <option value="1">Lacteos</option>
                  <option value="2">Carnes</option>
                  <option value="3">Cereales</option>
                  <option value="4">Embutidos</option>
                  <option value="5">Enlatados</option>
                  <option value="6">Frutas</option>
                  <option value="7">Verduras</option>
                  <option value="8">Adiciones</option>
                </select>
              </div>
              <!-- <small id="lblProducto" class="text-muted"></span> -->

            </div>
          </div>
          
          <!-- Producto -->
          <div class="row mb-0 mb-sm-3">
            <!-- Tipo de producto -->
            <div class="col-12 col-md-3 text-color-app mt-2 text-left text-md-right">
              <i class="far fa-lemon"></i> Producto
            </div>
            <div class="col-12 col-md-8">
              <div class="form-group">
                <select class="form-control" name=ingrediente id="cbxProductos">
                  <option value="-"></option>
                </select>
              </div>
              <!-- <span id="lblIngrediente" class="text-muted"></span> -->

            </div>
          </div>
          
          <!-- Fecha -->
          <div class="row mb-3 mb-sm-4" id="foodDate">
            <div class="col-12 col-md-3 text-color-app mt-2 text-left text-md-right">
              <i class="far fa-calendar"></i> Vencimiento
            </div>
            <div class="col-12 col-md-8">
              <div class="form-group">
                <input type="date" class="form-control" id="inputFecha">
              </div>
              <!-- <span id="lblFecha" class="text-muted"></span> -->
            </div>
          </div>

          <div class="row" id="btnOk">
            <div class="col-12 col-md-4 offset offset-md-4">
              <button type="submit" class="btn btn-block bg-color-app text-white weight-600" id="obtenerDatos" >Guardar <i class="fas fa-check"></i></button>
            </div>
          </div>
        </div>
      </div>
    </form>

  </section>

  <section class="container mt-4">
    <div class="alert alert-success" id="showHide" style="display: none;" role="alert">
      <h4 class="alert-heading">Listo!</h4>
      <div id="lblIngrediente"></div>
      <div id="lblProducto"></div>
      <div id="lblFecha"></div>
      <hr>
      <p class="mb-0">Ahora podrás usarlo en una receta</p>
    </div>
  </section>
		`
	}
}

const NovedadesComponent = {
	render: () => {
		return `
        <section class="conatiner" id="testGrid">

        <div class="row mt-0">
          <div class="col-12 col-md-10 offset-1 mt-5 mx-auto">
            <div class="alert alert-secondary" role="alert" id="hide_alert">
              <small> Esta sección pertenece a la <b> Despensa</b>, se va para allá cuando implemente SPA </small>
            </div>
            <!-- food list -->
            <!-- Button trigger modal -->
            <div class="row px-1" id="categoryList">
              <div class="col-12 col-md-4 mb-4">
                <button type="button" class="btn btn-block btn-light shadow-sm border text-color-app py-4 categoryItem" data-toggle="modal" data-target="#exampleModal">
                  <i class="fas fa-glass-whiskey"></i> Lacteos
                </button>
              </div>
              <div class="col-12 col-md-4 mb-4">
                <button type="button" class="btn btn-block btn-light shadow-sm border text-color-app py-4 categoryItem" data-toggle="modal" data-target="#exampleModal">
                  <i class="fas fa-fish"></i> Enlatados
                </button>
              </div>
              <div class="col-12 col-md-4 mb-4">
                <button type="button" class="btn btn-block btn-light shadow-sm border text-color-app py-4 categoryItem" data-toggle="modal" data-target="#exampleModal">
                  <i class="fas fa-carrot"></i> Frutas y verduras
                </button>
              </div>
              <div class="col-12 col-md-4 mb-4">
                <button type="button" class="btn btn-block btn-light shadow-sm border text-color-app py-4 categoryItem" data-toggle="modal" data-target="#exampleModal">
                  <i class="fas fa-drumstick-bite"></i> Carnes
                </button>
              </div>
              <div class="col-12 col-md-4 mb-4">
                <button type="button" class="btn btn-block btn-light shadow-sm border text-color-app py-4 categoryItem" data-toggle="modal" data-target="#exampleModal">
                  <i class="fas fa-bread-slice"></i> Cereales
                </button>
              </div>
              <div class="col-12 col-md-4 mb-4">
                <button type="button" class="btn btn-block btn-light shadow-sm border text-color-app py-4 categoryItem" data-toggle="modal" data-target="#exampleModal">
                  <i class="fas fa-hotdog"></i> Embutidos
                </button>
              </div>
            </div>
  
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-color-app" id="exampleModalLabel"><i class="fas fa-glass-whiskey"></i> Lacteos</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <ul class="list-group-flush pl-0" id="foodList">
                      <li class="d-flex justify-content-between align-items-center bg-light text-muted">
                        Producto
                        <span class="">Vencimiento</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center color800">
                        <!-- <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"> -->
                        <label class="form-check-label" for="defaultCheck1">
                          Agrega un producto
                        </label>
                        <span class="badge badge-secondary badge-pill">-</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center color800">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1" id="lbProducto">
                        </label>
                        <span class="badge badge-success badge-pill" id="lbFecha"></span>
                      </li>
  
                    </ul>
                  </div>
                  <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                    <button type="button" class="btn bg-color-app text-light">Usar en receta</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
		`
	}
}
const NosotrosComponent = {
	render: () => {
		return `
        <section class="container-fluid mt-5">
        <div class="row mt-0 mb-2 mb-md-5">
          <div class="col-12 col-md-10 offset-1 mt-3 mx-auto">
            <!-- Card 1 -->
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-color-app">Relájate, nosotros te avisamos</h5>
                <p class="card-text color800">En este listado encontrarás tus comidas próximas a vencer, consulta y si la fecha está cerca, prepara una receta</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-0">
          <div class="col-12 col-md-10 offset-1 mt-1 mx-auto">
            <!-- Alerta 1 -->
            <div class="alert alert-danger" role="alert">
              <h4 class="alert-heading">Próximo a vencer!</h4>
              <p>Tu alimento <b> Kumis </b> registrado el 24-08-2021 vence el <b> 02-12-2021 </b>, podrías usarlo ahora mismo en una receta</p>
              <hr>
              <button type="button" class="btn btn-danger">Crear receta</button>
            </div>
            <!-- Alerta 1 -->
            <div class="alert alert-warning" role="alert">
              <h4 class="alert-heading">Tienes tiempo!</h4>
              <p>Tu alimento <b> Papas fritas </b> registrado el 24-04-2021 vence el <b> 10-12-2021 </b>, podrías usarlo ahora mismo en una receta</p>
              <hr>
              <button type="button" class="btn btn-warning">Crear receta</button>
            </div>
            <!-- Alerta 1 -->
            <div class="alert alert-warning" role="alert">
              <h4 class="alert-heading">Tienes tiempo!</h4>
              <p>Tu alimento <b> Atún </b> registrado el 24-05-2021 vence el <b> 10-12-2021 </b>, podrías usarlo ahora mismo en una receta</p>
              <hr>
              <button type="button" class="btn btn-warning">Crear receta</button>
            </div>
            <!-- Alerta 1 -->
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">Bien hecho!</h4>
              <p>Has usado los alimentos: <br>
                • Arroz <br>
                • Leche <br>
                • Leche condensada <br>
                • Uvas deshidratas <br>
                En la receta <b> arroz con leche </b>
              </p>
            </div>
          </div>
        </div>
        
      </section>
		`
	}
}
const TiendaComponent = {
	render: () => {
		return `
        <section class="container-fluid">
        <div class="row mt-0 mt-md-5">
          <div class="col-12 col-md-3 ml-4 mt-2 d-none d-md-block ">
            <img src="./assets/img/bg-food2.png" alt="food background" class="w-100">
          </div>
          <div class="col-12 col-md-8 mt-1 mt-md-5 text-dark">
            <h1 class="text-center text-color-app pt-5 d-block d-md-none"><i class="fas fa-pizza-slice"></i></h1>
            <h1>Proximamente!</h1>
            <p>Podrás generar recetas con los alimentos que registres o estén próximos a vencer</p>
          </div>
        </div>
      </section>
		`
	}
}
const ContactoComponent = {
	render: () => {
		return `
        <section class="container-fluid mt-5">
        <div class="row mt-0 mb-2 mb-md-5">
          <div class="col-12 col-md-10 offset-1 mt-3 mx-auto">
            <!-- Card 1 -->
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-color-app">Acerca de Tuzi</h5>
                <p class="card-text color800">Tuzi es un proyecto construido en un ambiente de aprendizaje, que espera algún día ver la luz como proyecto real</p>
                <p class="card-text color800">Realizado con mucho esfuerzo 💪👨🏻‍💻 por Óscar González, estudiante de la camada 11300 del curso de javaScript en Coderhouse. Pensado en la necesidad de aprovechar las comidas, evitando el desperdicio por olvidos</p>
              </div>
              <div class="card-footer">
                <small class="color800">Versión 1</small>
              </div>
            </div>
          </div>
        </div>
      </section>
		`
	}
}
const ErrorComponent = {
	render: () => {
		return `
			<h1>Página no encontrada</h1>
			<p>La sección a la que intentas acceder no existe</p>
		`
	}
}


/* Configuramos nuestras rutas */
const routes = [
	{ path: '/home', component: HomeComponent },
	{ path: '/nosotros', component: NosotrosComponent },
	{ path: '/novedades', component: NovedadesComponent },
	{ path: '/tienda', component: TiendaComponent },
	{ path: '/contacto', component: ContactoComponent },
]

function obtenerUbicacion() {
	return location.hash.slice(1) || '/';
}

function obtenerComponente(path, routes) {
	return routes.find(route => route.path.match(new RegExp(`^\\${path}$`), 'gm'));
}

function router() {
	// Identificando la ruta elegida por el usuario
	const path = obtenerUbicacion();

	/* Vamos a buscar el componente correspondiente al path */
	const { component = ErrorComponent } = obtenerComponente(path, routes) || {};
	// console.log(component)

	/* Forma larga */
	// if (!component) {
	// 	component = ErrorComponent;
	// }

	/* Renderizamos el componente seleccionado */
	$('#app').html(component.render());
}