/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.data = {}
    this.size=0
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.data[val] >= 0) {
        return false
    } else {
        this.data[val] =val
        this.size++
        return true
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.data[val] >=0) {
        delete this.data[val]
        this.size--
        return true
    }
    else {
        return false
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const keys = Object.keys(this.data)
    const generateRandom = Math.floor(Math.random() * this.size);
    const key = keys[generateRandom];
    return this.data[key]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */