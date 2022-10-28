/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let [res, min, max, len] = [Math.max(...nums), 1, 1, nums.length]
    
    for(let i = 0; i < len; i++){
        let curr = max;
        max = Math.max(curr * nums[i], min * nums[i], nums[i])
        min = Math.min(curr * nums[i], min * nums[i], nums[i])
        res = Math.max(res, max);
    }
    return res
};