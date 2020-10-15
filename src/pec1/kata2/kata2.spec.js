import sumPositiveElements from './kata2';

test('devuelve el número 0', () => {
  expect(sumPositiveElements([])).toBe(0);
});

test('devuelve el número 15', () => {
  expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15);
});

test('devuelve el número 13', () => {
  expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13);
});

test('devuelve el número 9', () => {
  expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9);
});

test('devuelve el número 0', () => {
  expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0);
});
