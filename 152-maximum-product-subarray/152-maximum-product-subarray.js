/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = Math.max(...nums);
    let min = 1;
    let max = 1;
    for(let i = 0; i < nums.length; i++){
        let curr = max;
        max = Math.max(curr * nums[i], min * nums[i], nums[i])
        min = Math.min(curr * nums[i], min * nums[i], nums[i])
        res = Math.max(res, max);
        console.log(min, max, res)
    }
    return res
};