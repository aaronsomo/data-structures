class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
  }

  push(value) {
    this[this.count] = value;
    this.count++;
  }

  pop() {
    var popped = this[this.count - 1];
    delete this[this.count - 1];
    this.count--;
    return popped;
  }

  size() {
    if (this.count < 0) {
      return 0;
    } else {
      return this.count;
    }
  }

}