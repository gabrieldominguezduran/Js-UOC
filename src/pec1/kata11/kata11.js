export default function plantTree(species, fruit) {
  this.getSpecies = function () {
    return (this.species = species);
  };
  this.setSpecies = function (setSpecies) {
    if (typeof setSpecies === 'string') {
      return (this.species = setSpecies);
    } else {
      throw new Error();
    }
  };
  this.getFruit = function () {
    return (this.fruit = fruit);
  };
  this.setFruit = function (setFruit) {
    if (typeof setFruit === 'string') {
      return (this.fruit = setFruit);
    } else {
      throw new Error();
    }
  };
}
