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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return !subRoot;
    return compare(root, subRoot) ||
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
};

function compare(root1, root2){
    if(!root1 || !root2) return !root1 && !root2;
    if(root1.val !== root2.val) return false;
    return compare(root1.left, root2.left) &&
        compare(root1.right, root2.right)
}