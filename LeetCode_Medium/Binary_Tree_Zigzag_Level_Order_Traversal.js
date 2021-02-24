/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let level = 0
    let queue = [[root]]
    let order = [[root.val]]
    while (queue.length > 0) {
        const currLevel = queue.shift()
        const temp = []
        const tempQueue =[]
        let i = 0
        while (i < currLevel.length) {
            const curr = currLevel[i]
            if (curr.left) {
                temp.push(curr.left.val)
                tempQueue.push(curr.left)
            }
            if (curr.right) {
                temp.push(curr.right.val)
                tempQueue.push(curr.right)
            }
            i++
        }
        if (tempQueue.length > 0) queue.push(tempQueue)
        if (temp.length > 0) { 
            if (level % 2 === 0) order.push(temp.reverse())
            else order.push(temp)
        }
        level++
    }
    return order
};