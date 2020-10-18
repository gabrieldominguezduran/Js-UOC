import GetPlantTree from './kata93';

const myTree = new GetPlantTree();

test('Debe incuir propiedad getSpecies', () => {
  expect(myTree.hasOwnProperty('getSpecies')).toBe(true);
});

test('Debe incuir propiedad getFruit', () => {
  expect(myTree.hasOwnProperty('getFruit')).toBe(true);
});

test('Al invocar el método getSpecies nos devuelve el valor pearTree', () => {
  expect(myTree.getSpecies('pearTree')).toBe('pearTree');
});

test('Al invocar el método getFruit nos devuelve el valor pear', () => {
  expect(myTree.getFruit('pear')).toBe('pear');
});
