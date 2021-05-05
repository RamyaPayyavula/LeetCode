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
const reverseKGroup = (head, k) => {
  if (head === null) return head
  // define startNode and endNode
  let start = head, end = head
  
  // return self if linked list's length is smaller than k
  for (let i = 0; i < k; i++) {
    if (end === null) return head
    end = end.next
  }
  // reverse from startNode to endNode
  let newHead = reverse(start, end)
  // recursive the rest nodes and concat the result
  start.next = reverseKGroup(end, k)
  return newHead
};

// reverse from startNode to endNode
const reverse = (start, end) => {
  let [prev, curr] = [null, start]
  while (curr != end) [curr.next, prev, curr] = [prev, curr, curr.next]
  return prev
}