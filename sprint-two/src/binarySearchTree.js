var BinarySearchTree = function(value) {
  // we want to define the left and right tree nodes
  // also define a node with starting value
  this.right = null;
  this.left = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(number) {
  /*
  when inserting, we want to compare the passed in value with initial node value
  if new value is less than prior node value
    create a new tree left of prior node
  if new value is greater than prior node value
    create a new tree right of prior node
  */
  
  if (number > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(number);
    } else {
      this.right.insert(number);
    }
  } else {
    if (this.left === null) {
      this.left = new BinarySearchTree(number);
    } else {
      this.left.insert(number);
    }
  }
};

BinarySearchTree.prototype.contains = function(targetValue) {
  /*
  check to see if passed in value is equal to the initial node value
  if new value === node value
    return true
  check to see if passed in value is greater than node value
    if child node value exists
      check to see if right node value contains new value
        return true/false
  check to see if passed in value is less than node value
    if child node value exists
      check to see if left node value contains new value
        return true/false
  */

  if (targetValue === this.value ) {
    return true;
  } else if (targetValue > this.value) {
    if (this.right) {
      return this.right.contains(targetValue);
    } else {
      return false;
    }
  } else if (targetValue < this.value) {
    if (this.left) {
      return this.left.contains(targetValue);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  /*
  things to keep in mind: depthFirstLog, per specrunner, is a backtracking function
    that executes a callback on every value of the binary search tree

  check if left and right nodes exist
    recurse depthFirstLog(); on left and right node's values

  */
  callback(this.value);
  if (this.left) {
    // this.left.depthFirstLog(callback(this.value)); // callback is not a function
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    // this.right.depthFirstLog(callback(this.value)); // callback is not a function
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: logarithmic
 contains: logarithmic
 depthFirstLog: logarithmic
 */
