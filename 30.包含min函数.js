/**
 * initialize your data structure here.
 */
 var MinStack = function () {
    this.arr = new Array()
    this.arr1 = [Infinity]
    this.num = Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr.push(x)
    this.num = Math.min(this.arr1[this.arr1.length-1],x)
    this.arr1.push(this.num)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.arr.pop()
    this.arr1.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
     return this.arr1[this.arr1.length-1]
};