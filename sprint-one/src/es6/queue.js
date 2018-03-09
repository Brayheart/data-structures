class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
    this.count = 0,
    this.start = 0
  }

  enqueue(value){
    this[this.count] = value;
    this.count++;
  }

  dequeue(){
    if (this.count - this.start > 0) {
      var temp = this[this.start];
      delete this[this.start];
      this.start++;
      return temp;
    }
  }

  size(){
    return this.count - this.start;
  }
=======
  }

>>>>>>> parent of e51f79d... finished part 2
}
