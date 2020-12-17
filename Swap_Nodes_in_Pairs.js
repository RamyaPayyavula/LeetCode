/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head) {
      return null;
    }
    if(!head.next) {
      return head;
    }
    const nextNode = head.next;
    const nextVal = nextNode.val;
    const newNextNode = new ListNode(head.val);
    newNextNode.next = swapPairs(nextNode.next);
    const newHeadNode = new ListNode(nextVal);
    newHeadNode.next = newNextNode;
    return newHeadNode;
};

console.log(swapPairs([1, 2, 3, 4]));