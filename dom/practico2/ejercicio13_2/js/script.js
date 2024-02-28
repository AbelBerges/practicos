
//Armamos el vector
var ruta = "img/";
var vector = [];
var contador = 0;
vector[0] = ruta + "img01.jpg";
vector[1] = ruta + "img02.jpeg";
vector[2] = ruta + "img03.jpeg";
vector[3] = ruta + "img04.jpeg";
vector[4] = ruta + "img05.jpeg";
var elemento;

var ubicacion = document.getElementById("carrusel");
function armoImg() {
    elemento = document.createElement("img");
    elemento.src = vector[0];
    ubicacion.appendChild(elemento);
}
/*
contador = 0;
while (ubicacion.hasChildNodes()) {
    console.log("ahora veo cuales son los hijos "ubicacion.)
}*/


function adelante() {
    if (contador < 4) {
        contador++;
        elemento = document.createElement("img");
        elemento.src = vector[contador];
        ubicacion.innerHTML = elemento.outerHTML;
    } else {
        contador = 0;
        elemento = document.createElement("img");
        elemento.src = vector[contador];
        ubicacion.innerHTML = elemento.outerHTML;
    }
}

function atras() {
    if (contador > 0) {
        contador--;
        elemento = document.createElement("img");
        elemento.src = vector[contador];
        ubicacion.innerHTML = elemento.outerHTML;
    } else {
        contador = 4;
        elemento = document.createElement("img");
        elemento.src = vector[contador];
        ubicacion.innerHTML = elemento.outerHTML;
    }
}
