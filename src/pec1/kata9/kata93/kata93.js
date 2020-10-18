function getSpecies(species) {
  return species;
}
function getFruit(fruit) {
  return fruit;
}

export default function GetPlantTree() {
  this.getSpecies = getSpecies;
  this.getFruit = getFruit;
}
