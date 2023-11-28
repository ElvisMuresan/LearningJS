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
