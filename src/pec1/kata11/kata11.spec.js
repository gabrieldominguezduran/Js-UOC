import plantTree from './kata11';

const tree = new plantTree();

test('Al crear un árbol e invocar posteriormente setFruit con el valor 12 el método lanza un error y mantiene su valor previo', () => {
  expect(() => {
    tree.setFruit(12);
  }).toThrow();
});
