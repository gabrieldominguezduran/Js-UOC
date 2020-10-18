import tree from './kata83';

test('Debe contener un método getFruit', () => {
  expect(Boolean(tree.getFruit())).toBe(true);
});

test('El resultado de invocar el método getFruit sobre el objeto tree debe ser "apple', () => {
  expect(tree.getFruit()).toBe('apple');
});
