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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let inorder = []
     traverse = (node) => {
        if(!node) return
        traverse(node.left)
        inorder.push(node.val)
        traverse(node.right)
    }
     traverse(root)
    return inorder
};