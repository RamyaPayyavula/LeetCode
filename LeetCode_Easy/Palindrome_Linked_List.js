/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [],i=0
    let node = head
    while (node) {
        arr.push(node.val)
        node = node.next
    }
    const n = arr.length - 1
    while (i < Math.floor(n+1 / 2)) {
        if(arr[i] !== arr[n-i]) return false
        i++
    }
    return true
};