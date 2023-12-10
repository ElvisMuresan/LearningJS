//EX1
function tagExample(strings) {
  return strings;
}

//passing argument
const result = tagExample("elvis");
console.log(result);

//creating tagged template
const result1 = tagExample`elvis`;
console.log(result1);

//EX2
//Using string literals
const message = "This is my\n" + "'first' message";
console.log(message);

//Using template string
const message1 = `This is my
'first' message`;
console.log(message1);

console.log(message === message1);

//EX3
//Tagged template literals
console.log(String.raw`This is all \non one line`);
console.log(`This is all \non one line`);

//EX4
function f() {
  return `nothing`;
}

console.log(f`Template literal String`);

//EX5
function f(strings, ...expressions) {
  return `All the elements are: ${expressions.join(", ")}`;
}
const age = 25;
const firstname = "Elvis";
const lastName = "Muresan";
const txt = f`Template ${age + 2} literal ${firstname + " M."} String ${
  lastName + " E."
}`;
console.log(txt);

//EX6
let numbers = [10, 20, 30, 40, 50, 60];

let sum = numbers.reduce((passedIn, index) => {
  console.log(passedIn, index);
  return passedIn + index;
}, 0);

console.log(`The sum is ${sum}\n`);
