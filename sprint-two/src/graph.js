

// Instantiate a new graph
var Graph = function() {
  this.nodeObj = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  /*
  value is a number that you want to assign to the created nodes inside of new Graph()
  this.newNode = node; // this creates new node objects inside of new Graph(), gets messy, difficult to iterate through
  simpler to assign the value of node as a key that takes in a value (array of connections) as opposed to creating {'key1': value} nodes
  want: {'value': [connections]} not nested objects {'key1': {value: [connections]}}
  */
  this.nodeObj[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  /*
  find a way to grab all of the keys of new Graph()
    iterate over the keys with the input value
    compare the input value (number) to the keys
      return true if input value matches a key
      return false if input value does not match a key
  */

  var keys = [];
  keys = Object.keys(this.nodeObj);

  for (var i = 0; i < keys.length; i++) {
    if (node.toString() === keys[i]) {
      return true;
    } else {
      return false;
    }
  }

  // REFACTORED for-loop
  /*
  if (Object.keys(this.nodeObj).includes(node.toString())) {
    return true;
  } else {
    return false;
  }
  */

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodeObj) {
    if (key === node.toString()) {
      delete this.nodeObj[key];
    }
  }
  // if (this.nodeObj[node]) {
  //   delete this.nodeObj[node];
  // }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  /*
  check to see if an edge exists between two nodes
  if this.nodeObj has fromNode AND node also has toNode // both fromNode and toNode have to exist
    check to see if fromNode includes toNode value AND also check to see if toNode has a fromNode value
  */
  if (this.nodeObj[fromNode] && this.nodeObj[toNode]) {
    if (this.nodeObj[fromNode].includes(toNode) && this.nodeObj[toNode].includes(fromNode)) {
      return true;
    } else {
      return false;
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  /*
  check to see if fromNode and toNode exist
  if this.nodeObj[fromNode] and this.nodeObj[toNode]
    push toNode into fromNode
      this.nodeObj[fromNode].push(toNode)
    we also want to add fromNote's value to toNode
      this.nodeObj[toNode].push(fromNode)
  */
  if (this.nodeObj[fromNode] && this.nodeObj[toNode]) {
    this.nodeObj[fromNode].push(toNode);
    this.nodeObj[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /*
  check to see if fromNode and toNode exist
  if this.nodeObj[fromNode] and this.nodeObj[toNode]
    push toNode into fromNode
      this.nodeObj[fromNode].push(toNode)
    we also want to add fromNote's value to toNode
      this.nodeObj[toNode].push(fromNode)
  */
  if (this.nodeObj[fromNode] && this.nodeObj[toNode]) {
    this.nodeObj[fromNode].splice(this.nodeObj[fromNode].indexOf(toNode), 1);
    this.nodeObj[toNode].splice(this.nodeObj[toNode].indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeObj) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


