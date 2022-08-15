/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums[0] === 0 && nums.length > 1) return false
    const dp = [];
    dp[0] = nums[0];
    for(let i = 1; i < nums.length-1; i++){
        dp[i] = Math.max(dp[i-1]-1, nums[i]);
        if(dp[i] == 0) return false;
    }
    return true
};