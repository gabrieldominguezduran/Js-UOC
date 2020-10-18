function getFruit(fruit) {
  return fruit;
}

export default function OtherPlantTree(species, fruit) {
  this.species = species;
  this.fruit = fruit;
  this.getFruit = getFruit;
}
