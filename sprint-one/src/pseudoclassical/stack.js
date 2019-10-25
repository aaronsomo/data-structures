var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.i = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.i] = value;
  this.i++;
};

Stack.prototype.pop = function() {
  this.i--;
  if (this.i < 0) {
    this.i = 0;
  }
  var popped = this.storage[this.i];
  delete this.storage[this.i];
  return popped;
};

Stack.prototype.size = function() {
  return this.i;
};


