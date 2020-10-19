export default function plantTree(species, fruit) {
  this.species = species;
  this.fruit = fruit;
  this.getFruit = function () {
    return this.fruit;
  };
}
