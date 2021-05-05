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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
//solution using breadth first search
var isCousins = function(root, x, y) {
    //children of node are at 2n+1 and 2n+2 
    //first root childent ar 2*0+1 and 2*0+2
  const que = [root];
  while (que.length) {
    const node_at_depth = que.length;
    let foundX = false;
    let foundY = false;
    for (let i = 0; i < node_at_depth; i++)
    {
      const node = que.shift(); 
      if (node.left && node.right){
        if((node.left.val === x && node.right.val === y) || (node.left.val === y && node.right.val === x)) return false;
      }
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true;
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
    }
    if (foundX && foundY) return true;
  }
    return false;
};

//solution using breadth first search
var isCousins = function (root, x, y) {
  if (root.val === x || root.val === y || !root) return false;
  const dfsTraversal = (root, target, depth) => {
    if(!root) return
    if (root && root.left && root.left.val === target) return [root.val, depth + 1];
    if (root && root.right && root.right.val === target) return [root.val,  depth + 1];
      return dfsTraversal(root.left, target, depth + 1) ||
           dfsTraversal(root.right, target, depth + 1);
  }
  let [parentX, depthX] = dfsTraversal(root, x, 0);
  let [parentY, depthY] = dfsTraversal(root, y, 0);
  return parentX !== parentY && depthX == depthY;
}
