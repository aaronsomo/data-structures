class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var deq = this.storage[0];
    delete this.storage[0];
    if (this.count < 1) {
      return 0;
    }
    for (var i in this.storage) {
      this.storage[i - 1] = this.storage[i];
    }
    this.count--;
    return deq;
  }

  size() {
    return this.count;
  }

}
