//EX 1
const sum = (x, y) => {
  console.log(x, y);
};

sum();

const sum1 = (x1 = 1, y1 = 2) => {
  console.log(x1, y1);
};

sum();

const sum2 = (x2 = 1, y2 = 2) => {
  console.log(x2, y2);
};

sum(5, 10);

//EX2
const person = {
  firstName: "Elvis",
  lastName: "Muresan",
  age: "25",
};

const personAge = ({ firstName, age }) => {
  console.log(firstName, age);
};

personAge();

const person1 = {
  firstName: "Elvis",
  lastName: "Muresan",
  age: "25",
  skinColor: "black",
};

const personAge1 = ({ firstName, age, skinColor = "white" }) => {
  console.log(firstName, age, skinColor);
};

personAge(person1);

//EX3
const arrayPush = (value = 1, array = []) => {
  array.push(value);
  console.log(array);
};

arrayPush();
arrayPush(2);
