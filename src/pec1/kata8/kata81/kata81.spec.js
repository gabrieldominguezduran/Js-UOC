import tree from './kata81';

test('Debe tener una propiedad species', () => {
  expect.objectContaining({ species: '' });
});

test('Debe tener una propiedad fruit', () => {
  expect.objectContaining({ fruit: '' });
});

test('El valor de la propiedad species debe ser appleTree', () => {
  expect(tree.species).toEqual('appleTree');
});

test('El valor de la propiedad fruit debe ser apple', () => {
  expect(tree.fruit).toEqual('apple');
});
