// Generar un número aleatorio entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let body = document.getElementById('body');
let intentos = 0

// Función para comprobar el número ingresado por el usuario
function chequearResultado() {
    intentos ++
    intento.textContent = intentos

    let numeroIngresado = parseInt(numeroEntrada.value); //parseInt porque los button devuelven string

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        mensaje.style.color = 'red';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto en: ' + intentos + ' intentos!' ;
        mensaje.style.color = 'green';
        intento.style.fontSize = '2em'
        body.style.backgroundColor = 'orange';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
    } else {
        mensaje.textContent = 'El número es menor. Intenta de nuevo.';
    }
}

function reiniciarJuego(){
    location.reload();
}