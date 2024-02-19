// Pr1
// Desired output: ['The weather is sunny today', ' and 25 degrees', ' and it feels pleasant.']
let weatherAdjective = "sunny";
let temperature = 25;
let feelingAdjective = "pleasant";
function test(string, ...values) {
  const newString = [];
  const finalString = [];
  for (let i = 0; i < string.length; i++) {
    newString.push(`${string[i]} ${values[i]}`);
    console.log(newString);
  }

  for (let index = 0; index < newString.length; index += 2) {
    finalString.push(`${newString[index]} ${newString[index + 1]}`);
  }
  console.log(newString);
  console.log(finalString);
  return finalString;
}
test`The weather is ${weatherAdjective} today, ${temperature} degrees, and it feels ${feelingAdjective}.`;

let adjective1 = "fantastic";
let number1 = 10;
let adjective2 = "amazing";

//Pr2
// Desired output: ['The adventure is fantastic', 'the result is 10', 'and the experience feels amazing.']

function test(strings, ...expressions) {
  const newString = [];
  for (let i = 0; i < strings.length; i++) {
    newString.push(`${strings[i]} ${expressions[i]}`);
  }
  for (let i = 0; i < newString.length; i++) {}
  newString.pop();
  console.log(newString);
}

test`The adventure is ${adjective1}, the result is ${number1}, and the experience feels ${adjective2}.`;

//Pr3
// Your task is to use destructuring to extract the following information:
// - The name of the first person
// - The country of the third person
// - One hobby of the fourth person
const complexArray = [
  {
    name: "John",
    age: 25,
    details: { country: "USA", hobbies: ["reading", "traveling"] },
  },
  {
    name: "Alice",
    age: 30,
    details: { country: "Canada", hobbies: ["painting", "gardening"] },
  },
  {
    name: "Bob",
    age: 22,
    details: { country: "Australia", hobbies: ["surfing", "photography"] },
  },
  {
    name: "Elvis",
    age: 25,
    details: { country: "Romania", hobbies: ["fotbal", "sleep"] },
  },
];

const { name } = complexArray[0];
console.log(name);
const {
  details: { country },
} = complexArray[2];
console.log(country);
const {
  details: {
    hobbies: [fotbal],
  },
} = complexArray[3];
console.log(fotbal);

//Pr4
// Your task is to use destructuring to extract the following information:
// - The name of the organization
// - The team lead of the development department
// - One marketing strategy from the marketing department
// - The city and state of the location

const complexObject = {
  organization: {
    name1: "Tech Innovators",
    departments: {
      development: {
        teamLead: "Alice",
        technologies: ["JavaScript", "React", "Node.js"],
      },
      marketing: {
        manager: "Bob",
        strategies: ["Social Media", "Content Marketing"],
      },
    },
  },
  location: {
    city: "Silicon Valley",
    state: "California",
    country: "USA",
  },
  yearFounded: 2005,
};

const {
  organization: {
    name1,
    departments: {
      development: { teamLead },
      marketing: {
        strategies: [social],
      },
    },
  },
  location: { city, state },
} = complexObject;
console.log(name1);
console.log(teamLead);
console.log(social);
console.log(city);
console.log(state);

//Pr5
const university = {
  name: "BlaBla",
  departments: {
    computerScience: {
      headProfesor: "Marcel",
      course: "Math",
      location: "Deva",
    },
    physics: {
      headProfesor: "Marcela",
      course: "Romanian",
      location: "Timisoara",
    },
    chemistry: {
      headProfesor: "Marcelaa",
      course: "Phsihologie",
      location: "Bucuresti",
    },
  },
};

function destructureObject(university) {
  const {
    name,
    departments: {
      computerScience: { headProfesor },
      physics: { course },
      chemistry: { location },
    },
  } = university;
  return { name, headProfesor, course, location };
}
const {
  name: universityName,
  headProfesor: computerScienceHead,
  course: physicsDepartment,
  location: chemistryDepartment,
} = destructureObject(university);

console.log(universityName);
console.log(computerScienceHead);
console.log(physicsDepartment);
console.log(chemistryDepartment);

//**Problemă cu Scope-ul Lexical:**

//Scrie o funcție în JavaScript care returnează o altă funcție. Funcția internă ar trebui să aibă acces la variabilele locale ale funcției externe chiar și după ce funcția externă a fost executată și nu mai este în stiva de apel.
function outerFunction() {
  let outerVariable = "I am from the outer function";
  function innerFunction() {
    let innerVariable = "I am from the inner function";
    console.log(innerVariable);
    console.log(outerVariable);
  }
  return innerFunction;
}

const innerFunctionInstance1 = outerFunction();
const innerFunctionInstance2 = outerFunction();
innerFunctionInstance1(); // Execute the innerFunction which still have access to the outerVariable
innerFunctionInstance2();

//Write a function that takes in a string as a parameter and converts it to a number inside a template literal and add 25 to it. Return the new value. (4p)
function convertStringToNumber(string) {
  const convertToNumber = +string;
  console.log(convertToNumber);
  console.log(typeof convertToNumber);
  if (!isNaN(convertToNumber)) {
    const result = `${convertToNumber + 25}`;
    return result;
  } else {
    return `The value is not a number`;
  }
}

console.log(convertStringToNumber("20"));
