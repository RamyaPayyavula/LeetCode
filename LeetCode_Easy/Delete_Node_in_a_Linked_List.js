/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//it's a little tricky when we don't know head(we can not find out previous node) and the node is not tail
// we can simple copy next elements val to current element use it as a previous element as follows
var deleteNode = function(node) {
    if (node.next) {
        const nextnode = node.next
        node.val = nextnode.val
        node.next = nextnode.next
    }
};