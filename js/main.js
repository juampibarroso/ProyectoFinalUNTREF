//Leer el archivo en formato JSON
//Promisis - Promesas - Asincrónico
//Petición - El servidor me responde - La transformo en un JSON - Se lo envio a otra then

//Capturar los elementos
let productosHTML = document.querySelector('.productos');
//Te permite visualizar el elemento capturado
console.log(productosHTML);

//Para que te documentes sobre Fetch
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//https://www.w3schools.com/jsref/api_fetch.asp
fetch('datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    //console.log(productos) //Esto te permite ver lo que trae la respuesta
    productos.forEach(producto => {
        //Aquí agregas contenido de forma dinámica en la página
        //Acuerdate que estos datos vienen del archivo en formato json creado
        //El cual está en la carpeta datos - productos.json
        productosHTML.innerHTML += `
        <article class="producto col-12 col-md-6 col-lg-4">
            <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}" style="border-radius: 20px;">
            <h2 class="text-center">${producto.nombre}</h2>
            <p class="text-center">${producto.descripcion}</p>
            <h3 class="text-center">$${producto.precio}</h3>
            <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-outline-primary d-block botonDetalle' >Ver detalle </a>
        </article>
        
        `
        //En la linea de código anterior lo que hago es guardar en el id de forma dinámica, todo el objeto que será seleccionado por el usruario, cada vez que haga clic sobre el botón de ver detalle
    })
    //Aquí procedo a agregar al localStorage - Lo que seleccionamos - Es decir se guardará todo el objeto -con todos sus datos completos 
    let botonDetalle = document.querySelectorAll('.botonDetalle')
    //console.log(botonDetalle);
    //Aquí guardaré los datos del producto seleccionado - pero en forma array de objetos
    let arrayMiListaDeProductos
    //Aquí guardo el objeto pero convertido a un array - Para poder tomar el código que el usuario seleccionó
    let miObjeto
    //Aquí es donde voy a guardar el código del productos que el usuario seleccionó
    let codigo
    //Aquí construyo está lógica para que poder dejar en escucha, a ver cual elemento selecciona el usuario para ver el detalle

    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
             //La eqtiqueta ancla por defecto tiene un evento enviar los datos
             e.preventDefault()
             //Traigo datos del localStorage - No es necesario haerlo en este caso propuesto
             let miListaDeProductos = localStorage.getItem('detallesProducto')
             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
             }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
                 //console.log(arrayMiListaDeProductos);
             }
            //Aquí estoy guardando en el array de forma completa el objeto 
            arrayMiListaDeProductos.push(this.id)
            //Hago esto para poder converir el objeto seleccionado en un array
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            //Aquí tomo el código que el usuario seleccionó
            codigo = miObjeto.codigo
            //Aquí guardo en el localStorage el objeto que usuario seleccionó
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            //Aquí construyo mi Query strings - Lo cual es la ruta a donde debo enviar al usuario y además junto a ello le envío el código que fué seleccionado
            location.href = `detalle.html?codigo=${codigo}`
             
         })    
     } )
    

    
})
//Esto es sólo para controlar si existe o no algún error en el llamo del fetch
.catch((error)=>{
    console.log('Ufff ha ocurrido un error '+error )
})



