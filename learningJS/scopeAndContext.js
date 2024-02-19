//EX 1
let drink = "wine";

const foo = {};
foo.drink = "beer";
foo.getDrink = function () {
  return this.drink;
};
foo.under21 = {};
foo.under21.drink = "soda";
foo.under21.getDrink = function () {
  return foo.getDrink.call(this);
};

console.log(drink);
console.log(foo.getDrink());
console.log(foo.under21.getDrink());

//EX2
let year = 2023; //global scope variable

function getYear() {
  let year = 2022; //local scope variable
  console.log(year);
}
console.log(year); //In the globa scope, year =

getYear(); // in the local scope of the function, year = 2022

//EX3
let year3 = 2023; //global scope variable

function getYear() {
  let year3 = 2022;
  console.log(year3);
}

function getYear1() {
  console.log(year3);
}
console.log(year3);

getYear();
getYear1();

//EX4
let year4 = 2023; //global scope variable

function getYear() {
  let year4 = 2022;
  week = "second";
  console.log(year4);
}

getYear();
console.log(week);

//EX5
let year5 = 2023; //global scope variable

function getYear() {
  let year5 = 2022;
  week = "second";
  this.day = "Monday";
  console.log(year5);
}

getYear();
console.log(week);
console.log(day);

//EX6 Context in JavaSript
let drink1 = "wine";

const blabla = {
  drink1: "beer",
  getDrink: function () {
    return drink1;
  },
};

console.log(blabla.getDrink());

//EX 7
let drink3 = "wine";

const blabla3 = {
  drink3: "beer",
  getDrink: function () {
    return this.drink3;
  },
  under18: {
    drink3: "juice",
    getDrink: function () {
      return this.drink3;
    },
  },
};

console.log(blabla.getDrink());
console.log(blabla.under18.getDrink());

//EX8
let multilineString = `This is
                        a multiline 
                        string with 
                        extra space.`;

let lines = multilineString.split("\n");
console.log(lines);

for (i = 0; i < lines.length; i++) {
  lines[i] = lines[i].trimStart();
}
console.log(lines);

let modifiedString = lines.join("\n");
console.log(modifiedString);

//EX9
const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((contor, index) => {
  return contor + index;
}, 5);

console.log(sum);
