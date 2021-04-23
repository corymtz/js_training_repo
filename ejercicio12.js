//funciones flecha 

function hellow(nombre){

    return "Hola "+nombre+ "!";

}

//console.log(hellow("Test"));

const helloFlechaW= (nombre) =>{

    return "Hola "+nombre+ "!";
}

//console.log(helloFlechaW("Test"));

//funcion suma de dos numeros

var suma = function (num1, num2){
    return num1+num2;
}

const sumaFlecha = (num1, num2)=>{ return num1+num2; };

const sumaFlecha2 = (x,y)=> x+y;

//console.log(suma(3,5));
//console.log(sumaFlecha(20,5));
//console.log(sumaFlecha2(10,5));

// funcion cuadrado

var cuadrado = function (num1){
    return num1*num1;
}

const cuadradoFlecha = (num1)=>{ return num1*num1; };
const cuadradoFlecha2 = (x)=> x*x;

//console.log(cuadrado(10));
//console.log(cuadradoFlecha(4));
//console.log(cuadradoFlecha2(5));

//funcion para manejar/imprimir los caracteres de una palabra

var palabras = ["arbol","palabritas","Juan", "Trabucles","Armando","Cecilia","Cordelia","Gabriela"];

var contarLetras = palabras.map(s => s.length)
//console.log(contarLetras);

//tradicional
var contarLetras_Fnc= palabras.map(function(s){return s.length});
//console.log(contarLetras_Fnc);

//Funcion multiplicar numeros de un array

var numeros = [1,2,3,4,5,6,]

function multiplicarNumeros(numero){
    return numero*2;
}

let losNumeros=numeros.map(multiplicarNumeros);

console.log("Con Funcion traducional \n"+ losNumeros);

/***** */

const multipliacrConFlecha = elemento => elemento*2;
let multiplicarNumerosDelArreglo= numeros.map(multipliacrConFlecha);

console.log("Con Funcion flecha \n" +multiplicarNumerosDelArreglo);

var fnc=() => 3*7;
console.log(fnc());

