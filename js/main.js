document.addEventListener("DOMContentLoaded", () => {
    // Obtener el elemento donde se mostrarán las tarjetas de productos
    const productContainer = document.getElementById("product-list");
  
    // Cargar productos desde el archivo JSON
    fetch("data/products.json")
      .then((response) => response.json())
      .then((data) => {
        // Recorrer la lista de productos y crear tarjetas Bootstrap
        data.forEach((product) => {
          // Crear una tarjeta Bootstrap para cada producto
          const card = document.createElement("div");
          card.classList.add("card", "w-75", "mb-3");
  
          // Crear el contenido de la tarjeta
          card.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">Precio: ${product.price}</p>
              <a href="#" class="btn btn-primary detail-button" data-id="${product.id}">Ver Detalle</a>
            </div>
          `;
  
          // Agregar la tarjeta al contenedor
          productContainer.appendChild(card);
  
          // Agregar evento para ver detalles
          const detailButton = card.querySelector(".detail-button");
          detailButton.addEventListener("click", () => {
            // Almacenar el producto en LocalStorage
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            // Redirigir a la página de detalle
            window.location.href = "detail.html";
          });
        });
      });
  });
  