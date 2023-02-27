// mostras textos con botones

let  btn_mostrar1 = document.getElementById("btn_mostrar1");

let hideText1 = document.getElementById("hideText1");

btn_mostrar1.addEventListener("click", toggleText);

function toggleText() {
    hideText1.classList.toggle("mostrar");
}

let  btn_mostrar2 = document.getElementById("btn_mostrar2");

let hideText2 = document.getElementById("hideText2");

btn_mostrar2.addEventListener("click", toggleText2);

function toggleText2() {
    hideText2.classList.toggle("mostrar2");
}

