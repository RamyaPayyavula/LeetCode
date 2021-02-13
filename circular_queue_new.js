/**
 * @param {number} k
 */
var MyCircularQueue = function (capacity) {
    this.head = 0;
    this.tail = (this.head + this.count - 1) % this.capacity;
    this.count = 0;
    this.queue = Array.from(capacity)
    this.capacity = capacity
}

MyCircularQueue.prototype.enQueue = function (value) {
    if (this.count === this.capacity)
      return false;
    this.queue[(this.head + this.count) % this.capacity] = value;
    this.count += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.count === 0)
        return false;
    this.queue[this.head] = undefined
    this.head = (this.head + 1) % this.capacity;
    this.count -= 1;
    return true;
}
/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.count > 0) {
        return this.queue[this.head];
    }
    return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.count > 0) {
        return this.queue[(this.head + this.count -1)%this.capacity];
    }
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.count === 0;
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.capacity;
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