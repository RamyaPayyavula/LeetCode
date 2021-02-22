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
// var mergeTwoLists = function (l1, l2) {
//     let res = []
//     if (l1.length === 0 && l2.length === 0) return [];
//     else if (l1.length === 0 && l2.length !==0) return l2;
//     else if (l2.length === 0 && l1.length !== 0) return l1;
//     else if (l1[0] > l2[0]) res.push(l2[0], l1[0]);
//     else res.push(l1[0], l2[0]);
//     return res.concat(...mergeTwoLists(l1.slice(1,l1.length), l2.splice(1,l2.length)));
// };

var mergeTwoLists = function(h1, h2) {
    if (!h1 || !h2) // return the non-empty one
        return h1 || h2
    
    if (h1.val>h2.val) // swap to make sure h1 is always smaller than h2
        [h1, h2] = [h2, h1]
    h1.next = mergeTwoLists(h1.next, h2)
    return h1;
};

var mergeTwoLists = function (l1,l2) {
     if (l1 == null) {
        return l2;
    }
    else if (l2 == null) {
        return l1;
    }
    else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));

