

let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let recibo = document.getElementById("recibo");


uno.addEventListener("mouseover",cambiarColor);
dos.addEventListener("mouseover",cambiarColor);
tres.addEventListener("mouseover",cambiarColor);
cuatro.addEventListener("mouseover",cambiarColor);


function cambiarColor(vieneEvento){
    let capturo = document.getElementById(vieneEvento.target.id);
    console.log(capturo);
    //document.body.style.backgroundColor = window.getComputedStyle(capturo).backgroundColor;
    recibo.style.backgroundColor = window.getComputedStyle(capturo).backgroundColor;
    recibo.style.width = window.getComputedStyle(capturo).width;
    recibo.style.height = window.getComputedStyle(capturo).height;
}