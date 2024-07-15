// Obtener los botones de agregar al carrito
const botonesAgregar = document.querySelectorAll('.producto button');

// Agregar evento de clic a cada botón
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    // Obtener el producto correspondiente
    const producto = e.target.parentNode.parentNode;
    // Agregar el producto al carrito
    // ...
  });
});
