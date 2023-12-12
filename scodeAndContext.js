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
