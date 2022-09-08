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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let head = null;
    const helper = node => {
        if(node.right) helper(node.right)
        if(node.left) helper(node.left)
        node.left = null;
        node.right = head;
        head = node;
    }
    if(root) helper(root);
};