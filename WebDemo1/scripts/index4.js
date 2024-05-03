"use strict"


// Global Var
window.onload = init
const hb = document.getElementById("helloBtn");
const gb = document.getElementById("goodbyeBtn");

const o = document.getElementById("output")


function init(){


    hb.onclick = onHelloBtnClick
    gb.onclick = onGoodbyeBtnClick

}



function onHelloBtnClick(){


    o.innerHTML = "HELLO!"
//f variable
}


function onGoodbyeBtnClick(){
    o.innerHTML = "GOODBYE 2!"

}