//EX1
//Annonymous
const greeting = "Hello world";
(function () {
  console.log(greeting);
})();

//EX2
const greeting1 = "Hello world";
(function printOut() {
  console.log(greeting1);
})();

//EX3
const counter = (function () {
  let count = 0;

  return function () {
    count += 1;

    console.log(count);
  };
})();

counter();
counter();
