var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentValue = this._storage.get(index);
  if (currentValue === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < currentValue.length; i++) {
      if (currentValue[i][0] === k) {
        currentValue[i] = [k, v];
      } else {
        this._storage.get(index).push([k, v]);
      }
    }
  }

};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var current = this._storage.get(index);

  for (var i = 0; i < current.length; i++) {
    if (current[i][0] === k) {
      return current[i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var current = this._storage.get(index);

  for (var i = 0; i < current.length; i++) {
    if (current[i][0] === k) {
      current.splice(i, 1);
      this._storage.set(index, current);
      break;
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


