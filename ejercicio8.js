
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

console.log("Manager: ", Manager);
console.log("Manager Name: ",Manager.sayHello());
console.log("Manager Age: ",Manager.myAge());

console.log("Interno: ", Interno);
Interno.sayHello();
Interno.myAge();