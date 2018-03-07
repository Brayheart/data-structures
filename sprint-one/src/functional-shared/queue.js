var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    count : 0,
    start : 0
  }
  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};
//this => storage
queueMethods.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count - this.start > 0) {
    var temp = this[this.start]
    delete this[this.start];
    this.start++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.count - this.start;
};