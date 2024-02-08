/*
Ejercicio 1: Escribe un programa en JavaScript que solicite al usuario que ingrese tres números usando
prompt(). Luego, calcula y muestra en la consola el promedio de estos tres números.
*/
var suma = 0;
for(let i = 0; i<3;i++){
    let ingreso = prompt("ingrese el número "+(i+1)+"º para hacer la suma ");
    let valor = Number(ingreso);
    console.log(typeof(valor));
    //console.log("tiene valor la variable "+i);
    if(isNaN(valor)){
        alert("No ha ingresado un número - No se puede hacer la suma");
        i--;
    } else {
        suma+=valor;
        console.log("Hacmos la suma");
    }
}

console.log("La suma de los 3 números ingresados es: "+suma);
console.log("el promedio es "+suma/3);