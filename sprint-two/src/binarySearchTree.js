var BinarySearchTree = function (value) {
    var constructor = {};
    constructor.value = value;
    constructor.left = undefined;
    constructor.right = undefined;

    _.extend(constructor, BinaraySearchTreeMethods);

    return constructor;
};

var BinaraySearchTreeMethods = {};

BinaraySearchTreeMethods.insert = function (value) {

    if (value < this.value && this.left === undefined) {
        this.left = BinarySearchTree(value);
    } else if (value > this.value && this.right === undefined) {
        this.right = BinarySearchTree(value);
    } else if (value < this.value && this.left) {
        this.left.insert(value);
    } else if (value > this.value && this.right) {
        this.right.insert(value);
    };
};

BinaraySearchTreeMethods.contains = function (value) {
    if (this.value === value) {
        return true;
    } else if (value < this.value && this.left) {
        return this.left.contains(value);
    } else if (value > this.value && this.right) {
        return this.right.contains(value);
    }
    return false;
};

BinaraySearchTreeMethods.depthFirstLog = function (func) {
    var num = func(this.value);

    if (this.left) {
        this.left.depthFirstLog(func);
    } if (this.right) {
        this.right.depthFirstLog(func);
    }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
