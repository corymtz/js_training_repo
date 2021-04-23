
const Manager = {
    name: "Guillermo",
    company: "Telefonica",
    age: 32,
    job: "Software Engineer"
}

const Interno = {
    name: "Francisco",
    age: 21,
    job:"Ir por el cafe"
}

let Manager2Level={
    name: "Guillermina",
    company: "Telefonica",
    age: 23,
    job: "Quality Engineer"
}

var Empelado_razo={
    name: "Maria",
    age: 21,
    job:"Recepcion y donas"
}

function sayHello(){
    console.log("Hello this is me: ", this.name)
}

function myAge(){
    console.log ("What my age again: ",this.age, " years old")
}

Manager.sayHello=sayHello;
Interno.sayHello=sayHello;

Manager.myAge=myAge;
Interno.myAge=myAge;

Manager.salary=50000;


console.log("Manager: ", Manager);
Manager.sayHello();
Manager.myAge();

console.log("Interno: ", Interno);
Interno.sayHello();
Interno.myAge();

