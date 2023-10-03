// Captura el elemento donde se mostrarán los detalles del producto
let detalleProductoHTML = document.querySelector('.detalle-producto');

// Función para cargar y mostrar los detalles del producto
function mostrarDetalles(producto) {
    detalleProductoHTML.innerHTML = `
        <div class="text-center">
            <img src="${producto.imagen}" alt="${producto.nombre}" style="max-width: 100%;" class="img-fluid rounded">
        </div>
        <h1 class="display-2 text-center">${producto.nombre}</h1>
        <br>
        <h3 class="display-6 text-center">${producto.descripcion}</h3>
        <br>
        <p class="lead text-center">${producto.subdescripcion}</p>
        <br>
        <h2 class="text-primary text-center">$${producto.precio}</h2>
        <br>

        <div class="text-center">
        <a class="btn btn-primary btn-block btn-custom " href="index.html#nuestros-productos">Volver atras</a>
        </div>

        
    `;
}

// Obtiene el código del producto de la URL
let urlParams = new URLSearchParams(window.location.search);
let codigoProducto = urlParams.get('codigo');

// Realiza una solicitud Fetch para cargar los detalles del producto
fetch('../datos/productos.json')
    .then((respuesta) => respuesta.json())
    .then((productos) => {
        let productoSeleccionado = productos.find((producto) => producto.codigo === codigoProducto);
        if (productoSeleccionado) {
            mostrarDetalles(productoSeleccionado);
        } else {
            detalleProductoHTML.innerHTML = '<p>Producto no encontrado.</p>';
        }
    })
    .catch((error) => {
        console.log('Uff ha ocurrido un error: ' + error);
    });
