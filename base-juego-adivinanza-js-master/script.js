// Aca el juego selecciona un numero al azar para que adivine el usuario

let numeroAzar = Math.floor(Math.random()*100) + 1 

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

// esta accion se va a ejecutar cuando se toque el boton chequear 

function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value) //! con parse int pasamos el ingreso de string a number
    //esta condicion evalua si que el valor ingresado sea un numero y que sea mayor a 1 y menor a 100, en caso de no serlo imprime el mensaje
    if (numeroIngresado <1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor ingresa un numero valido entre 1 y 100'
        mensaje.style.color = 'black'
        return
    }
    /*esta linea imprime el mensaje si el numero ingresado es el que genero la variable numeroAzar, lo transforma a color verde,
    y no deja que se vuelva a poner otro numero*/
    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicitaciones! Has adivinado el numero!!'
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true; 
    } else if ( numeroIngresado < numeroAzar){
        mensaje.textContent = 'El Numero es mas alto!'
        mensaje.style.color = 'red';
    } else { 
        mensaje.textContent = 'El Numero es mas bajo!'
        mensaje.style.color = 'red';
    }
}