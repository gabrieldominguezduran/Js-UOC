import removeFirstAndLast from './kata4';

test('devuelve el string "avaScrip"', () => {
  expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
});

test('devuelve el string "lexandri"', () => {
  expect(removeFirstAndLast('Alexandria')).toBe('lexandri');
});

test('devuelve el string "ydroge"', () => {
  expect(removeFirstAndLast('hydrogen')).toBe('ydroge');
});

test('devuelve el string "ok"', () => {
  expect(removeFirstAndLast('ok')).toBe('ok');
});
