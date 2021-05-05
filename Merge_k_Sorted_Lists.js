/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) { return new ListNode().next; }
    let k = lists.length;
    let i = 1;
    let res = lists[0];
    while (i < k) {
        res = mergeTwoLists(res, lists[i])
        i++;
    }
    return res;
};

var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2)
        return null;
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    return (!l2 || l1.val < l2.val) ?
        { ...l1, next: mergeTwoLists(l1.next, l2) } : { ...l2, next: mergeTwoLists(l1, l2.next) };
}