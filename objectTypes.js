//EX1
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

//EX2
const car = new Object();
car.color = "blue";
car.type = "Mercedes";
car.ageBirth = 2008;
console.log(car);

const car1 = { color: "blue", type: "mercedes", ageBirth: 2008 };
console.log(car1);

//Ex3
let firstName = "Elvis";
let secondName = "Muresan";
let age = 25;

const object1 = {
  firstName,
  secondName,
  age,
};

const object2 = object1;

console.log(object1);
console.log(object2);

object2.firstName = "Bogdan";
object2.secondName = "Filipovici";
console.log(object1);
console.log(object2);

//Ex4
const x = {
  firstName: "eLVIS",
  lastName: "muresan",
  copil: {
    blabla: "treie",
    car: 5,
  },
  model: "mercedes",
};

const y = { ...x };

y.copil.car = 10;

console.log(x);
console.log(y);

let x1 = {
  number: 5,
  bla: {
    car: 10,
  },
};
//let y = 10

//let y = { ...x1 };
//let y = Object.assign({}, x1)
let y = JSON.parse(JSON.stringify(x1));
y.number = 20;
y.bla.car = 25;

console.log(x1);
console.log(y);

//EX5
let elvis = { age: 10 };
function changeElvis(innerElvis) {
  innerElvis.age = 20;
}

changeElvis(elvis);
console.log("*** elvis👉", elvis);
