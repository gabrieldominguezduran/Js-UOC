export default function plantTree(species, fruit) {
  this.getSpecies = function () {
    return (this.species = species);
  };
  this.setSpecies = function (setSpecies) {
    if (typeof setSpecies === 'string') {
      return (this.species = setSpecies);
    }
  };
  this.getFruit = function () {
    return (this.fruit = fruit);
  };
  this.setFruit = function (setFruit) {
    if (typeof setFruit === 'string') {
      return (this.fruit = setFruit);
    }
  };
}
