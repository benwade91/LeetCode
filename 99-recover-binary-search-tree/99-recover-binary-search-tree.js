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
var recoverTree = function(root) {
    let stack = [];
    let x=null,y=null,prev=null;
    while(root || stack.length){
        while(root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if(prev && root.val < prev.val){
            y = root;
            if(!x) x = prev;
            else break;
        }
        prev = root;
        root = root.right;
    }
    let temp = x.val;
    x.val = y.val;
    y.val = temp;
};