//EX1. The method invocation pattern
let drink = "wine";

const obj1 = {
  drink: "beer",
  getDrink: function () {
    console.log(this);
    return drink;
  },
  under18: {
    drink: "juice",
    getDrink: function () {
      console.log(this);
      return this.drink;
    },
  },
};

console.log(obj1.getDrink());
console.log(obj1.under18.getDrink());

//EX2
var myObject = {
  value: 0,
  increment: function (inc) {
    console.log(this.value);
    console.log(this);
    console.log(typeof inc === "number");
    this.value += typeof inc === "number" ? inc : 1;
    console.log(this.value);
    console.log(this);
  },
};

myObject.increment();
console.log(myObject.value); // 1

myObject.increment(2);
console.log(myObject.value); // 3

//EX3
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
console.log(myObj.lastName);

//EX4
("use strict");
function showThis() {
  console.log(this);
}

showThis();
