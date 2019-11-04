var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail = list.head;
      if (list.tail.next) {
        list.tail = list.tail.next;
      }
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var returnValue = list.head.value;
      list.head = list.head.next;
      return returnValue;
    }
  };

  list.contains = function(target) {
    var current;
    if (list.head) {
      current = list.head;
      while (current) {
        if (current.value === target) {
          return true;
        } else {
          current = current.next;
        }
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: constant
 removeHead: constant
 contains: linear
 */