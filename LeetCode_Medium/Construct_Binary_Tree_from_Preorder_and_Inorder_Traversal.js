/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder) return preorder
    let i = 0
    const tree = new TreeNode() 
    let inOrderHash = {}
    build = (inOrd) => {
        if(i === preorder.length || inOrd.length ===0) return
        const idx = inOrd.findIndex(preorder[i])
        tree.val = preorder[i]
        const leftTree = inOrd.slice(0, idx)
        if (leftTree) {
            tree.left = build(leftTree)
        }
        const rightTree = inOrd.slice(idx + 1, inOrd.length)
        if (rightTree) {
            tree.right = build(rightTree)
        }
        i++
    }
    build(inorder)
    return tree
};