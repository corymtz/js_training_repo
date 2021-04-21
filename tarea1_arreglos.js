
var arregloUno = [4, 6, 8, 5, 3, 7,1];
var arregloDos = [];

while(arregloUno.length >0 ){
    arregloDos.push(arregloUno.pop());
    console.log(arregloUno);
    console.log(arregloDos);
}
console.log("Despues del while \nArreglo Uno: " + arregloUno +"\nArreglo Dos: "+arregloDos);