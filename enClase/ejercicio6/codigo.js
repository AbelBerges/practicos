/*
Ejercicio 6: Escribe un programa en JavaScript que dado un arreglo con los siguientes valores: 32,45,78,99,12,21.
Recorrerlo y mostrar por consola solo los valores múltiplos de 3.
*/

var arreglo = [32,45,78,99,12,21];

for(var i=0; i<arreglo.length;i++){
    if(arreglo[i] % 3 == 0){
        console.log(arreglo[i]);
    }
}