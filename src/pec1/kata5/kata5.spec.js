import removeSpaces from './kata5';

test('devuelve el string "goodmorning"', () => {
  expect(removeSpaces('good morning')).toBe('goodmorning');
});

test('devuelve el string "carrotcake"', () => {
  expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
});

test('devuelve el string "theabbotgavericetothefox"', () => {
  expect(removeSpaces('the abbot gave rice to the fox')).toBe('theabbotgavericetothefox');
});
