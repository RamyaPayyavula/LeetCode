/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l1 = reverseLinkedList(l1);
    l2 = reverseLinkedList(l2);
    let carry = 0;
    let l3 = new ListNode();
    let res = l3;
    while (l1 !== null || l2 !== null) {
        const val1 = l1 !==null ? l1.val : 0
        const val2 = l2!==null ? l2.val : 0
        const sum = val1 + val2 + carry;
        const value = sum % 10;
        carry = Math.floor(sum / 10);
        const node = new ListNode(value)
        res.next = node;
        res = res.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if (carry !== 0) {
        const node = new ListNode(carry)
        res.next = node;
    }
    return reverseLinkedList(l3.next);
};

const reverseLinkedList = (head)=>{
    let prev = null;
    let curr = head;
    while (curr != null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}