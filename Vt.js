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
// Obtener el formulario de contacto
const formularioContacto = document.getElementById('formulario-contacto');

// Agregar evento de envío al formulario
formularioContacto.addEventListener('submit', (e) => {
  // Prevenir el envío del formulario por defecto
  e.preventDefault();
  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  // Enviar los datos a un servidor o hacer algo con ellos
});
