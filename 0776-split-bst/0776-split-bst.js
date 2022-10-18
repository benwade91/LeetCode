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
 * @param {number} target
 * @return {TreeNode[]}
 */
var splitBST = function(root, target) {
    if(!root) return [null, null];
    else if(root.val <= target){
        let node = splitBST(root.right, target);
        root.right = node[0];
        node[0] = root;
        return node;
    } else {
        let node = splitBST(root.left, target);
        root.left = node[1];
        node[1] = root;
        return node;
    }
}