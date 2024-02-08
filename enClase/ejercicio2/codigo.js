/*
Ejercicio 2: Escribe un programa en JavaScript que solicite al usuario que ingrese una palabra usando
prompt(). Luego,  muestra en la consola el largo de la palabra y la palabra convertida a mayúsculas.
*/

var cadena = prompt("Ingrese la palabra para calcular su longitud y convertirla en Mayúsculas");

var largo = cadena.length;
console.log("El largo de la cadena es: " + largo);
console.log("Pasamos sus caracteres a mayúsculas " + cadena.toUpperCase());