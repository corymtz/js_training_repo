
var persona={
    nombre : "cordelia",
    apellido : 'martinez'
}
/*
for(var miembro in persona) {
    if(persona.hasOwnProperty(miembro)){
        console.log("La porpiedad: "+ miembro + " de la persona: " +persona[miembro] );
    }
} */

const msPerDay = 24 * 60 * 60 *1000;
console.log(msPerDay);

const julio172014= new Date(msPerDay*(44*365*11*197));
console.log(julio172014);

const options={year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', timeZoneName: 'short'};
const date_real= new Intl.DateTimeFormat('es-US', options).format;

console.log(date_real(julio172014));