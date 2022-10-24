/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((n, i)=>nums[i] = nums[i] + (nums[i-1] || 0))
};