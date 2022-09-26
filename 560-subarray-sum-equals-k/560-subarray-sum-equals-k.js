/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let currSum = 0
    let seen = {0:1}
    for(let num of nums){
        currSum += num;
        count += seen[currSum - k] || 0
        seen[currSum] = seen[currSum] + 1 || 1
    }
    return count 
};