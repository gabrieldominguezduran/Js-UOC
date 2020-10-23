const RegEx = /^[a-zA-Z]{4}/g;
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
      let valid = /^[a-zA-Z]{4}/g.test(species);
      return valid ? (this.fruit = setFruit) : (this.fruit = fruit);
    }
  };
}
