/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pointer1 = head
    let pointer2 = head, i = 1
    let prevNode
    if(!head.next || !head) return null
    while (i < n) {
        pointer2 = pointer2.next
        i++
    }
    while (pointer2.next) {
        prevNode = pointer1
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    if(pointer1.next){
        pointer1.val = pointer1.next.val
        pointer1.next = pointer1.next.next
    } 
    else prevNode.next = null
    return head
};