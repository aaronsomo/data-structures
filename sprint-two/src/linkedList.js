var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = this.head;
      if (this.tail.next) {
        this.tail = this.tail.next;
      }
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    if (this.head) {
      var returnValue = this.head.value;
      this.head = this.head.next;
      return returnValue;
    }
  };

  list.contains = function(target) {
    var current;
    if (this.head) {
      current = this.head;
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
 */