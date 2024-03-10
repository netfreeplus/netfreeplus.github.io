document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById('overlay');
    var vipContent = document.getElementById('vipContent');
    var loginButton = document.getElementById('loginButton');

    // Objeto con usuarios y contraseñas, cada uno con su fecha de vencimiento
    var users = {
        "Sebas": { "password": "Admin", "expiryDate": new Date("2024-03-31") },
        "usuario2": { "password": "contraseña2", "expiryDate": new Date("2024-04-15") }
        // Agrega más usuarios y fechas de vencimiento según sea necesario
    };

    // Función para obtener los parámetros de la URL
    function getURLParams() {
        var urlParams = {};
        var url = window.location.href;
        var params = url.split('?')[1];
        if (params) {
            var keyValuePairs = params.split('&');
            keyValuePairs.forEach(function(pair) {
                var keyValuePair = pair.split('=');
                urlParams[keyValuePair[0]] = keyValuePair[1];
            });
        }
        return urlParams;
    }

    // Verificar si se proporcionaron credenciales en la URL
    var urlParams = getURLParams();
    var usernameFromURL = urlParams.username;
    var passwordFromURL = urlParams.password;

    // Verificar si las credenciales de la URL son válidas
    if (usernameFromURL && passwordFromURL) {
        if (users.hasOwnProperty(usernameFromURL) && passwordFromURL === users[usernameFromURL].password) {
            // Verificar si la fecha de vencimiento ha pasado
            if (new Date() <= users[usernameFromURL].expiryDate) {
                localStorage.setItem('isLoggedIn', 'true');
                overlay.style.display = 'none';
                vipContent.style.display = 'block';
            } else {
                alert('La cuenta ha expirado. Contacta al administrador.');
            }
        } else {
            alert('Credenciales incorrectas');
        }
    } else {
        // Si no se proporcionaron credenciales en la URL, mostrar el formulario de inicio de sesión
        overlay.style.display = 'flex';
        vipContent.style.display = 'none';

        // Manejar el evento de clic en el botón de inicio de sesión
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Verificar si las credenciales son válidas
            if (users.hasOwnProperty(username) && password === users[username].password) {
                // Verificar si la fecha de vencimiento ha pasado
                if (new Date() <= users[username].expiryDate) {
                    localStorage.setItem('isLoggedIn', 'true');
                    overlay.style.display = 'none';
                    vipContent.style.display = 'block';
                } else {
                    alert('La cuenta ha expirado. Contacta al administrador.');
                }
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }
});
