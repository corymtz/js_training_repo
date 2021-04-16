var i=0;

for(i; i<5; i++){
    console.log("valor de i: "+i);
}

var arreglo = ['a', 'c'];
for(var j=0; j<arreglo.length;j++){

    console.log("Valor de j: "+ j);
}

var chelas=99;
while(chelas>0){
    console.log("Quedan "+chelas+" en el refry");
    chelas--;
}

var rank="Sergeant";

switch (rank)
{
    case "Private" || "Sergeant" :
            console.log("hello Sergeant or Private " + rank);
        break;
    case "Mayor":
        console.log("hello Sergeant " + rank);
        break;
    case "Commander":
        console.log("hello Commander " + rank);
        break;
    case "Captain":
        console.log("hello Captain " + rank);
        break;
    default:
        console.log("Opcion default");
        break;                                 
}