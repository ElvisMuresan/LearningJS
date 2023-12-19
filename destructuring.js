//Destructuring in arrays
//EX 1
const alphabet = ["A", "B", "C", "D", "E", "F"];

// const firstElement = alphabet[0];
// const secondElement = alphabet[1];
// console.log(firstElement);
// console.log(secondElement);

const [firstElement, secondElement] = alphabet;
console.log(firstElement);
console.log(secondElement);

// EX2
const alphabet1 = ["A", "B", "C", "D", "E", "F"];

const [firstElement1, , thirdElement] = alphabet;
console.log(firstElement1);
console.log(thirdElement);

//EX3
function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multiply, divison = "No division"] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(divison);

//Destructuring in objects
//EX4
const firstPerson = {
  name: "Elvis",
  age: 25,
  adress: { city: "Deva", state: "Romania" },
};

const secondPerson = {
  name: "Florin",
  age: 22,
  adress: { city: "Maramures", state: "Romania" },
};

const { name: firstName, age, favoritePl = "JS" } = secondPerson;

console.log(firstName);
console.log(age);
console.log(favoritePl);

//EX5
const firstPerson1 = {
  name: "Elvis",
  age: 25,
  adress: { city: "Deva", state: "Romania" },
  favoriteFod: "pizza",
};

const secondPerson1 = {
  name: "Florin",
  age: 22,
  adress: { city: "Maramures", state: "Romania" },
};

const thirdPerson = { ...firstPerson, ...secondPerson };

console.log(thirdPerson);

//EX6
const firstPerson2 = {
  name: "Elvis",
  age: 25,
  adress: { city: "Deva", state: "Romania" },
  favoriteFod: "pizza",
};

function printUser(user) {
  console.log(user);
}
printUser(firstPerson2);

//EX7
function multiDiv({ x, y }) {
  let a = x * y;
  let b = x / y;
  return { a, b };
}
console.log(({ a, b } = multiDiv({ x: 2, y: 4 })));

//EX8
function divizori(number) {
  const divizoriArray = [];
  for (i = 0; i <= number; i++) {
    if (number % i === 0) {
      divizoriArray.push(i);
    }
  }
  return divizoriArray;
}
let [, , thirdElement1] = divizori(20);
console.log(thirdElement1);
