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
var isValidBST = function (root) {
    validate(root,null,null)
};

var validate = (root, min, max) => {
    if (!root) return true
    if ((min !== null && root.val <= min)
        || (max !== null && root.val >= max)) return false
    return validate(root.left, min, root.val) && validate(root.right, root.val, max)
}

//[5,4,6,null,null,3,7]