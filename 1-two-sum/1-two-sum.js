/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let rem = target - nums[i];
        if(map.has(rem)) return [map.get(rem), i];
        map.set(nums[i], i)
    }
};