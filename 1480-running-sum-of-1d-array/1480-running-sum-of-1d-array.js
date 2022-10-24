/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let num = 0;
    for(let i = 0; i < nums.length; i++){
        nums[i] += num;
        num = nums[i]
    }
    return nums;
};