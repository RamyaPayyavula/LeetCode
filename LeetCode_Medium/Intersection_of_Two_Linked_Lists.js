/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//learn: two pointer approach also for this problem
var getIntersectionNode = function(headA, headB) {
    let visisted = new Set()
    while (headA!== null) {
        visisted.add(headA)
        headA = headA.next
    }
    while (headB !== null) {
        if (visisted.has(headB)) return headB 
    headB = headB.next
    }
    return null
};