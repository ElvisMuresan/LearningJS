//Meeting with Vlad cw45 - 2023

//Ex1
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

//Ex2
aziPrezinti();
var aziPrezinti = () => {
  console.log("Azi prezinti");
};
aziPrezinti();
function aziPrezinti() {
  console.log("Mai prezinti o data");
}
aziPrezinti();

//Meeting with Vlad 15.11.2023
//Cele trei moduri de a itera o functie
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("***array.length 👉", array.length);
for (index = 0; index <= array.length; index++) {
  console.log("***array[index] 👉", array[index]);
}

for (const cursor of array) {
  console.log("***cursor 👉", cursor);
}

array.map((cursor) => {
  console.log(cursor);
});

function sumArray(array) {
  for (index = 0; index <= array.length; index++) {
    let sum = array[index];
  }
}

function dumbSumArray(array) {
  let sum =
    array[0] +
    array[1] +
    array[2] +
    array[3] +
    array[4] +
    array[5] +
    array[6] +
    array[7] +
    array[8] +
    array[9];
}
let sumTot = dumbSumArray(array);
console.log("***sumTot 👉", sumTot);
