function Curso (nombre, duracion, maestro, alumno){
    this.nombre=nombre;
    this.maestro=maestro;
    this.alumno=alumno;
}
function Maestro(nombre, edad, especialidad){
    this.nombre=nombre;
    this.edad=edad;
    this.especialidad=especialidad //matematicas, fisica, quimica
}
function Alumno(nombre, edad, carrera){
    this.nombre=nombre;
    this.edad=edad;
    this.carrera=carrera;
}

var maestroJava= new Maestro("Juan Perez", 40, "programacion")
var alumnosJava= [new Alumno("Cordelia", 37, "Ing Sistemas Computacionales" ),
                  new Alumno("Armando",20, "Ing Computacion"),
                  new Alumno("Cecilia",21, "Ing Computacion"),  
                  new Alumno("Mauricio",22, "Ing Informatica")];

var cursoJava=new Curso("JavaScript", 27, maestroJava, alumnosJava );

console.log (cursoJava);
