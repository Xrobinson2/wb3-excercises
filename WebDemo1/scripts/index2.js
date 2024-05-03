"use strict"


// Global Var
window.onload = init

const output = document.getElementById("output")



function init(){
    const helloBtn = document.getElementById("helloBtn");
    const goodbyeBtn = document.getElementById("goodbyeBtn");
    
helloBtn.onclick = onHelloBtnClick
goodbyeBtn.onclick = onGoodbyeBtnClick

}



function onHelloBtnClick(){
output.innerHTML = "HELLO!"
//f variable
}

function onGoodbyeBtnClick(){
    output.innerHTML = "GOODBYE 2!"

}