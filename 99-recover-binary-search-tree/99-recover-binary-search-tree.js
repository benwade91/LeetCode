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
    const inorder = (node, nums=[]) => {
        if(!node) return;
        inorder(node.left, nums)
        nums.push(node.val);
        inorder(node.right, nums);
    }
    
    const findSwapped = (nums, x=0, y=0) => {
        for(let i = 0; i < nums.length; i++){
            if(nums[i+1] < nums[i]){
                y = nums[i+1];
                if(!x) x = nums[i];
                else break;
            }
        }
        return [x,y]
    }
    
    const swapTree = (node, x, y) =>{
        if(!node) return;
        if(node.val === x) node.val = y;
        else if (node.val === y) node.val = x;
        swapTree(node.left, x, y)
        swapTree(node.right, x, y)
    }
    
    let list = new Array();
    inorder(root, list);
    const [x, y] = findSwapped(list)
    swapTree(root, x, y);
    return root
};