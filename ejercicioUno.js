
var arregloUno = [4, 6, 8, 5, 3];
var arregloDos = [];

console.log("arreglo uno"+arregloUno.length);

while(arregloUno.length >0 ){
    arregloDos.push(arregloUno.pop());
    console.log(arregloUno);
    console.log(arregloDos);
    console.log("arreglo uno len: "+arregloUno.length);
}