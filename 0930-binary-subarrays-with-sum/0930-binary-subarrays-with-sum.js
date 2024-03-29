/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 
 count: 4
 {
 0:1
 1:2
 2:2
 3:1
 }
 
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let map = {'0':1};
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(map[sum-goal]) count += map[sum-goal]
        map[sum] = map[sum] + 1 || 1
    }
    return count
};