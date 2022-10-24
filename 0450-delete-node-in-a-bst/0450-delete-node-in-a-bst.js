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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root;
    if(root.val === key) {
        if(root.left && root.right){
            let curr = root.right;
            while(curr.left) curr = curr.left;
            curr.left = root.left;
            return root.right;
        } else return root.left || root.right;
    }
    root.right = deleteNode(root.right, key);
    root.left = deleteNode(root.left, key);
    return root
};