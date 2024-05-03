"use strict"


// Global Var
window.onload = init(){

// when this happens   //do this
    helloBtn.onclick = onHelloBtnClick
    goodbyeBtn.onclick = onGoodbyeBtnClick
return 
}

//buttons
const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");


//output
const output = document.getElementById("output")




 // this describes the action being done
function onHelloBtnClick(){
    output.innerHTML = "HELLO!"

}


function onGoodbyeBtnClick(){
    output.innerHTML = "GOODBYE 2!"

}