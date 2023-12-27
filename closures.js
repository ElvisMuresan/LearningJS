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

//EX6
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}
let size10 = makeSizer(10);
let size14 = makeSizer(14);
let size18 = makeSizer(18);

document.getElementById("size-10").onclick = size10;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-18").onclick = size18;

//EX7
let a = 10;
function foo(b) {
  console.log(b);
  let c = 20;
  function abo(d) {
    console.log(d);
    let f = 30;
    return bla(a + b + c + d + f);
  }

  function bla(g) {
    return `${g} lei`;
  }

  return abo;
}

let mda = foo(15);
console.log(mda(25));
