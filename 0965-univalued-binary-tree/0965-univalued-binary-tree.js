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
var isUnivalTree = function(root) {
    const dfs = (node) => {
        if(!node) return true;
        if(node.val !== root.val) return false;
        return dfs(node.left) && dfs(node.right)
    }
    return dfs(root);
};