var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // var someInstance = {};

  var queue = {};
  // Use an object with numeric keys to store values
  queue.storage = {};
  queue.front = 0;
  queue.end = 0;

  // Implement the methods below
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {

  // const _ = require('underscore');

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue(value) {
    if (this.front < 0) {
      this.front = 0;
    }
    var deq = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return deq;
  },

  size(value) {
    return Object.keys(this.storage).length;
  }
};





