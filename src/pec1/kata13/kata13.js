export default class plantTree {
  constructor(species, fruit) {
    this.species = species;
    this.fruit = fruit;
  }
  get getSpecies() {
    return this.species;
  }
  set setSpecies(species) {
    if (typeof species === 'string') {
      return species;
    } else {
      throw new Error('Not valid tree');
    }
  }
  get getFruit() {
    if (!this.fruit) {
      return 'No fruit';
    } else {
      return this.fruit;
    }
  }
  set setFruit(fruit) {
    if (typeof fruit === 'string') {
      return fruit;
    } else {
      throw new Error('Not valid fruit');
    }
  }
}
