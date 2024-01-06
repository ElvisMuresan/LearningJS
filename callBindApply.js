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
