var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.i = 0;

  return stack;
};

var stackMethods = {
  push(value) {
    this.storage[this.i] = value;
    this.i++;
  },

  pop(value) {
    this.i--;
    if (this.i < 0) {
      this.i = 0;
    }
    return this.storage[this.i];
  },

  size(value) {
    return this.i;
  }
};


