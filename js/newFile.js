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
