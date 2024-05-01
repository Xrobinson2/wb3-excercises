"use strict"




function convertCtoF(Celsius){
    let Fahrenheit;

    Fahrenheit = ( Celsius * 9/5 ) + 32;

    return Fahrenheit;
}

let input = 0;
let output = convertCtoF(input);
console.log(output);