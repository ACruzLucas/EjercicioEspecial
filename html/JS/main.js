
const loadProductsButton = document.getElementById("LoadProducts");

if (loadProductsButton) {
   loadProductsButton.addEventListener("click", async () => {
      try {
         console.log("Cargando productos desde la API...");


         const response = await fetch("https://fakestoreapi.com/products");


         if (!response.ok) {
            throw new Error(`Error en la API: ${response.statusText}`);
         }

    
         const products = await response.json();


         console.log("Productos cargados:", products);


         displayProducts(products);
      } catch (error) {
     
         console.error("Error al cargar los productos:", error);
      }
   });
} else {
   console.error("El botón 'Load Products' no se encontró en el DOM.");
}


function displayProducts(products) {
   // Seleccionar el contenedor de productos
   const productsContainer = document.getElementById("products-container");

   // Verificar si el contenedor existe
   if (!productsContainer) {
      console.error("No se encontró el contenedor para los productos.");
      return;
   }

   // Limpiar contenido previo
   productsContainer.innerHTML = "";

   // Crear elementos para cada producto
   products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
      productElement.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}" width="100">
            <p>${product.description}</p>
            <p><strong>Precio:</strong> $${product.price}</p>
        `;
      productsContainer.appendChild(productElement);
   });
}

