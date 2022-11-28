/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    let queue = [root];
    while(queue.length){
        let node = queue.pop();
        if(node){
            res.push(node.val);
            queue.push(...node.children.reverse())   
        }
    }
    return res;
};