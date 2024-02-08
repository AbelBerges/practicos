/*
Ejercicio 3:Escribe un programa en JavaScript que solicite al usuario que ingrese tres números usando prompt().
Luego, muestre el mayor de ellos o si son iguales
*/

var contador = 0;
var vector = [];
var mayor = 0;
while(contador<=2){
    var ingreso = Number(prompt("Ingrese un número"));
    if(isNaN(ingreso)){
        alert("No ha ingresado un número");
    } else {
        vector.push(ingreso);
        contador++
    }
}

for(var i = 0; i< vector.length; i++){    
    console.log(vector[i]);
    if(mayor < vector[i]){
        mayor = vector[i];
    } 
}

console.log("El número de mayor valor es: "+mayor);


if(vector[0] > vector[1] && vector[0] > vector[2]){
    console.log("El número de el primer índice " + vector[0] + " es el mayor");
} else if(vector[1] > vector[2]){
    console.log("El número de el segundo índice " + vector[1] + " es el mayor");
} else if (vector[2] > vector[1]){
    console.log("El número de el tercer índice " + vector[2] + " es el mayor");
}else {
    console.log("Todos los números son iguales");
}