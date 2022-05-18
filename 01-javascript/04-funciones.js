// 04-funciones.js

function soloNumeros(a, b, c) {
    return a - b + c; // valor a devolver
}
// JS permite el uso de funciones sin validaciones
// soloNumeros('v', true,[1,2,3]);
// soloNumeros((a) => a, (a) => a, (a) => a);
// soloNumeros(1, 2, 3, 4, 5, 6, 78, 9);
// soloNumeros();
function soloLetras(a, b, c) { //Sin return se devuelve: undefined
    console.log(a, b, c);
}

// Funciones nombradas - named functions
function funcionNombrada() {
}
// Funciones anonimas - Anonymous functions
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};

[].forEach(function(){})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

// Funciones anonimas - Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();