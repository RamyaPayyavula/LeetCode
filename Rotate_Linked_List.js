/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let n;
    if (head == null) return null;
    if (head.next == null) return head
    let old_tail = head;
    for (n = 1; old_tail.next !==null; n++){
        old_tail = old_tail.next;
    }
    old_tail.next = head; //making it circular
    // find new tail : (n - k % n - 1)th node
    // and new head : (n - k % n)th node
    let new_tail = head;
    for (let i = 0; i < n - k % n - 1; i++)
      new_tail = new_tail.next;
    const new_head = new_tail.next;
    // break the ring
    new_tail.next = null;
    return new_head;
};