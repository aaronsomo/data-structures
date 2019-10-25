var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add key-value pairs to storage object, 
    // "[someInstance.size]" as the current length of storage, should be used as a key; will increment as values get pushed
    // "storage[someInstance.size]" should be assigned the new value
    storage[someInstance.size(storage)] = value;
    // console.log('storage: ', storage);
    // console.log('some instance.size at storage: ', someInstance.size(storage))
  };

  someInstance.pop = function() {
    // console.log('some instance.size: ', someInstance.size())
    // pop storage[at numerical string as key] and it's value
    var popped = storage[someInstance.size()-1];
    delete storage[someInstance.size()-1];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};