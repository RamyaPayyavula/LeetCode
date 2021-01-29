class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(newVal) {
        const newNode = new Node(newVal)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
     pop(){
        if(this.length === 0) return undefined;
        var removedTail = this.tail;
        if(this.length === 1){
            this.head= null;
            this.tail=null;
            this.length--;
            return removedTail;
        } else {
            this.tail = removedTail.prev;
            this.tail.next = null;
            removedTail.prev = null;
            this.length--;
            return removedTail;
        }
    }

    unshift(newVal){
        const newNode = new Node(newVal)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
         if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    remove(index){
        if (this.length < 0 || index >= this.length) return undefined
        if (this.index === 0) return this.shift()
        if (this.length - this.index === 1) return this.pop()
        const foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.prev.next = foundNode.next
            foundNode.next.prev = foundNode.prev;
            foundNode.next = null;
            foundNode.prev = null;
            this.length--;
            return foundNode;
        }
    }
   
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
// console.log(doublyLinkedList.length);
// console.log(doublyLinkedList.head.val);
// console.log(doublyLinkedList.tail.val);
// console.log(doublyLinkedList.head.prev);
console.log(doublyLinkedList.reverse());

