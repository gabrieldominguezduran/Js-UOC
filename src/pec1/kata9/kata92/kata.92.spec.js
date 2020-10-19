import plantTree from './kata.92';

const myTree = new plantTree('pearTree', 'pear');

test('Debe incuir propiedad species', () => {
  expect(myTree.hasOwnProperty('species')).toBe(true);
});

test('Debe incuir propiedad fruit', () => {
  expect(myTree.hasOwnProperty('fruit')).toBe(true);
});

test('Debe incuir propiedad getFruit', () => {
  expect(myTree.hasOwnProperty('getFruit')).toBe(true);
});

test('Al invocar el método getFruit nos devuelve el valor pear', () => {
  expect(myTree.getFruit()).toBe('pear');
});
