//EX1
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
const message = reverseWords("This is an example!");
console.log(message);

//EX2
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let averageClassPoints = 0;
  for (let i = 0; i < classPoints.length; i++) {
    averageClassPoints += classPoints[i] / classPoints.length;
  }
  console.log(classPoints.length);
  console.log(averageClassPoints);
  return yourPoints > averageClassPoints;
}
const result = betterThanAverage([2, 3], 1);
console.log(result);

//EX3
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    nextSq = Math.sqrt(sq) + 1;
    return nextSq * nextSq;
  } else {
    return -1;
  }
}
const result1 = findNextSquare(625);
console.log(result1);

//EX4
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  let numberOfErrors = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      numberOfErrors++;
    }
  }
  return `${numberOfErrors}/${s.length}`;
}

const result2 = printerError("abbcceeessssyyzzxxm");
console.log(result2);

//EX5
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  sum % 2 === 0 ? (result = "even") : (result = "odd");
  return result;
}

console.log(oddOrEven([1, 2, 3, 4, 3, 1]));

//EX6
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 +2^2 = 9

//V1
function squareSum(numbers) {
  let sumSquare = 0;
  for (i = 0; i < numbers.length; i++) {
    sumSquare += Math.pow(numbers[i], 2);
  }
  return sumSquare;
}

const result3 = squareSum([1, 2, 3, 4]);
console.log(result3);

//V2
function squareSum(numbers) {
  let sumSquare = 0;
  numbers.forEach(function (n) {
    sumSquare += n * n;
  });
  return sumSquare;
}

const result4 = squareSum([1, 2, 3, 4, 5]);
console.log(result4);

//EX7
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
const isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(26));

//EX8
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 === 1) ||
    (flower2 % 2 === 0 && flower1 % 2 === 1)
    ? true
    : false;
}

console.log(lovefunc(5, 6));

//EX9
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//V1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInt = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < smallestInt) {
        smallestInt = args[i];
      }
    }
    return smallestInt;
  }
}

const finder = new SmallestIntegerFinder();
const result5 = finder.findSmallestInt([102, 22, 33, 43, 55]);
console.log(result5);

//V2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const finder1 = new SmallestIntegerFinder();
const result6 = finder1.findSmallestInt([102, -2232, 333, -433, -55]);
console.log(result6);

//EX10
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
  let needleWord = "";
  let position = undefined;
  for (let i = 0; i <= haystack.length; i++) {
    needleWord = haystack[i] === "needle" ? haystack[i] : needleWord;
  }
  position = haystack.indexOf("needle");
  return `found the needle at position ${position}`;
}
const result7 = findNeedle([
  "elvis",
  "muresan",
  "barcelona",
  "needle",
  "madrid",
]);
console.log(result7);

//EX11
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
