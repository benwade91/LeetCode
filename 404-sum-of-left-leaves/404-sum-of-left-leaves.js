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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const helper = (node, lNode = false) => {
        if(!node) return;
        if(!node.left && !node.right && lNode) 
            sum += node.val;
        helper(node.left, true);
        helper(node.right);
  }
    helper(root)
  return sum;
};