/**Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric: */
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return isMirror(root, root);
};

var isMirror = function (p,q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    return p.val === q.val 
    && isMirror(p.right, q.left) 
    && isMirror(p.left, q.right);
}