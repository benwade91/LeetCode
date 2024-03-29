/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++){
        let remainder = target - nums[i];
        if(map[remainder] !== undefined) return [map[remainder], i];
        map[nums[i]] = i;
    }
};