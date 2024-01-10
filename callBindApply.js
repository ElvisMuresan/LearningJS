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
