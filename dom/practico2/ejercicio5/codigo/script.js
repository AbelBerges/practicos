
/*
    5) Realice una página donde el usuario pueda cargar un contacto. El contacto de esa
       persona debe tener al menos un teléfono y como máximo 3. Además debe ser obligatoria la
       carga del mail. Realice las validaciones necesarias.
*/

var elForm = document.forms["contacto"];
var ubicacion = document.getElementById("masTel");
var control = 0;
var contador = 1;
function otroTel() {
    if (control <= 2) {
        control++;
        let elemento = document.createElement("input");
        let eleLabel = document.createElement("label");
        let enter = document.createElement("br");
        elemento.type = "text";
        elemento.name = "elTel" + contador;
        eleLabel.innerText = "Teléfono " + contador + 1;
        ubicacion.appendChild(eleLabel);
        ubicacion.appendChild(elemento);
        ubicacion.appendChild(enter);
        contador++;
    } else {
        alert("Ha llegado al límite de la cantidad de números de teléfonos");
    }

}

console.log(contador);
var vectorTel = [contador];
var vectorTemp = [contador];

function crearVector() {
    if (contador > 0) {
        for (let i = 0; i < vectorTemp.length; i++) {
            vectorTel[i] = document.getElementById("masTel").childNodes[i].nodeValue;
            console.log("Vamos viendo el valor que va tomando el ventor " + vectorTel[i]);
        }
    }
}



//revisar está función
function validarTel(patron) {
    crearVector();
    let salida = false;
    let valor = 0;
    for (let k = 0; k < vectorTel.length; k++) {
        if (!patron.test(vectorTel[k])) {
            alert("Un número de teléfono no es válido");
            break
        } else {
            valor++;
        }
    }
    //console.log("Cuanto vale valor "+ valor);
    //console.log("muestor el largo de el ventor "+vectorTel.length);
    if (valor == vectorTel.length) {
        salida = true
    }
    return salida;
}


function validar() {
    let vieneNom = elForm["vaNombre"].value;
    let vieneApe = elForm["vaApellido"].value;
    //let vieneTel = elForm["elTel"].value;
    //let vieneTel2 = elForm["elTel2"].value;
    //let vieneTel3 = elForm["elTel3"].value;
    let vieneCorreo = elForm["vaCorreo"].value;
    let patronTexto = /^(\D){3,}/;
    var patronTel = /^(\d){8,18}/;
    let patronCorreo = /^(\w)(.)+@(\w)+(.)(\D){2,3}$/;
    let control = false
    if (patronTexto.test(vieneNom)) {
        if (patronTexto.test(vieneApe)) {
            if (validarTel(patronTel)) {
                if (patronCorreo.test(vieneCorreo)) {
                    control = true
                } else {

                }
            }
        } else {
            alert("El apellido ingresado no es correcto");

        }
    } else {
        alert("El nombre ingresado no es correcto");

    }
    return control;
}