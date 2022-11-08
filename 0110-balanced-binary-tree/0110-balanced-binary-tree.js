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
var isBalanced = function(root) {
    let balanced = true
    const helper = (node) => {
        if(!node) return -1
        let left = helper(node.left) + 1
        let right = helper(node.right) + 1
        if(Math.abs(left - right) > 1) balanced = false;
        return Math.max(left, right)
    }
    helper(root);
    return balanced
};