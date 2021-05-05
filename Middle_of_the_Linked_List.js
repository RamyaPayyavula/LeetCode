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
var middleNode = function(head) {
    let i = 1;
    let j = 1;
    let currentNode = head;
    let middleNode = head;
    while (currentNode) {
        const mid = j % 2 === 1 ? Math.floor(j / 2) : j / 2 + 1;
        if (i < mid) {
            middleNode = middleNode.next;
            i++;
        }
        j++;
        currentNode = currentNode.next
    }
    return middleNode;
};