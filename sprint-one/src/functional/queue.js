var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var start = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count - start > 0) {
      var temp = storage[start];
      delete storage[start];
      start++;
      return temp;
    }
  };

  someInstance.size = function() {
    return count-start;
  };

  return someInstance;
};
