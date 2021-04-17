
var myCar = new Object();

myCar.make= 'Ford';
myCar.model='Mustang';
myCar.year=1969;

//console.log(myCar);


var elObjeto= new Object(), 
    str= 'myString', 
    rand= Math.random(), 
    bol=true;
    obj = new Object();

//console.log(elObjeto);

elObjeto.type="Sintaxis de puntos";
elObjeto["fecha de reación"]="cadena con espacios";
elObjeto [str]="Usando una variable e cadena";
elObjeto[rand]="Usando variable random";
elObjeto[obj]='usanod un objeto';
elObjeto[bol]='usando un boleano';
/*for(var prop in elObjeto) {
    if(elObjeto.hasOwnProperty(prop)){
        console.log("La porpiedad: "+ prop + " \n valor en la propiedad : " +elObjeto[prop] );
    }
}*/
console.log(showProp(elObjeto, 'elObjeto'));

function showProp(obj, objName)
{
    var results='';
    for(var i in obj) {
        if(obj.hasOwnProperty(i)){
        results += `${objName}.${i}=${obj[i]}\n`;
        console.log(results);
    }
    }
    return results; 
}
