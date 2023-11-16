//EX1
function Passbyvalue(a, b) {
  let tmp;
  console.log(a);
  console.log(b);
  console.log(tmp);
  tmp = b;
  console.log(a);
  console.log(b);
  console.log(tmp);
  b = a;
  console.log(a);
  console.log(b);
  console.log(tmp);
  a = tmp;
  console.log(a);
  console.log(b);
  console.log(tmp);
  console.log(`Inside Pass by value 
		function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
		Function -> a = ${a} b = ${b}`);

Passbyvalue(a, b);

console.log(`After calling Pass by value 
	Function -> a =${a} b = ${b}`);

//Pass by value

//EX2:
let a1 = 10;
let b1 = "Hi";
let c1 = a1;
c1 = c1 + 1;

console.log(`a1 = ${a1}`);
console.log(`b1 = ${b1}`);
console.log(`c1 = ${c1}`);

//Pass by reference
//EX3:
let d = [1, 2];
let e = d;
d.push(3);

console.log(`d = ${d}`);
console.log(`e = ${e}`);

//EX4:
let f = [1, 2];
let g = [3, 4, 5];
g.push(6);

console.log(`f = ${f}`);
console.log(`g = ${g}`);

//Ex5:
let h = [1, 2]; // 0x01
let i = [1, 2]; // 0x02

console.log(`h === i ${h === i}`);
console.log(`h === i ${h === i}`);

//EX6:
let elvis = [1, 2]; // 0x01
add(elvis, 3);
console.log(`elvis = ${elvis}`);

function add(array, element) {
  // (0x01, 3)
  array.push(element);
}
