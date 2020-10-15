import evenOdd from './kata1';

test('devuelve el string "Even"', () => {
  expect(evenOdd(0)).toBe('Even');
});
test('devuelve el string "Odd"', () => {
  expect(evenOdd(1)).toBe('Odd');
});
test('devuelve el string "Even"', () => {
  expect(evenOdd(2)).toBe('Even');
});
test('devuelve el string "Odd"', () => {
  expect(evenOdd(3)).toBe('Odd');
});
