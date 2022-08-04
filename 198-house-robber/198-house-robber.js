/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0]
    let dp = [];
    let n = nums.length;
    dp[0] = nums[0];
    dp[1] = nums[1];
    for(let i = 2; i < n; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
        dp[i-1] = Math.max(dp[i-1], dp[i-2]);
    }
    return Math.max(dp[n-1], dp[n-2]);
};