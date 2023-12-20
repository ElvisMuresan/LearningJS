//EX1
const firstName = "Elvis";
const secondName = "Muresan";
function myName() {
  console.log(firstName);
  function mySecondName() {
    console.log(secondName);
  }
  mySecondName();
}
myName();

//EX2
let x = 10;
function foo() {
  let y = 20;
  function bar() {
    let z = 30;
    let output = x + y + z;
    console.log(output);
  }
  return bar;
}

let number = foo();
number();

//EX3
function initial() {
  let name = "Elvis";
  function displayName() {
    console.log(name);
  }
  displayName();
}
initial();

//EX4
function initial() {
  let name = "Elvis";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const result = initial();
result();

//EX5
function makeSum(a) {
  return function sum(b) {
    return a + b;
  };
}

const add10 = makeSum(10);
const add20 = makeSum(20);
console.log(add10(5));
console.log(add20(5));
