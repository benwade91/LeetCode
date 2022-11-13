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
var minDepth = function(root) {
    if(!root) return 0;
    let min = Infinity;
    let stack = [[root, 1]];
    while(stack.length){
        let [node, depth] = stack.pop();
        if(depth > min) continue;
        if(!node.right && !node.left) min = Math.min(depth, min);
        if(node.left) stack.push([node.left, depth+1])
        if(node.right) stack.push([node.right, depth+1])
    }
    return min;
};