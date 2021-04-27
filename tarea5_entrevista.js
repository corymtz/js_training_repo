
//arreglo de numeros, dividirlos de3 en 3 e imprimir el menor de cada grupo 
var arreglo=[1,2,3,4,5,6,7,8]

const divideArregloGuardaElMenor= (arreglo)=>{
    var arrayNumerosMenores=[];
    while(arreglo[0]){
        arrayNumerosMenores.push(Math.min(...arreglo.splice(0,3)));
    }
    return arrayNumerosMenores;
}

console.log("Arreglo con numeros menores"+ divideArregloGuardaElMenor(arreglo));

//descubrir si un numero es palindromo 
const palindromo =(cadena)=>{

var cadenaSinEspacios=cadena.replace(" ",""), 
    x=cadenaSinEspacios.length-1,
    esPalindrome=true;

for(i=0;i<=x;){
    if(cadenaSinEspacios.charAt(i)==cadenaSinEspacios.charAt(x)){
        i=i+1;
        x=x-1;
    }else{
        esPalindrome=false;
        break;
    }
}
return esPalindrome;


}
console.log("Es palidnromo?? :" + palindromo("race car"));

//contar el numero de vocales
var cadenaConVocales = "Ejercicio que cuenta vocales";
var numeroVocales = cadenaConVocales.match(/[aeiou]/gi).length;
console.log("Numero de vocales en:  "+cadenaConVocales+"= "+ numeroVocales);
