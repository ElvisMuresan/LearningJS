//EX 1
let elvis = 50;

console.log(`The value is ${elvis}`);

//EX2
console.info("Testing the .info method");

//EX3
let elvis1 = "Testing the method";
console.log(elvis1);
console.info(elvis1);
console.debug(elvis1);

//EX4
let testWarn = 50;
let tesWarn1 = { firstname: "Elvis", age: 25 };

console.warn("This is a warning message");
console.warn(testWarn);
console.warn(tesWarn1);

//EX5
let val1 = 30;
let val2 = 25;

console.assert(val1 + val2 === 60, "Expression is false");
console.assert(val1 + val2 === 55, "Expression is true");

//EX6
for (let i = 1; i <= 10; i++) {
  let value = "The value of i is:";
  console.count(value);
}
console.countReset();

//EX7
let elvisFunction = () => {
  let gigelFunction = () => {
    console.trace("Using trace method");
  };
  gigelFunction();
};
elvisFunction();

//EX8
console.time("elvisTimer");
function elvis(x, y) {
  console.log(x + y);
}
elvis(2, 3);
console.timeEnd("elvisTimer");

console.time("sumBlabla:");
let blabla = [1, 2, 3, 4, 5];
console.log(blabla.length);

function sumBlabla(blabla) {
  for (let i = 0; i <= blabla.length; i++) {
    let sum = blabla[i];
    console.timeLog("sumBlabla:");
  }
}
sumBlabla(blabla);
console.timeEnd("sumBlabla:");

//EX9
console.group("First group");
console.log("First item in the first group");
console.log("Second item in the first group");

console.group("Second group");
console.log("First item in the second group");
console.log("Second item in the second group");

console.group("Third group");
console.log("First item in the third group");
console.log("Second item in the third group");

console.groupEnd();
console.log("Back to the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();

//EX 10
const obj1 = {
  firstItem: {
    color: "green",
    YearModel: 1998,
  },
};

console.log(obj1);
console.table(obj1);

//EX 11
let array1 = [
  ["Deva", "Timisoara", "Arad", "Lugoj"],
  ["Margina", "Faget", "Sibiu", "Cluj"],
];

console.log(array1);
console.table(array1);
