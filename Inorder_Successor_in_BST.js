/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(bst, p) {
    let isNext = false
    let ans
    var inorder = (root) => {
        if(!root || ans!== undefined) return 
        inorder(root.left)
        if(isNext && ans === undefined) {
            ans = root
            return 
        }
        if (root.val === p.val) isNext = true
        inorder(root.right)
    }
    inorder(bst)
    return ans
};