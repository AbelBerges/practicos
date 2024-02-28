var pIngresada = document.getElementById("casilla");
var cartel = document.getElementById("cartel");
var boton = document.getElementById("agregar");

var palabra = "";

function agregarLetra() {
    var palabra = pIngresada.value;
    var i = 0;
    var tiempo = setInterval(escribirLetra, 700);
    cartel.textContent = "La frase ingresada es: ";
    function escribirLetra() {
        if (i < palabra.length) {
            cartel.textContent += palabra.charAt(i);
            i++;
        } else {
            clearInterval(tiempo);

        }
    }


    return false; 
}

//Ejercicio con For
/*
var pIngresada = document.getElementById("casilla");
var cartel = document.getElementById("cartel");
var boton = document.getElementById("agregar");

function agregarLetra() {
    var palabra = pIngresada.value;

    function escribirLetra() {
        for (var i = 0; i < palabra.length; i++) {
            setTimeout(function(letra) {
                cartel.textContent += letra;
            }, 700 * i, palabra.charAt(i));
        }
    }

    escribirLetra();

    return false;
}*/