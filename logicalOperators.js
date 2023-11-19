//EX1
let a = 1;
a = !a;
console.log(typeof a, a);

//EX2
let a1 = 1;
let b = -2;

console.log(a1 < 3 && b < -2);

//EX3
console.log("***88 && 33 && 5 👉", 88 && 33 && 5);

//EX4
let a2 = 1;
let b2 = -2;

console.log(a2 < 3 || b2 < -2);

//EX5
console.log("ce va afisa? 👉", 0 || 0 || 0);

//EX6
function A() {
  console.log("called A");
  return true;
}
function B() {
  console.log("called B");
  return false;
}

console.log(A() || B());

//EX7
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());

//EX 8
let foo = null ?? "default string";
console.log(foo);

//Ex 9
let score = 0;

console.log(score || "no score registered");

//Ex 10
let score1 = 0;

console.log(score1 ?? "no score registered");
