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
    const helper = (node) => {
        if(!node) return;
        res.push(node.val);
        for(let kid of node.children) helper(kid);
    }
    helper(root);
    return res;
};