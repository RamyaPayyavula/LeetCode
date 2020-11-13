/**Given head which is a reference node to a singly-linked list. The value of each node in the linked list 
 * is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value 
 * of the number in the linked list. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue1 = function(head) {
    return parseInt(head.join(''),2)

};
var getDecimalValue = function(head) {
    let arr=[]
    arr.push(head.val);
    while(head.next){
        arr.push(head.next.val)
        head.next = head.next.next;
    }
    return parseInt(arr.join(''),2)
};

console.log(getDecimalValue([1,0,1]));
console.log(getDecimalValue([0]));
console.log(getDecimalValue([1]));
console.log(getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]));
console.log(getDecimalValue([0,0]));