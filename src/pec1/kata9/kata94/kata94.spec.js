import plantTree from './kata94';

const tree = new plantTree();

const expected = { getSpecies: '', setSpecies: '', getFruit: '', setFruit: '' };

test('El objeto devuelto incluye cuatro propiedades: getSpecies, setSpecies, getFruit y setFruit', () => {
  expect(Object.keys(expected)).toMatchObject(Object.keys(tree));
});

test('Al crear un árbol e invocar posteriormente setFruit con el valor 12 el objeto tree mantiene su valor previo', () => {
  expect(tree.setFruit(12)).not.toBe(12);
});

test('Al crear un árbol e invocar posteriormente setFruit con el valor ‘apple’ el objeto tree tiene apple como valor de la propiedad fruit', () => {
  expect(tree.setFruit('apple')).toBe('apple');
});
test('Al crear un árbol e invocar posteriormente setSpecies con el valor 12 el objeto tree mantiene su valor previo', () => {
  expect(tree.setSpecies(12)).not.toBe(12);
});

test('Al crear un árbol e invocar posteriormente setSpecies con el valor ‘apple’ el objeto tree tiene apple como valor de la propiedad fruit', () => {
  expect(tree.setSpecies('appleTree')).toBe('appleTree');
});
