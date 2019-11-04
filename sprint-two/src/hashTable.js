var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // var bucket = this._storage;
  this.tupleCount = 0;
  this.keyValuePairs = [];
};

HashTable.prototype.insert = function(k, v) {
  // var index = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = this._storage;
  // this._storage.set(index, v); // ahhhh, this only sets a value to the index, but passes tests
  /*
  ^^^ set() stores a value to storage[index]
  on first call of LimitedArray(), we create an array of EMPTY values
    shown by declaring var LimitedArray() = f(){}
      var array = LimitedArray(8)
      array[1]'s value is undefined
    this._storage.set(index, v) sets the value of (for example, if HF = 1) array[1] to v; v could possibly be []
  */
  /*
  need a bucket to store values of the result of the HF into
    create bucket with value of index

  iterate over bucket array
    create tuples for each k,v

  when creating tuples, check to see if input 'key' already exists
    if it already exists, set new value for 'key'
  */
  // ORIGINAL PAIR PROGRAM SOLUTION
  // var bucket = this._storage.get(index);
  // if (!bucket) {
  //   var newBucket = [];
  //   this._storage.set(index, newBucket);
  // }
  // if (this._storage.get(index).length > 0) {
  //   for (var i = 0; i < this._storage.get(index).length; i++) {
  //     if (this._storage.get(index)[i][0] === k) {
  //       this._storage.get(index)[i][1] = v;
  //       this.keyValuePairs[this.keyValuePairs.indexOf(JSON.stringify({k: this._storage.get(index)[i][1]}))] = JSON.stringify({k: v});
  //     }
  //   }
  // }
  // this._storage.get(index).push([k, v]);

  // revisiting after stepping through fred's pseudocode during solution video
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var keyExists = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      keyExists = true;
      break; // break because we no longer need to iterate once we find a matching value
    }
  }
  if (!keyExists) {
    bucket.push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  /* PASSED TESTS BUT IS INCOMPLETE
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
  */

  /*
  need to give value to bucket to know which indexed bucket we are going to iterate through
  iterate through bucket array
    if bucket[i] has a 0-index value of 'k'
      return bucket[i][0]
  */

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  /*
  need to pass value to bucket to know which indexed bucket we are going to iterate through
  ifterate through bucket array
    if bucket[i] has a 0-index value of 'k'
      delete bucket[i][0]
  */

  var index = getIndexBelowMaxForKey(k, this._limit);
  // for (var i = 0; i < this._storage[index].length; i++) {
  //   if (this._storage[index][i][0] === k) {
  //     // console.log(this._storage[index][i][0]);
  //     delete this._storage[index][i][1];
  //     delete this._storage[index][i][0];
  //   }
  // }
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      this.keyValuePairs.splice(this.keyValuePairs.indexOf(JSON.stringify({k: bucket[i][0][1]})), 1);
      delete bucket[i][0];
    }
  }
  // for (var i in this._storage) {
  //   if (i === index) {
  //     for (var j = 0; j < this._storage[index][j].length; j++) {
  //       if (this._storage[index][j][0] === k) {
  //         delete this._storage[index][j][1];
  //       }
  //     }
  //   }
  // }
};




/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: constant/linear
 remove: constant/linear
 */


