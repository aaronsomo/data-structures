var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.front < 0) {
    this.front = 0;
  }
  var deq = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return deq;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


