"use strict"




function convertFtoC(fahrenheit){
    let celsius;

    celsius = ( fahrenheit - 32) * ( 5 / 9 )

    return celsius;
}

let input = ;
let output = convertFtoC(input);
console.log(output);