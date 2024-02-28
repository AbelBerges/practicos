//Empezamos por asignar eventos a los botones de el menu

var inicio = document.getElementById("productos");
var servicio = document.getElementById("eletro");
var contacto = document.getElementById("acceso");
var registro = document.getElementById("registro");
const manejador = document.getElementById("mostrar-modal");
const elSubmit = document.getElementById("vaRegistro");
const cierroModal = document.getElementById("cerrar");
inicio.addEventListener("click", navegacion);
servicio.addEventListener("click", navegacion);
contacto.addEventListener("click", navegacion);
registro.addEventListener("click", abrir);
cierroModal.addEventListener("click",cierroM);
elSubmit.addEventListener("submit", validar);

function abrir() {
    manejador.classList.add("muestro");
}

function cierroM(){
    manejador.classList.remove("muestro");
}

function validar() {
    return true;
}

function navegacion() {

}

function mensaje() {
    console.log("funcionó");
}