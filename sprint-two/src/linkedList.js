var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    };
    this.tail = newNode;
  };

  list.removeHead = function () {
    var temp = this.head;
    delete this.head;
    list.head = temp.next
    return temp.value;
  };

  list.contains = function (target) {
    var currentNode = this.head;
    while (currentNode !== null) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;

  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
