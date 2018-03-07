var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0,
  this.start =0
};

Queue.prototype.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function() {
  if ( this.count - this.start > 0) {
    var temp = this[this.start];
    delete this[this.start];
    this.start++;
    return temp;
  }
}

Queue.prototype.size = function() {
  return this.count - this.start;
}

