function Persona (nombre, edad, role){
    this.nombre=nombre;
    this.edad=edad;
    this.role=role;// padre, madre, hijo
}
function Familia(nombre, miembros){
    this.nombre=nombre;
    this.miembros=miembros;
}
function Casa(domicilio, fechaConstruccion, mtsConstruccion, duenos){
    this.domicilio=domicilio;
    this.fechaConstruccion=fechaConstruccion;
    this.mtsConstruccion=mtsConstruccion;
    this.duenos=duenos;
}

var miembrosFamilia= [new Persona("Cordelia", 37, "hija" ),
                  new Persona("Julio",20, "hijo"),
                  new Persona("Rosario",60, "madre"),  
                  new Persona("Leo",22, "hija")];

var familiaMartinez= new Familia("Familia Martinez", miembrosFamilia);
var casaMartinez= new Casa("Paseo Natura 54", new Date().toLocaleDateString(),200,familiaMartinez);

console.log(casaMartinez);
