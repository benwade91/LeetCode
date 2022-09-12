/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let data = [];
    const helper = (node) => {
        if(!node){
            data.push(null);
            return;
        }
        data.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return data.reverse();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    const buildTree = () => {
        let val = data.pop()
        if(!data.length || val===null) return null;
        let node = new TreeNode(val);
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */