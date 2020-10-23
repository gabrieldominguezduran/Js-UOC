import plantTree from '../kata9/kata94/kata94';

plantTree.prototype.presentTree = function () {
  console.log(`Este árbol es un ${this.species} y da ${this.fruit}`);
};

export default plantTree;
