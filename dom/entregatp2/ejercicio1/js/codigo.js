/*
1) Realiza una página que muestre un formulario y verifique la entrada de un número que
esté comprendido entre 1 y 100.
*/

function valido(){
    let num = document.forms["primero"]["otro"].value;
    //let num = document.getElementById("otro").value;
    //console.log("Muestro el num "+num);
    let control = false;
    patron = /^(\d){1,3$/;
    let mensaje = '';
    if(num >= 1 && num <= 100){
        mensaje = "<span class='correcto'>El número ingresado está dentro de el conjunto requerido</span>";
        document.getElementById("salida").innerHTML = mensaje;
        control = true;
    } else {
        mensaje = "<span class='fallo'>El número ingresado no está dento de el conjunto requerido</span>";
        document.getElementById("salida").innerHTML = mensaje;
    }
    return control;
}