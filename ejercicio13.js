//Funciones flecha

const array11=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const moduloCuatro = array11.filter(n=>n%4 ==0);
//onsole.log(moduloCuatro);

//Buscar numero mayor y menor

var x=21, y=-5, z=3;

//console.log(Math.min(x,y,z));
//console.log(Math.max(x,y,z));
/*
const mayor= (arrayNumeros)=>{return Math.max(... arrayNumeros);};
const menor= (arrayNumeros)=>{return Math.min.apply(null, arrayNumeros);};
console.log("Numero Mayor en el arreglo: " + mayor(array11));
console.log("Numero Menor en el arreglo: " + menor(array11));

console.log("Numero Mayor usando solo Math"+ Math.max(... array11));
console.log("Numero menor usando solo Math"+ Math.min(... array11));
*/

//Separar un array

var index= array11.length;
var primerArray=array11.slice(0,index/2);
var segudoArray=array11.slice(index/2,index);

console.log("Primer Array: "+ primerArray);
console.log("Segundo Array: "+ segudoArray);

var alumnos =["Armando","Ceci","Cory","Gaby","Manuel","Jose","JC","Mau"];

const dividePalabras= (lista,howMany)=>{
    var arrayFinal=[];
    while(lista[0]){
        arrayFinal.push(lista.splice(0,howMany));
    }
    return arrayFinal;
}
console.log(dividePalabras(alumnos,3));
console.log(dividePalabras(alumnos,4));

