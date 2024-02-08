/*
Ejercicio 4: Escribe un programa en JavaScript que solicite al usuario que ingrese un número usando prompt().
Luego, muestra en la consola si el número es par o impar.
*/

var control = false;
do {
    var ingreso = Number(prompt("ingrese un número para evaluar si es par o impar "));
    if (isNaN(ingreso)) {
        alert("No ha ingresado un numero - Inténtelo de nuevo")
    } else {
        if(ingreso % 2 == 0){
            alert("El número ingresado es par");
        } else {
            alert("El número ingresado es impar");
        }
        control = true;
    }
} while (!control);
