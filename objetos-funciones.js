
function Car (marca, modelo, color, anio){
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.anio=anio; 
}
function Cliente(nombre, edad, genero, tarjeta, status){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
    this.tarjeta; //Visa -MS
    this. status; //Activo - Inactivo
}
function Registro(marca, modelo, anio, owner){
    this.marca=marca;
    this.modelo=modelo;
    this.anio=anio;
    this.owner=owner;
}

var Seat= new Car("Seat", "Leon","Blanco", "2021");
var Nissan= new Car("Nissan", "Sentra","Azul", "2020");
var Mercedes = new Car("Mercedes","Clase E", "Rojo", "2021"); 
var Ferrari= new Car("Ferrari", "F40","Rojo Ferrari","1990");

var Maria = new Cliente("Maria", 20, "Mujer","Visa","Activo");
let Fernando = new Cliente("Fernando", 30, "Hombre","MC","Inactivo");
var reg_65=new Registro("Seat","ibiza", "2020", Maria)


//console.log (Seat, Nissan, Mercedes, Ferrari);
//console.log (Maria, Fernando);
//console.log(reg_65);

var animal={
    type: 'Invertebrados',
    displayType: function(){
        console.log(this.type);
    }
}
var animal_4=Object.create(animal);
var animal_56=Object.create(animal);

animal_4.displayType();
animal_4.type="Pez";
animal_4.displayType();
animal_56.displayType();

animal_4.mamifero=true;
animal_56.color="cafe";
console.log(animal_4);
console.log(animal_56);
console.log(animal_56.type);



