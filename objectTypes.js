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
