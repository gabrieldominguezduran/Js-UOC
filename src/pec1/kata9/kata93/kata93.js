export default function plantTree(species, fruit) {
  this.getSpecies = function () {
    return (this.species = species);
  };
  this.getFruit = function () {
    return (this.fruit = fruit);
  };
}
