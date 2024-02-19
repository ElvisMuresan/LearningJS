//EX1
let pokemon = {
  firstName: "Pika",
  lastName: "Chu",
  getPokeName: function () {
    let fullName = `${this.firstName} ${this.lastName}`;
    console.log(this);
    return fullName;
  },
};

let pokemonName = function () {
  console.log(this);
  console.log(`${this.getPokeName()} I choose you`);
};
let logPokemon = pokemonName.bind(pokemon);
logPokemon();

//EX2 Call method
const fotball = {
  fotballPlayer: function () {
    fullName = `${this.firstName} ${this.lastName}`;
    console.log(fullName);
    console.log(this);
  },
};

const player1 = {
  firstName: "Leo",
  lastName: "Messi",
};

const player2 = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
};

const player3 = {
  firstName: "Kilian",
  lastName: "Mbappe",
};

//fotball.fotballPlayer()
fotball.fotballPlayer.call(player1);

//EX3 Bind method
const fotballl = {
  firstName: "Elvis",
  lastName: "Muresan",
  fotballPlayer: function () {
    fullName = `${this.firstName} ${this.lastName}`;
    console.log(this);
    return fullName;
  },
};

const playerr1 = {
  firstName: "Leo",
  lastName: "Messi",
};

const playerr2 = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
};

const playerr3 = {
  firstName: "Kilian",
  lastName: "Mbappe",
};

console.log(fotballl.fotballPlayer());
let fotballPlayer1 = fotballl.fotballPlayer.bind(playerr2);
console.log(fotballPlayer1());

//EX4 saving `this` using bind method
const fotballll = {
  firstName: "Elvis",
  lastName: "Muresan",
  fotballPlayer: function () {
    fullName = `${this.firstName} ${this.lastName}`;
    console.log(fullName);
    console.log(this);
  },
};

//console.log(fotball.fotballPlayer())
let fotballPlayer = fotballll.fotballPlayer.bind(fotballl);
setTimeout(fotballPlayer);

//EX5 `arguments` array
function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

func1(1, 2, 3);

//EX6
function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
  console.log(this);
}

function setBrand(brand) {
  Car.apply(this, ["convertible", "petrol"]);
  this.brand = brand;
  console.log(`Car details= `, this);
}

function definePrice(price) {
  Car.apply(this, new Array("convertible", "diesel"));
  this.price = price;
  console.log(`Car details= `, this);
}

const newBrand = new setBrand("Brand1");
const newCarPrice = new definePrice(10000);

//EX7
function addUp() {
  //Using arguments to capture the arbitrary number of inputs
  const args = Array.from(arguments);
  this.x = args.reduce((prev, curr) => prev + curr, 0);
  console.log("this.x = ", this.x);
}

function driverFunc() {
  const obj = {
    inps: [1, 2, 3, 4, 5, 6],
  };
  addUp.apply(obj, obj.inps);
}

driverFunc();
