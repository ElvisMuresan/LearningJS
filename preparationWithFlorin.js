//1. Crează un obiect cu câteva proprietăți și utilizează șabloane literale pentru a forma un șir care include aceste proprietăți.

const obj = {
  firstName: "Elvis",
  lastName: "Muresan",
  age: 25,
};

let result = `The name is 🤜:  ${obj.firstName} with the age 🤜: ${obj.age}`;
console.log(result);

// Crează o funcție care primește o valoare numerică și utilizează un șablon literal pentru a returna un mesaj diferit în funcție de valoarea primită.

let elvis = "Elvis Muresan";
function valNumber(num) {
  return num;
}

const resultt = valNumber`My name is ${elvis}`;
console.log(resultt);
const resultt1 = valNumber(20);
console.log(result1);

// **Destructuring:**
//Extract values from nested arrays and assign them to variables.

const arrayOfArray = [[1, 2], 3, [4, 5, 6]];
const [[firstValue, secondValue], thirdValue] = arrayOfArray;
console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);

//1. Use destructuring in a loop to iterate over an array of objects and extract specific properties.

const arrayOfObjects = [
  { firstName: "Elvis", lastName: "Muresan" },
  { firstName: "Florin", lastName: "Bejera" },
];
for (const { firstName } of arrayOfObjects) {
  console.log(firstName);
}

// **Context and this:**
// Create an object called `person` with properties `name` and `age`. Add a method `introduce` to the object that logs a message introducing the person.

const person = {
  name: "Elvis",
  age: 25,
  introduce: function () {
    let message = `The name is 🤜: ${this.name} with the age ${this.age}`;
    console.log(message);
  },
};

person.introduce();

// Create an object called `calculator` with a property `result` set to 0. Add two methods to the object: `add` and `subtract`. When calling these methods, update the `result` property accordingly.

const calculator = {
  result: 0,
  add: function (addNumber) {
    const adding = this.result + addNumber;
    return adding;
  },
  subtract: function (subNumber) {
    const subtracting = subNumber - this.result;
    return subtracting;
  },
};

const result1 = calculator.add(10);
const result2 = calculator.subtract(11);
console.log(result1);
console.log(result2);

// **Closures**
