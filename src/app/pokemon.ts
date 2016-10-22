export class Pokemon {
  _id: number;
  name: string;
  weight: number;
  height: number;
  image: string;
  abilities: string[];

  static parse(data) {
    console.log(data);
    let pokemon = new Pokemon();
    pokemon._id = data.id;
    pokemon.name = data.name;
    pokemon.weight = data.weight;
    pokemon.height = data.height;
    pokemon.image = data.sprites.front_default;
    pokemon.abilities = data.abilities.map((ab) => ab.ability.name);

    return pokemon;
  }

}
