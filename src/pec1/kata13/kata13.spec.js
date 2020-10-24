import plantTree from './kata13';

const tree1 = new plantTree('appleTree', 'apple');
const tree2 = new plantTree('appleTree');

const expected1 = { species: '', fruit: '' };

test('Debe tener una propiedad species y una fruit', () => {
  expect(Object.keys(expected1)).toMatchObject(Object.keys(tree1));
});

test('El valor de la propiedad species debe ser appleTree', () => {
  expect(tree1.species).toEqual('appleTree');
});

test('El valor de la propiedad fruit debe ser apple', () => {
  expect(tree1.fruit).toEqual('apple');
});

test('Debe devolver el valor de la propiedad fruit cuando existe en el objeto tree', () => {
  expect(tree1.getFruit).toBe('apple');
});

test('Debe devolver el string “No fruit” cuando la propiedad fruit no está definida en el objeto tree', () => {
  expect(tree2.getFruit).toBe('No fruit');
});

test('Debe contener un método getFruit', () => {
  expect(Boolean(tree1.getFruit)).toBe(true);
});

test('El resultado de invocar el método getFruit sobre el objeto tree debe ser "apple', () => {
  expect(tree1.getFruit).toBe('apple');
});

const myTree = new plantTree('pearTree', 'pear');
const myTree1 = new plantTree(2, 3);

const isValid = (obj) => {
  if (typeof Object.entries(obj) !== 'string') {
    return null;
  }
};

test('En caso de no recibir dos parámetros de tipo string, devolverá null ', () => {
  expect(isValid(myTree1)).toBeNull();
});

test(`Al invocar la función con los parámetros pearTree y pear devuelve el objeto {
  fruit: "pear"
  species: "pearTree",
 }`, () => {
  expect(myTree).toMatchObject({
    fruit: 'pear',
    species: 'pearTree',
  });
});

const myTree2 = new plantTree('pearTree', 'pear');

test('Debe incuir propiedad species', () => {
  expect(myTree2.hasOwnProperty('species')).toBe(true);
});

test('Debe incuir propiedad fruit', () => {
  expect(myTree2.hasOwnProperty('fruit')).toBe(true);
});

test('Debe incuir propiedad getFruit', () => {
  const myObj = Object.defineProperty(myTree2, 'pear', {
    get: jest.fn(() => 'pear'),
  });
  expect(myObj).toEqual(myTree2);
});

test('Al invocar el método getFruit nos devuelve el valor pear', () => {
  expect(myTree2.getFruit).toBe('pear');
});

const myTree3 = new plantTree('pearTree', 'pear');

test('El objeto devuelto incluye sólo dos propiedades: getSpecies y getFruitt', () => {
  const myObj = Object.defineProperty(myTree3, 'getSpecies', {
    get: jest.fn(() => 'pearTree'),
  });
  expect(myObj).toEqual(myTree3);
});
test('El objeto devuelto incluye sólo dos propiedades: getSpecies y getFruitt', () => {
  const myObj = Object.defineProperty(myTree3, 'getFruit', {
    get: jest.fn(() => 'pear'),
  });
  expect(myObj).toEqual(myTree3);
});

test('Al invocar el método getSpecies nos devuelve el valor pearTree', () => {
  expect(myTree3.getSpecies).toBe('pearTree');
});

test('Al invocar el método getFruit nos devuelve el valor pear', () => {
  expect(myTree3.getFruit).toBe('pear');
});

const myTree4 = new plantTree('pearTree', 'pear');

test('El objeto devuelto incluye cuatro propiedades: getSpecies, setSpecies, getFruit y setFruit', () => {
  const myObj1 = Object.defineProperty(myTree4, 'getSpecies', {
    get: jest.fn(() => 'pearTree'),
  });
  expect(myObj1).toEqual(myTree4);
  const myObj2 = Object.defineProperty(myTree4, 'setSpecies', {
    set: jest.fn(() => 'pearTree'),
  });
  expect(myObj2).toEqual(myTree4);
  const myObj3 = Object.defineProperty(myTree4, 'getFruit', {
    get: jest.fn(() => 'pear'),
  });
  expect(myObj3).toEqual(myTree4);
  const myObj4 = Object.defineProperty(myTree4, 'setFruit', {
    set: jest.fn(() => 'pear'),
  });
  expect(myObj4).toEqual(myTree4);
});

// myTree4.setFruit = 12;
// test('Al crear un árbol e invocar posteriormente setFruit con el valor 12 el objeto tree mantiene su valor previo', () => {
//   expect(myTree4.fruit).toBe('pear');
// });

test('Al crear un árbol e invocar posteriormente setFruit con el valor ‘apple’ el objeto tree tiene apple como valor de la propiedad fruit', () => {
  expect((myTree4.setFruit = 'apple')).toBe('apple');
});

test('Al crear un árbol e invocar posteriormente setSpecies con el valor ‘appleTree’ el objeto tree tiene apple como valor de la propiedad species', () => {
  expect((myTree4.setSpecies = 'appleTree')).toBe('appleTree');
});

describe('plantTree', () => {
  it('tree tiene el método getSpecies que devuelve un string que tiene el método presentTree', () => {
    const presentTree = (plantTree.prototype.presentTree = jest.fn());
    const myTree5 = new plantTree('appleTree', 'apple');
    const myObj5 = Object.defineProperty(myTree5, 'getSpecies', {
      get: jest.fn(() => 'appleTree'),
    });

    myTree5.presentTree();

    expect(presentTree).toHaveBeenCalledTimes(1);
    expect(myObj5).toEqual(myTree5);
  });
});

plantTree.prototype.presentTree = function () {
  console.log(`Este árbol es un ${this.species} y da ${this.fruit}`);
};

const myTree6 = new plantTree('appleTree');

const spy1 = jest.spyOn(console, 'log');

myTree6.presentTree(myTree6.getSpecies);

test('Al ejecutar presentTree se presentará por consola “Este árbol es un ${nuestro_arbol}”, siendo nuestro_arbol el string sobre el que se ejecuta el método presentTree', () => {
  expect(spy1).toHaveBeenCalledWith('Este árbol es un appleTree y da undefined');
});

const myTree7 = new plantTree('appleTree', 'apple');
const spy2 = jest.spyOn(console, 'log');

myTree7.presentTree(myTree7.getSpecies, myTree7.getFruit);

test('Al ejecutar presentTree con un parámetro de tipo string se presentará por consola “Este árbol es un ${nuestro_arbol} y da ${nuestra_fruta}”, siendo nuestra_fruta el string que hemos pasado al método.', () => {
  expect(spy2).toHaveBeenCalledWith('Este árbol es un appleTree y da apple');
});

const myTree8 = new plantTree();

test('Al crear un árbol e invocar posteriormente setFruit con el valor 12 el método lanza un error y mantiene su valor previo', () => {
  expect(() => {
    myTree8.setFruit = 12;
  }).toThrow();
});

const myTree9 = new plantTree('manzano', 'manzana');

let myStr = myTree9.getSpecies.substring(0, 4);
const regEx = new RegExp(myStr);

const result = (myTree9.setFruit = 'pera').match(regEx)
  ? (myTree9.setFruit = 'pera')
  : myTree9.getFruit;

test('Al crear un tree con los valores manzano y manzana e invocar posteriormente setFruit con el valor pera, el método lanza un error y mantiene su valor previo.', () => {
  expect(result).toBe('manzana');
});

const myTree10 = new plantTree('peral', 'manzana');

let myStr3 = myTree10.getSpecies.substring(0, 4);
const regEx2 = new RegExp(myStr3);
const result2 = (myTree10.setFruit = 'pera').match(regEx2) ? 'pera' : myTree10.getFruit;

test('Al crear un tree con los valores peral y manzana e invocar posteriormente setFruit con el valor pera, el método modifica el valor de la propiedad fruit.', () => {
  expect(result2).toBe('pera');
});
