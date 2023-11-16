//EX1

var elvis = 3;

function blabla() {
  var first = 4;
  if (true) {
    var second = 5;
  }
  console.log(second);
  console.log(first);
}
blabla();
console.log(elvis);

//EX2

// console.log(vlad);

const vlad = 50;

console.log(vlad);

const car = new Object();
car.color = "blue";
car.type = "Mercedes";
car.ageBirth = 2008;
console.log(car);

const car1 = { color: "blue", type: "mercedes", ageBirth: 2008 };
console.log(car1);

//EX 3
function Car(color, ageBirth, model) {
  this.color = color;
  this.ageBirth = ageBirth;
  this.model = model;
}

const car3 = new Car("blue", 2008, "audi");
const car4 = new Car("green", 2000, "bmw");
car3.type = "diesel";
car3.greet = function () {
  console.log("Hello Elvis");
};
car3.greet();
console.log(car3);
console.log(car4);

var elvis = 3;

function blabla() {
  var first = 4;
  if (true) {
    var second = 5;
  }
  console.log(second); //5
  console.log(first); //4
}
blabla();
console.log(elvis);
// console.log(first);

//Meeting with Vlad

const firstObj = { firstName: "Elvis", lastName: "Muresan", age: 25 };
const secondObj = { firstName: "Vlad", lastName: "Crisan", age: 32 };

function hello(obj) {
  return "Hello " + obj.firstName + ", " + obj.lastName + "!";
}
function hello2(frsName, lstName) {
  return "Hello " + frsName + ", " + lstName + "!";
}
function isOverThirty(lstName, age) {
  if (age > 30) {
    return `Mister ${lstName} is over 30. He as ${age}`;
  } else {
    return `Mister ${lstName} is under 30. He as ${age}`;
  }
}

let greet = hello(firstObj);
console.log(greet);

let greet2 = hello(secondObj);
console.log(greet2);

let a = 5;
let b = 6;

let greet3 = hello({ firstName: "Florin", lastName: "Bejera", age: 22 });
console.log(greet3);

let greet4 = hello2("Thea", "Crisan");
console.log(greet4);

let greet5 = hello2(firstObj.firstName, secondObj.lastName);
console.log(greet5);

let overThirty = isOverThirty(secondObj.lastName, secondObj.age);
console.log(overThirty);

aziPrezinti();
var aziPrezinti = () => {
  console.log("Azi prezinti");
};
aziPrezinti();
function aziPrezinti() {
  console.log("Mai prezinti o data");
}
aziPrezinti();
