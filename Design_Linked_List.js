//still has to fix
/**
 * Initialize your node
 */

var Node = function (val) {
    this.val = val
    this.next = null
 }
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if(index>=this.length) return -1;
    let cur = this.head, i=0;
    while(i!==index) i++, cur = cur.next;
    return cur.val;
};

MyLinkedList.prototype.getNode = function (index) {
    if(index < 0 || index >= this.length) return -1;
    let node = this.head
    while(index > 0){
        node = node.next
        index--
    }
    return node
};
/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    node.next = this.head
    if(!this.head) this.tail = node
    this.head = node
    this.length = this.length + 1
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val)
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 && index > this.size) return
    if(index === this.size) return this.addAtTail(val)
    if(index ===0 ) return this.addAtHead(val)
    
    let node = new Node(val)
    let preNode = this.head
    while(index>1) {
        preNode = preNode.next
        index--
    }
    node.next = preNode.next
    preNode.next = node
    this.length = this.length+1
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if(index >= this.size || index < 0) return
    if(index === 0) this.head = this.head.next
    else { 
        let preNode = this.head
        while(index>1){
            preNode = preNode.next
            index--
        }
        preNode.next = preNode.next.next ?  preNode.next.next : null
        if(!preNode.next) this.tail = preNode 
    }
    this.length--;
};

 
// var obj = new MyLinkedList()
// obj.addAtHead(1)
// // console.log(obj)
// obj.addAtTail(3)
// // console.log(obj)
// obj.addAtIndex(1, 2)
// // console.log(obj)
// console.log(obj.get(1))
// // console.log(obj)
// obj.deleteAtIndex(1)
// // console.log(obj)
// console.log(obj.get(1))
// // console.log(obj)

 
var obj = new MyLinkedList()
obj.addAtHead(7)
obj.addAtHead(2)
obj.addAtHead(1)
console.log(obj)
obj.addAtIndex(3, 0)
console.log('obj',obj)
obj.deleteAtIndex(2)
obj.addAtHead(6)
obj.addAtTail(4)
console.log(obj)
console.log(obj.get(4))
obj.addAtHead(4)
obj.addAtIndex(5, 0)
obj.addAtHead(6)


// 1 2 7 0 4