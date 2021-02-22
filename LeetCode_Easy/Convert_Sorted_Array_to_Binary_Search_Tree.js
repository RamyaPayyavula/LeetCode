/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    var helper = (left, right) => {
        if (left > right) return null;
        const p = (left + right) / 2;
        var root = new TreeNode(nums[p]);
        root.left = helper(left, p - 1);
        root.right = helper(p + 1, right);
        return root;
    }
    return helper(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))
