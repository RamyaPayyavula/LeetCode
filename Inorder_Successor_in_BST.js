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
    var inorder = (root) => {
        console.log('root',root)
        if(!root) return 
        inorder(root.left)
        if(isNext) return root
        if (root.val === p.val) isNext = true
        inorder(root.right)
    }
    const ans = inorder(bst)
    return ans!== undefined ? ans : null

};