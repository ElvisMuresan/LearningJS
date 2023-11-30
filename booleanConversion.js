//EX1
let age = 0;
let hasAge = Boolean(age);

console.log(hasAge);

//EX2
let age1 = 1;
let hasAge1 = !!age1;

console.log(hasAge1);

//EX3
let x = 8;
console.log(x, typeof x);
x = x + "";
console.log(x, typeof x);
x = x - 2;
console.log(x, typeof x);

//Ex4
let elvis = 3;
console.log(elvis, typeof elvis);
elvis = elvis + "";
console.log(elvis, typeof elvis);
elvis = elvis - 2;
console.log(elvis, typeof elvis);

//Ex5
let ana = " ";
console.log(ana, typeof ana);
let bana = Number(ana);
console.log(bana, typeof bana);
console.log(ana, typeof ana);

// Exercise 1
let num1 = 5;
let isPositive1 = !!num1;
console.log(isPositive1);
//Output: true
//Score:

// Exercise 2
let num2 = 0;
let isNonZero2 = !!num2;
console.log(isNonZero2);
//Output: false
//Score:

// Exercise 3
let str1 = "Hello";
let isNotEmpty3 = !!str1;
console.log(isNotEmpty3);
//Output: true
//Score:

// Exercise 4
let str2 = "";
let isEmpty4 = !str2;
console.log(isEmpty4);
//Output: true
//Score:

// Exercise 5
let arr1 = [1, 2, 3];
let hasElements5 = !!arr1;
console.log(hasElements5);
//Output: true
//Score:

// Exercise 6
let arr2 = [];
let isEmptyArray6 = !arr2;
console.log(isEmptyArray6);
//Output: false
//Score:

// Exercise 7
let obj1 = { name: "John" };
let hasProperties7 = !!obj1;
console.log(hasProperties7);
//Output: true
//Score:

// Exercise 8
let obj2 = {};
let isEmptyObject8 = !obj2;
console.log(isEmptyObject8);
//Output: false
//Score:

// Exercise 9
let bool1 = true;
let invertedBool9 = !bool1;
console.log(invertedBool9);
//Output: false
//Score:

// Exercise 10
let bool2 = false;
let invertedBool10 = !!bool2;
console.log(invertedBool10);
//Output: false
//Score:

// Exercise 11
let mixedValue1 = "123";
let convertedNumber11 = !!Number(mixedValue1);
console.log(convertedNumber11);
//Output: true
//Score:

// Exercise 12
let mixedValue2 = 0;
let convertedBoolean12 = Boolean(mixedValue2);
console.log(convertedBoolean12);
//Output: false
//Score:

// Exercise 13
let undefinedVar1;
let hasValue13 = !!undefinedVar1;
console.log(hasValue13);
//Output: false
//Score:

// Exercise 14
let nullVar1 = null;
let isNotNull14 = !nullVar1;
console.log(isNotNull14);
//Output: true
//Score:

// Exercise 15
let nanValue1 = NaN;
let isNotNaN15 = !!nanValue1;
console.log(isNotNaN15);
//Output: false
//Score:

// Exercise 16
let infinityValue1 = Infinity;
let isFinite16 = !!isFinite(infinityValue1);
console.log(isFinite16);
//Output: false
//Score:

// Exercise 17
let zeroValue1 = 0;
let isFalsy17 = !zeroValue1;
console.log(isFalsy17);
//Output: true
//Score:

// Exercise 18
let nonZeroValue1 = 42;
let isTruthy18 = !!nonZeroValue1;
console.log(isTruthy18);
//Output: true
//Score:

// Exercise 19
let str3 = "true";
let parsedBoolean19 = Boolean(str3);
console.log(parsedBoolean19);
//Output: true
//Score:

// Exercise 20
let str4 = "false";
let parsedBoolean20 = !!JSON.parse(str4);
console.log(parsedBoolean20);
//Output:
//Score:
