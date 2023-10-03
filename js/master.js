//Leer  el archivo en formato JSON}
//Para hacer eto utilizamos un FETC

//Yo hago una peticion- El servidor me responde - La transformo en JSON -  Se lo envio a otro theb

//Capturar los elementos:(section id="productos")
let productosHTML = document.querySelector('.productos');
console.log(productosHTML);

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <article class="producto col-12 col-md-6 col-lg-4">
            <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}" style="border-radius: 20px;">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}<p>
            <h3>$${producto.precio}</h3>
            <a class="btn btn-outline-primary btn-block btn-custom" href="detalle.html?codigo=${producto.codigo}">Ver detalles</a>
        </article>
        
        `
    });
})
.catch((error)=>{
    console.log('Uff ha ocurrido un error' + error)
})

