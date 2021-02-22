/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//space complexity of o(n)
var hasCycle = function(head) {
    let nodesSeen = {}
    while (head != null) {
        if (nodesSeen.contains(head)) {
            return true;
        }
        nodesSeen.add(head);
        head = head.next;
    }
    return false;
};
//Approach 2: Floyd's Cycle Finding Algorithm
/**Intuition
Imagine two runners running on a track at different speed. What happens 
when the track is actually a circle?
Algorithm :
The space complexity can be reduced to O(1) by considering two pointers at different 
speed - a slow pointer and a fast pointer. The slow pointer moves one step at a time 
while the fast pointer moves two steps at a time. If there is no cycle in the list, 
the fast pointer will eventually reach the end and we can return false in this case.*/

var hasCycle = function(head) {
    let fast = head
    let slow = head
    while (fast != null && slow!=null) {
        if(fast.next && fast.next.next)fast = fast.next.next
        else return false
        slow = slow.next
        if(fast === slow) return true
    }
    return false;
};