/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry
    const dummyHead = new ListNode(0);
    let resLinked = dummyHead
    while (l1 !=null || l2 != null) {
        const num1 = l1 === null ? 0 : l1.val
        const num2 = l2 === null ? 0 : l2.val
        const sum = carry + num1 + num2
        carry = Math.trunc(sum / 10)
        resLinked.next = new ListNode(sum%10)
        resLinked = resLinked.next
        if(l1!==null)l1 = l1.next
        if (l2 !== null)l2= l2.next
    }
    return dummyHead.next
};
