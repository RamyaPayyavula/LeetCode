/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(capacity) {
    this.capacity = capacity
    this.head = -1;
    this.size = 0
    this.data = Array.from(capacity)
    this.tail = -1;
    this.mean = 0;
    this.sum = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MovingAverage.prototype.enQueue = function (value) {
    if (this.isFull()) return false
    this.tail = (this.tail + 1) % this.capacity;
    if (this.head === -1) this.head = 0;
    this.data[this.tail] = value;
    this.size = this.size + 1;
    return true;
};

/**
 * @return {boolean}
 */
MovingAverage.prototype.deQueue = function () {
    if (this.head === -1) return false
    if (this.head === this.tail) {
        const deleted = this.data[this.head]
        this.head = -1;
        this.tail = -1;
        this.size = this.size -1
        return deleted
    }
    const deleted = this.data[this.head]
    this.data[this.head] = 0
    this.head = (this.head + 1) % this.capacity;
    this.size = this.size -1;
    return deleted;    
};
MovingAverage.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MovingAverage.prototype.isFull = function() {
    return this.size === this.capacity;
};
/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.isFull()) {
        const deleted = this.deQueue()
        this.enQueue(val)
        const total = this.sum - deleted + val
        this.mean = (total / this.size).toFixed(5)
        this.sum = total
    }
    else {
        this.enQueue(val)
        const total = this.sum + val
        this.mean = (total / (this.size)).toFixed(5)
        this.sum = total
    }
    return this.mean
};


