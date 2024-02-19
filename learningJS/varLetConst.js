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

//Ex3
elvis(2, 5);

var elvis = (a, b) => a + b;

//EX4
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

let numberOfChildren = 4;
let wifeName = "Mihaela";
let location = "Timisoara";
let jobTitle = "SWQ";

console.log(
  `You will be a ${jobTitle} in ${location}, and married to ${wifeName} with ${numberOfChildren}`
);

//EX5
// Want to find out how old you'll be? Calculate it!

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

let birthYear = 1998;
let futureYear = 2040;
let posibileAges1 = futureYear - birthYear - 1;
let posibileAges2 = futureYear - birthYear;

console.log(
  `I will be either ${posibileAges1} or ${posibileAges2} in ${futureYear}`
);

//EX6
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let myAge = 25;
let maximAge = 100;
let amountPerDay = 50;
let amountPerYear = amountPerDay * 365;
let lifetimeSupply = (maximAge - myAge) * amountPerYear;
console.log(
  `You will need ${lifetimeSupply} to last you until the ripe old age of ${maximAge}`
);

//EX7
// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

let radius = 100;
let circumference = Math.PI * 2 * radius;
console.log(`The circumference is ${circumference}`);
let area = Math.PI * radius * radius;
console.log(`The area is ${area}`);

//EX8
// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let temperatureCelsius = 19;
let convertCtoF = temperatureCelsius * 1.8 + 32;
console.log(`${temperatureCelsius} is ${convertCtoF}`);
let temperatureFah = 30;
let convertFtoC = (temperatureFah - 32) / 1.8;
console.log(`${temperatureFah} is ${convertFtoC}`);
