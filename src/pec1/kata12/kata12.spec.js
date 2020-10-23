import plantTree from './kata12';

const tree = new plantTree('manzano', 'manzana');
tree.setFruit('pera');
test('Al crear un tree con los valores manzano y manzana e invocar posteriormente setFruit con el valor pera, el método lanza un error y mantiene su valor previo.', () => {
  expect(tree.getFruit()).toBe('manzana');
});

const tree2 = new plantTree('peral', 'manzana');
tree2.setFruit('pera');

test('Al crear un tree con los valores peral y manzana e invocar posteriormente setFruit con el valor pera, el método modifica el valor de la propiedad fruit.', () => {
  expect(tree2.getFruit()).toBe('pera');
});
