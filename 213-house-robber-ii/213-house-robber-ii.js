/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp1 = [nums[0]];
    let dp2 = [0, (nums[1] || 0)];
    for(let i = 1; i < nums.length-1; i++){
        dp1[i] = Math.max( nums[i] + (dp1[i-2] || 0), dp1[i-1])
    }
    for(let i = 2; i < nums.length; i++){
        dp2[i] = Math.max( nums[i] + (dp2[i-2] || 0), dp2[i-1])
    }
    return Math.max(dp1[dp1.length-1], dp2[dp2.length-1])
};