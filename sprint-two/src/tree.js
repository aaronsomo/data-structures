var Tree = function(value) {
  var newTree = {};
  newTree.childKey = 0;
  newTree.value = value;

  // your code here
  newTree.children = {};

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children[this.childKey] = childTree;
  this.childKey++;
};

treeMethods.contains = function(target) {
  var bool = false;
  if (this.value === target) {
    bool = true;
  }
  for (var i in this.children) {
    if (this.children[i].contains(target)) {
      bool = true;
    }
  }
  return bool;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant
 contains: linear
 */
