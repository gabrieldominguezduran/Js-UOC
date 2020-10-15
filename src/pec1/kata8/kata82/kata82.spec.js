import getFruit from './kata82';
import tree from '../kata81/kata81';
import tree2 from './kata.821';

test('Debe devolver el valor de la propiedad fruit cuando existe en el objeto tree', () => {
  expect(getFruit(tree)).toBe('apple');
});

test('Debe devolver el string “No fruit” cuando la propiedad fruit no está definida en el objeto tree', () => {
  expect(getFruit(tree2)).toBe('No fruit');
});
