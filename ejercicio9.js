var persona ={
    nombre:['Bob', 'Smith'],
    edad: 24,
    genero: 'Masculino',
    interese: ['musica','esqui','videogames'],
    bio: function(){
        console.log(this.nombre[0]+ " "+ this.nombre[1]+" tiene "+this.edad +" años. Le gusta "+ this.interese);
    },
    saludo: function(){
        console.log("Hola soy ", this.nombre[0]);
    }
}

persona.job="IT";

persona.sayGoodBye= function(){
    console.log("Good Bye ",this.nombre[0]);
}

persona.saludo();
persona.bio();
console.log(persona);
persona.sayGoodBye();
