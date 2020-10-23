import plantTree from './kata10';

describe('plantTree', () => {
  it('tree tiene el método getSpecies que devuelve un string que tiene el método presentTree', () => {
    const presentTree = (plantTree.prototype.presentTree = jest.fn());
    const tree = new plantTree('appleTree', 'apple');
    const obj = {
      getSpecies: function () {},
    };

    tree.presentTree();

    expect(presentTree).toHaveBeenCalledTimes(1);
    expect(obj.hasOwnProperty('getSpecies')).toEqual(tree.hasOwnProperty('getSpecies'));
  });
});

const tree = new plantTree('appleTree', 'apple');

const spy1 = jest.spyOn(console, 'log');

tree.presentTree(tree.getSpecies());

test('Al ejecutar presentTree se presentará por consola “Este árbol es un ${nuestro_arbol}”, siendo nuestro_arbol el string sobre el que se ejecuta el método presentTree', () => {
  expect(spy1).toHaveBeenCalledWith('Este árbol es un appleTree y da undefined');
});

const spy2 = jest.spyOn(console, 'log');

tree.presentTree(tree.getSpecies(), tree.getFruit());

test('Al ejecutar presentTree con un parámetro de tipo string se presentará por consola “Este árbol es un ${nuestro_arbol} y da ${nuestra_fruta}”, siendo nuestra_fruta el string que hemos pasado al método.', () => {
  expect(spy2).toHaveBeenCalledWith('Este árbol es un appleTree y da apple');
});
