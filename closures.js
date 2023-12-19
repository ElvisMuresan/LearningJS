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
