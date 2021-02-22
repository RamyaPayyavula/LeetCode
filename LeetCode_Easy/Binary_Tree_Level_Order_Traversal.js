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
var levelOrder = function (root) {
    if(!root) return []
    let levels = []
    var BFSLevel = (node,level) => {
        if (levels.length === level) levels.push([])
        levels[level].push(node.val)
        if (node.left) BFSLevel(node.left, level + 1)
        if (node.right) BFSLevel(node.right, level + 1)
    }
    BFSLevel(root,0)
    return levels
};

