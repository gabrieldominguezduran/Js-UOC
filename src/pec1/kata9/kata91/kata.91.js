export default function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit === 'string') {
    this.species = species;
    this.fruit = fruit;
  } else {
    return null;
  }
}
