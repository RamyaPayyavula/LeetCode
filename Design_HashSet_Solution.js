/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.hashTable = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    const hash = this.hash(key)
    if(! this.contains(key)) this.hashTable[hash] = (this.hashTable[hash] || []).concat([key])
};

MyHashSet.prototype.hash = function (key) {
    return key % 23;
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const hash = this.hash(key)
    if (this.contains(key)) {
        const index = this.hashTable[hash].indexOf(key)
        delete this.hashTable[hash].splice(index,1)
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const hash = this.hash(key)
    // console.log('this.hashTable[hash]',this.hashTable[hash])
    return this.hashTable[hash] && this.hashTable[hash].indexOf(key) !== -1 ? true : false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
console.log('step1',myHashSet.hashTable)
console.log(myHashSet.contains(1)); // return True
console.log(myHashSet.contains(3)); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
console.log('step2',myHashSet.hashTable)
console.log(myHashSet.contains(2)); // return True
myHashSet.remove(2);   // set = [1]
console.log('step3',myHashSet.hashTable)
myHashSet.contains(2); // return False, (already removed)
console.log('step4',myHashSet.hashTable)
