var MyQueue = function () {
    this.x = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    return this.x.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.x.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.x[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.x.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var obj = new MyQueue();
obj.push(10);
console.log(obj.peek());
console.log(obj.empty());
