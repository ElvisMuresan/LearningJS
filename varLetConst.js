//EX1

var elvis = 3;

function blabla() {
  var first = 4;
  if (true) {
    var second = 5;
  }
  console.log(second);
  console.log(first);
}
blabla();
console.log(elvis);

//EX2

console.log(vlad);

const vlad = 50;

console.log(vlad);

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

elvis(2, 5);

var elvis = (a, b) => a + b;

let firstName = "Elvis";
let secondName = "Muresan";
let age = 25;

const object1 = {
  firstName,
  secondName,
  age,
};

const object2 = object1;

console.log(object1);
console.log(object2);

object2.firstName = "Bogdan";
object2.secondName = "Filipovici";
console.log(object1);
console.log(object2);
//Pass by value

//EX1:
let a = 10;
let b = "Hi";
let c = a;
c = c + 1;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);

//Pass by reference

//EX2:
let d = [1, 2];
let e = d;
d.push(3);

console.log(`d = ${d}`);
console.log(`e = ${e}`);

//EX3:
let f = [1, 2];
let g = [3, 4, 5];
g.push(6);

console.log(`f = ${f}`);
console.log(`g = ${g}`);

//Ex4:
let h = [1, 2]; // 0x01
let i = [1, 2]; // 0x02

console.log(`h === i ${h === i}`);
console.log(`h === i ${h === i}`);

//EX5:
let elvis = [1, 2]; // 0x01
add(elvis, 3);
console.log(`elvis = ${elvis}`);

function add(array, element) {
  // (0x01, 3)
  array.push(element);
}

// const x = {
//     firstName: 'eLVIS',
//     lastName: 'muresan',
//     copil: {
//         blabla: 'treie',
//         car: 5,
//     },
//     model: 'mercedes',
// }

// const y = {...x}

// y.copil.car = 10

// console.log(x)
// console.log(y)

let x = {
  number: 5,
  bla: {
    car: 10,
  },
};
//let y = 10

//let y = { ...x };
//let y = Object.assign({}, x)
let y = JSON.parse(JSON.stringify(x));
y.number = 20;
y.bla.car = 25;

console.log(x);
console.log(y);

// let elvis = {age: 10}
// function changeElvis(innerElvis){
//     innerElvis.age = 20
// }

// changeElvis(elvis)
// console.log('*** elvis👉', elvis)

let x = {
  number: 5,
  bla: {
    car: function () {
      return 30;
    },
  },
};
//let y = 10

//let y = { ...x };
let y = Object.assign({}, x);
//let y = JSON.parse(JSON.stringify(x))
//let y = JSON.stringify(x)
y.number = 20;
//y.bla.car = 25;

console.log(x);
console.log(y);
