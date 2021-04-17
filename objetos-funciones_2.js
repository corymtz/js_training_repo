function displayCar(){
    var impresion = `un coche ${this.year} ${this.modelo} a la venta, dueña ${this.owner.nombre}`;
    console.log(impresion);

}

function carrito(marca, modelo, year, owner){
    this.marcar= marca;
    this.modelo=modelo;
    this.year=year;
    this.owner=owner
    this.displayCar = displayCar;
}

function Cliente(nombre, edad, genero, tarjeta, status){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
    this.tarjeta; //Visa -MS
    this. status; //Activo - Inactivo
}

var Maria = new Cliente("Maria", 20, "Mujer","Visa","Activo");

var reg_65=new carrito("Seat", "ibiza", "2020", Maria)

reg_65.displayCar();