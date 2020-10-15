import repeatString from './kata3';

test('devuelve el string ""', () => {
  expect(repeatString('JavaScript', 0)).toBe('');
});

test('devuelve el string "university"', () => {
  expect(repeatString('university', 1)).toBe('university');
});

test('devuelve el string "hellohellohello"', () => {
  expect(repeatString('hello', 3)).toBe('hellohellohello');
});

test('devuelve el string "??????????"', () => {
  expect(repeatString('?', 10)).toBe('??????????');
});
