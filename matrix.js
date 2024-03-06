// Configuración del efecto Matrix
const canvas = document.querySelector('.matrix');
const ctx = canvas.getContext('2d');

// Configuración del tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Definir la matriz de caracteres
const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';

// Convertir la cadena de caracteres en un array
const matrixArr = matrix.split('');

// Configuración del tamaño de los caracteres y la separación vertical
const font_size = 10;
const columns = canvas.width / font_size;

// Array para almacenar las posiciones de los caracteres
const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Función para dibujar los caracteres en el canvas
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'; // Color de fondo con transparencia
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0'; // Color verde
    ctx.font = font_size + 'px arial';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArr[Math.floor
