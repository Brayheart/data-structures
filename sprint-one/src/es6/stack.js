class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  }

  push(value) {
    this[this.count] = value;
    this.count++;
  }

  pop(){
    if (this.count > 0) {
      this.count--;
      var temp = this[this.count];
      delete this[this.count];
      return temp;
    }
  }

  size(){
    return this.count;
  }
}