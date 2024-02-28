/*
13) Realiza una página que muestre un proyector de fotografías, donde a través de botones
anterior y siguiente el usuario pueda ir cambiando las imágenes.
*/

var ruta = "img/"
var vector = [];
vector[0] =  ruta + "img01.jpg";
vector[1] =  ruta + "img02.jpeg";
vector[2] =  ruta + "img03.jpeg";
vector[3] =  ruta + "img04.jpeg";
vector[4] =  ruta + "img05.jpeg";


let contador= 0;
var tiempo;
function inicio(){
   tiempo = setInterval(mover, 2000);
   return tiempo;   
}

function parar(){
    clearInterval(tiempo);
}

function mover(){
    if(contador < vector.length){
        armoImg(vector[contador]);
        contador++;
    } else {
        contador = 0;
    }
}
console.log(contador);


function armoImg(imagen){
    let tomo = document.getElementById("carrusel");
    let crear = document.createElement("img");
    crear.src = imagen;
    console.log("muestro el elemento "+crear.outerHTML);
    //tomo.appendChild(crear);
    document.getElementById("carrusel").innerHTML = crear.outerHTML;
}