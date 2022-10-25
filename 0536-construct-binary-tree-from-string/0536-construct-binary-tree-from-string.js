/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    if(!s.length) return null
    let stack = [];
    let neg = false;
    let node;
    for(let c of s){
        if(!stack.length){
            node = new TreeNode(0)
            stack.push(node)
        }
        if(c == '('){
            node = new TreeNode(0)
            let prev = stack[stack.length-1];
            prev.left ? prev.right = node : prev.left = node;
            stack.push(node)
            neg = false;
        }
        else if(c == ")") stack.pop()
        else if(c == "-") neg = true;
        else{
            let num = neg ? Number(c) * -1 : Number(c)
            node.val = node.val * 10 + num;
        }
        
    }
    return stack[0]
};