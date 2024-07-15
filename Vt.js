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

// Obtener el buscador
const buscador = document.getElementById('buscador');

// Agregar evento de búsqueda
buscador.addEventListener('input', (e) => {
  const valor = e.target.value.toLowerCase();
  const productos = document.querySelectorAll('.producto');
  productos.forEach((producto) => {
    const nombre = producto.querySelector('h2').textContent.toLowerCase();
    if (nombre.includes(valor)) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
});
