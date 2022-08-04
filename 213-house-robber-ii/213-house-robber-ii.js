/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length < 4) return Math.max(...nums)
    let dp1 = [nums[0]]
    let dp2 = [0, nums[1]]
    for(let i = 1; i < nums.length-1; i++){
        dp1[i] = Math.max(dp1[i-1], (dp1[i-2] || 0) + nums[i])
    }
    for(let i = 2; i < nums.length; i++){
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i])
    }
    return Math.max(dp1.pop(), dp2.pop())
};