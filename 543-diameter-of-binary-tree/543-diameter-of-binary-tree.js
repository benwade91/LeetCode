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
var diameterOfBinaryTree = function(root) {
    let max = 0;
    const helper = (node) => {
        if(!node) return -1;
        let left = helper(node.left) + 1
        let right = helper(node.right) + 1
        max = Math.max(max, left+right)
        return Math.max(left, right)
    }
    helper(root)
    return max
};