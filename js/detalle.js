//Para que amplien sus conocimientos sobre el objeto location
//https://www.w3schools.com/js/js_window_location.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Location
// Aquí guardo lo que trae el query strings
let codigo = location.search;
console.log(codigo);
// Aquí uso esta instancia para lograr ver mejor los datos del query strings
let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);
// Aquí guardo el código que el usuario seleccionó
let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);

// Capturo los datos de la página de detalle donde quiero a futuro mostrar los datos del producto seleccionado
let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');
let precio = document.getElementById('precio');
let descripcion = document.getElementById('descripcion');
let subdescripcion = document.getElementById("subdescripcion");

// Tomo los datos del localStorage
let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'));

if (detalleProducto) {
    // Convierto el objeto literal a un array
    let arrayDetalle = JSON.parse(detalleProducto[0]);
    console.log(arrayDetalle);

    // Muestro de manera dinámica los detalles del producto que tengo en el localStorage
    codigoFinal.innerHTML = `CodigoProducto: ${codigoSeleccionado}`;
    nombre.innerHTML = ` ${arrayDetalle.nombre}`;
    descripcion.innerHTML = ` ${arrayDetalle.descripcion}`;
    subdescripcion.innerHTML = `${arrayDetalle.subdescripcion}`;
    precio.innerHTML = `$${arrayDetalle.precio}`;
    imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`;
} else {
    // Maneja el caso en el que detalleProducto sea null o no esté en el localStorage
    // Por ejemplo, puedes mostrar un mensaje de error o redirigir al usuario a otra página.
}

// Capturo el botón que me permite regresar y además borrar todo lo que tengo en mi localStorage
let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    // Este a mí no me funcionó
    // localStorage.removeItem('detalleProducto');
    // Pero este sí - Perfectamente borra todo lo que está en el localStorage
    localStorage.clear()
    // Aquí retorno a la página principal y muestro todos los datos que están en el archivo json
    location.href = 'index.html'
})
