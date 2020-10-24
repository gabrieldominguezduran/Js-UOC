import plantTree from '../kata11/kata11';

const tree = new plantTree('manzano', 'manzana');

let myStr = tree.getSpecies().substring(0, 4);
const regEx = new RegExp(myStr);
tree.setFruit('pera').match(regEx) ? tree.setFruit('pera') : tree.getFruit();

test('Al crear un tree con los valores manzano y manzana e invocar posteriormente setFruit con el valor pera, el método lanza un error y mantiene su valor previo.', () => {
  expect(tree.fruit).toBe('manzana');
});

const tree2 = new plantTree('peral', 'manzana');

let myStr2 = tree2.getSpecies().substring(0, 4);
const regEx2 = new RegExp(myStr2);
tree2.setFruit('pera').match(regEx2) ? tree2.setFruit('pera') : tree2.getFruit();

test('Al crear un tree con los valores peral y manzana e invocar posteriormente setFruit con el valor pera, el método modifica el valor de la propiedad fruit.', () => {
  expect(tree2.fruit).toBe('pera');
});
