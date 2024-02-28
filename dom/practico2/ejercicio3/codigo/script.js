/*
 3) Realizar un formulario donde: la longitud del nombre sea mayor de cuatro caracteres. El
    nombre sólo debe contener caracteres del alfabeto español (no contiene números ni
    caracteres no alfanuméricos). La edad sólo debe contener números y estar comprendido
    entre 18 y 30. La dirección de correo debe incluir una arroba y su longitud sea superior a
    cinco caracteres.
*/

var elForm = document.forms["elNombre"];

function chequeo() {
    let elNombre = elForm["vaNom"].value;
    let laEdad = elForm["vaEdad"].value;
    let elCorreo = elForm["vaCorreo"].value;
    let patronNom = /^\D{4,}/;
    let patronEdad = /^(\d){1,2}/;
    //let patronCorreo = /^(\w)+@(\w)+.\D(2,4)$/;
    let patronCorreo = /^(\w)(.)+@(\w)+(.)(\D){2,3}$/;

    if (patronNom.test(elNombre)){
        if (patronEdad.test(laEdad)) {
            if (patronCorreo.test(elCorreo)) {
                return true;
            } else {
                alert("El correo no e correcto");
                return false
            }
        } else {
            alert("la edad no es correcta");
            return false;
        }
    } else {
        return false;
    }
}