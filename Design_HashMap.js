/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.hashMap = {}
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.hashMap[key] = value
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.hashMap[key] >=0 ? this.hashMap[key] : -1
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if(this.get(key)) delete this.hashMap[key]
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// ["MyHashMap","remove","put","put","put","put","put","put","get","put","put"]
// [[],[2],[3,11],[4,13],[15,6],[6,15],[8,8],[11,0],[11],[1,10],[12,14]]
var hashMap = new MyHashMap();

hashMap.remove(2); 

hashMap.put(3, 11);          
hashMap.put(4, 13);  
hashMap.put(15, 6); 
hashMap.put(6, 15); 
hashMap.put(8, 8);        
hashMap.put(11, 0);  
console.log(hashMap.hashMap)      
console.log(hashMap.get(11));
hashMap.put(1, 10);        
hashMap.put(12, 14);  

// hashMap.put(1, 1);          
// hashMap.put(2, 2);         
// console.log(hashMap.get(1));            // returns 1
// console.log(hashMap.get(3));            // returns -1 (not found)
// hashMap.put(2, 1);          // update the existing value
// console.log(hashMap.get(2));            // returns 1 
// hashMap.remove(2);          // remove the mapping for 2
// console.log(hashMap.get(2));            // returns -1 (not found) 