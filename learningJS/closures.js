//EX1
const firstName = "Elvis";
const secondName = "Muresan";
function myName() {
  console.log(firstName);
  function mySecondName() {
    console.log(secondName);
  }
  mySecondName();
}
myName();

//EX2
let x = 10;
function foo() {
  let y = 20;
  function bar() {
    let z = 30;
    let output = x + y + z;
    console.log(output);
  }
  return bar;
}

let number = foo();
number();

//EX3
function initial() {
  let name = "Elvis";
  function displayName() {
    console.log(name);
  }
  displayName();
}
initial();

//EX4
function initial() {
  let name = "Elvis";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const result = initial();
result();

//EX5
function makeSum(a) {
  return function sum(b) {
    return a + b;
  };
}

const add10 = makeSum(10);
const add20 = makeSum(20);
console.log(add10(5));
console.log(add20(5));

//EX6
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}
let size10 = makeSizer(10);
let size14 = makeSizer(14);
let size18 = makeSizer(18);

document.getElementById("size-10").onclick = size10;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-18").onclick = size18;

//EX7
let a = 10;
function foo(b) {
  console.log(b);
  let c = 20;
  function abo(d) {
    console.log(d);
    let f = 30;
    return bla(a + b + c + d + f);
  }

  function bla(g) {
    return `${g} lei`;
  }

  return abo;
}

let mda = foo(15);
console.log(mda(25));

//EX8
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    let innerVariable = "I am from the inner function";
    console.log(outerVariable);
    console.log(innerVariable);
  }
  return innerFunction;
}

const innerFuncInstance1 = outerFunction();
const innerFuncInstance2 = outerFunction();
innerFuncInstance1(); //Creates new lexical envorenment
innerFuncInstance2(); // Creates another new lexical envorenment

//EX9
let x1 = 10;

function foo1() {
  let y1 = 20;
  function bar1() {
    let z1 = 15;
    return x1 + y1 + z1;
  }
  return bar1;
}

const result1 = foo1();
console.log(result1());

//Environment
GlobalEnvironment = {
  EnvironmentRecord: {
    //built-in identifiers
    Array: "<func>",
    Object: "<func>",
    //etc...

    //custom identifiers
    x1: 10,
  },
  outer: null,
};

foo1Environment = {
  EnvironmentRecord: {
    y1: 20,
    bar1: "<func>",
  },
  outer: GlobalEnvironment,
};

bar1Environment = {
  EnvironmentRecord: {
    z1: 15,
  },
  outer: foo1Environment,
};

//EX10
function iCantThinkOfAName(num, obj) {
  // This array variable, along with the 2 parameters passed in,
  // are 'captured' by the nested function 'doSomething'
  var array = [1, 2, 3];
  function doSomething(i) {
    num += i;
    array.push(num);
    console.log("num: " + num);
    console.log("array: " + array);
    console.log("obj.value: " + obj.value);
  }

  return doSomething;
}

var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject); // closure #1
var bar = iCantThinkOfAName(6, referenceObject); // closure #2

foo(2);
/*
  num: 4
  array: 1,2,3,4
  obj.value: 10
*/

bar(2);
/*
  num: 8
  array: 1,2,3,8
  obj.value: 10
*/

referenceObject.value++;

foo(4);
/*
  num: 8
  array: 1,2,3,4,8
  obj.value: 11
*/

bar(4);
/*
  num: 12
  array: 1,2,3,8,12
  obj.value: 11
*/

//EX11
function secretPassword() {
  let password = "abcdefgh";
  return {
    guessPassword: function (guess) {
      return guess === password;
    },
  };
}

const passwordEnel = secretPassword();
console.log(passwordEnel.guessPassword("elvis"));
console.log(passwordEnel.guessPassword("abcdefgh"));
