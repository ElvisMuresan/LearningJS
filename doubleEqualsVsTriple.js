//EX1
const a = 100;
const b = "100";

console.log(a == b);

//EX2
let a1 = null;
let b1 = 10;

console.log(a1 == b1);

//EX3
let a2 = null;
let b2;

console.log(a2 == b2);

//EX 4

let a3 = 100;
let b3 = 100;

console.log(a3 === b3);

// Exercise 1
let a10 = 5;
let b10 = "5";
console.log(a10 == b10); //true
console.log(a10 === b10); //false
//Output: true false
//Score:

// Exercise 2
let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);
//Output: true, false
//Score:

// Exercise 3
let str1 = "Hello";
let str2 = "hello";
console.log(str1 == str2);
console.log(str1 === str2);
//Output: false false
//Score:

// Exercise 4
let bool1 = true;
let bool2 = 1;
console.log(bool1 == bool2);
console.log(bool1 === bool2);
//Output:true, false
//Score:

// Exercise 5
let bool3 = false;
let bool4 = 0;
console.log(bool3 == bool4);
console.log(bool3 === bool4);
//Output:true false
//Score:

// Exercise 6
let nullValue = null;
let undefinedValue = undefined;
console.log(nullValue == undefinedValue);
console.log(nullValue === undefinedValue);
//Output: true, false
//Score:

// Exercise 7
let zero = 0;
let emptyString = "";
console.log(zero == emptyString);
console.log(zero === emptyString);
//Output: true, false
//Score:

// Exercise 8
let notANumber = NaN;
console.log(notANumber == NaN);
console.log(notANumber === NaN);
//Output: true, true
//Score:

// Exercise 9
let infinity = Infinity;
console.log(infinity == Infinity);
console.log(infinity === Infinity);
//Output:true, true
//Score:

// Exercise 10
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2);
console.log(arr1 === arr2);
//Output:true, false
//Score:

// Exercise 11
let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log(obj1 == obj2);
console.log(obj1 === obj2);
//Output: true, false
//Score:

// Exercise 12
let emptyArr = [];
console.log(emptyArr == false);
console.log(emptyArr === false);
//Output:
//Score:

// Exercise 13
let str3 = "true";
let parsedBoolean = Boolean(str3);
console.log(parsedBoolean == true);
console.log(parsedBoolean === true);
//Output: true, false
//Score:

// Exercise 14
let str4 = "false";
let parsedBoolean2 = !!JSON.parse(str4);
console.log(parsedBoolean2 == false);
console.log(parsedBoolean2 === false);
//Output:true, false
//Score:

// Exercise 16
let nullStr = "null";
let undefinedStr = "undefined";
console.log(nullStr == null);
console.log(undefinedStr === undefined);
//Output:false, false
//Score:

// Exercise 17
let str5 = "5";
let num3 = 5;
console.log(str5 == num3);
console.log(str5 === num3);
//Output:true, false
//Score:

// Exercise 18
let bool5 = true;
let str6 = "true";
console.log(bool5 == str6);
console.log(bool5 === str6);
//Output: true, false
//Score:

// Exercise 19
let str7 = "hello";
let str8 = "HELLO";
console.log(str7 == str8);
console.log(str7 === str8);
//Output:false, false
//Score:

// Exercise 20
let num4 = 10;
let str9 = "10";
console.log(num4 == str9);
console.log(num4 === str9);
//Output: true, false
//Score:
