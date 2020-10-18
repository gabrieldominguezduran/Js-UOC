import tree from './kata81';

const expected = { species: '', fruit: '' };

test('Debe tener una propiedad species y una fruit', () => {
  expect(Object.keys(expected)).toMatchObject(Object.keys(tree));
});

test('El valor de la propiedad species debe ser appleTree', () => {
  expect(tree.species).toEqual('appleTree');
});

test('El valor de la propiedad fruit debe ser apple', () => {
  expect(tree.fruit).toEqual('apple');
});
