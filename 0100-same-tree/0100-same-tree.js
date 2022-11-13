/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false
    let tree1 = [[p,"r"]];
    let tree2 = [[q, "r"]];
    while(tree1.length || tree2.length){
        if(tree1.length !== tree2.length) return false;
        let [a, c] = tree1.pop();
        let [b, d] = tree2.pop();
        if(a.val !== b.val || c !== d) return false;
        if(a.left) tree1.push([a.left, "l"])
        if(a.right) tree1.push([a.right, "r"])
        if(b.left) tree2.push([b.left, "l"])
        if(b.right) tree2.push([b.right, "r"])
    }
    return true;
};