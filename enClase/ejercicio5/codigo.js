/*Ejercicio 5: Escribe un programa en JavaScript que solicite al usuario que ingrese un número usando prompt()
hasta que el usuario ingrese el valor -1; al finalizar mostrar por consola la suma de los valores ingresados.*/

var suma=0;
do {
    var valor = Number(prompt("Ingrese un número para sumar - Sale de el programa ingresando -1"));
        if(isNaN(valor)){
            alert("No ha ingresado un número - No se puede sumar lo ingresado");
        } else if (valor != -1){
            suma += valor;
        }

} while (valor != -1);

alert("La suma de los números ingresados es "+suma);