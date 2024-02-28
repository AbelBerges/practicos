const ventana = document.getElementById("abrir");
const manejador = document.getElementById("ventanaLogin");
const cierro = document.getElementById("cerrar");

ventana.addEventListener("click", abrir);
cierro.addEventListener("click", cerrar);

function abrir(){
    manejador.classList.add("mostrar");
}

function cerrar(){
    manejador.classList.remove("mostrar");
}