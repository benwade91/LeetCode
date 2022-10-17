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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if(!root) return [];
    let res = [];
    let map = {};
    let min = 0;
    
    let queue = [[root, 0]]
    
    while(queue.length){
        const [node, i] = queue.shift();
        min = Math.min(min, i);
        if(map[i]) map[i].push(node.val);
        else map[i] = [node.val];
        if(node.left) queue.push([node.left, i-1]);
        if(node.right) queue.push([node.right, i+1]);
    }
    
    while(map[min]){
        res.push(map[min]);
        min++;
    }
    return res;
};