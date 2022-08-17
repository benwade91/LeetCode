/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;
    let nodeVal = preorder.shift();
    let root = new TreeNode(nodeVal);
    if(!preorder.length || !inorder.length) return root;
    //left side of tree
    let i = 0;
    while(inorder[i] !== nodeVal) i++;
    let leftIn = inorder.slice(0, i);
    let leftPre = [];
    for(let j = 0; j < i; j++) leftPre.push(preorder.shift())
    
    //right side of tree
    let rightIn = inorder.slice(i+1)
    
    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(preorder, rightIn);
    
    return root
};