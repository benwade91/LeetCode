/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let sum = 0
    let count = 0
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        while(sum * (1+i-j) >=k) sum -= nums[j++]
        count += (1+i-j)
    }
    return count
};