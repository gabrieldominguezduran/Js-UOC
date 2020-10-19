import plantTree from './kata.91';

const myTree = new plantTree('pearTree', 'pear');
const myTree2 = new plantTree(2, 3);

const isValid = (obj) => {
  if (Object.entries(obj).length === 0) {
    return null;
  }
};

test('En caso de no recibir dos parámetros de tipo string, devolverá null ', () => {
  expect(isValid(myTree2)).toBeNull();
});

test(`Al invocar la función con los parámetros pearTree y pear devuelve el objeto {
  species: "pearTree",
  fruit: "pear"
 }`, () => {
  expect(myTree).toMatchObject({
    species: 'pearTree',
    fruit: 'pear',
  });
});
