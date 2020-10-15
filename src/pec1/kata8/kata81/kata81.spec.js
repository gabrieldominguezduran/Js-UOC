import tree from './kata81';

test('Debe tener una propiedad species y una fruit', () => {
  expect(Object.keys(tree)).toEqual(['species', 'fruit']);
});

test('El valor de la propiedad species debe ser appleTree', () => {
  expect(tree.species).toEqual('appleTree');
});

test('El valor de la propiedad fruit debe ser apple', () => {
  expect(tree.fruit).toEqual('apple');
});
