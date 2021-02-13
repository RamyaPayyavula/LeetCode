/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.head = -1;
    this.tail = -1;
    this.size = 0;
    this.data = Array.from(k)
    this.k = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if ((this.tail === this.k - 1 && this.head === 0) || this.tail === this.head - 1) return false
    this.tail = (this.tail + 1) % this.k;
    if (this.head === -1) this.head = 0;
    this.data[this.tail] = value;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.head === -1) return false
    if (this.head === this.tail) {
        this.head = -1;
        this.tail = -1;
        this.size--;
        return true;
    }
    this.data[this.head] = undefined
    this.head = (this.head + 1) % this.k;
    this.size--;
    return true;    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.size > 0) {
        return this.data[this.head];
    }
    return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.size > 0) {
        return this.data[this.tail];
    }
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0;
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.k;
};



var obj = new MyCircularQueue(8)
var param_1 = obj.enQueue(3)
var param_2 = obj.enQueue(9)
var param_3 = obj.enQueue(5)
var param_4 = obj.enQueue(0)
console.log('obj', obj.head, obj.tail, obj)
var param_6 = obj.deQueue()
console.log('obj', obj.head, obj.tail, obj)
var param_7 = obj.deQueue()
console.log('obj', obj.head, obj.tail, obj)

// var obj = new MyCircularQueue(3)
// var param_1 = obj.enQueue(1)
// var param_2 = obj.enQueue(2)
// var param_3 = obj.enQueue(3)
// var param_4 = obj.enQueue(4)
// console.log(obj)
// var param_5 = obj.Rear()
// var param_6 = obj.isFull()
// console.log('rear', param_5)
// console.log('isfull', param_6)
// var param_7 = obj.deQueue()
// console.log(obj)
// var param_8 = obj.Front()
// var param_9 = obj.enQueue(4)
// var param_10 = obj.Rear()
// console.log('rear', obj, param_10, obj.tail, obj.head)
// var param_11 = obj.deQueue()
// var param_12 = obj.enQueue(5)
// console.log('rear', obj, param_12, obj.tail, obj.head)
// var param_13 = obj.deQueue()
// console.log('rear', obj, param_12, obj.tail, obj.head)

 