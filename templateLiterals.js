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
